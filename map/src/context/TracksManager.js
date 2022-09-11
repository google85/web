import Utils from "../util/Utils";
import {Point, Track, TrackData} from "./TrackStore";
import {post} from "axios";

function loadTracks() {
    return localStorage.getItem('localTracks') !== null ? JSON.parse(localStorage.getItem('localTracks')) : [];
}

function saveTracks(tracks) {
    if (tracks.length > 0) {
        let res = [];
        tracks.forEach(function (track) {
            res.push({
                name: track.name,
                metaData: track.metaData,
                tracks: track.tracks,
                wpts: track.wpts,
                ext: track.ext,
                analysis: track.analysis,
                selected: false
            })
        })
        localStorage.setItem('localTracks', JSON.stringify(res));
    }
}

function generate(ctx) {
    let name = createName(ctx);
    let points = Utils.getPointsDist(createPoints());
    points.push({lat: 44, lng: 19, gap: true})
    points.push({lat: 48, lng: 31})
    points.push({lat: 48, lng: 49})
    let pointsArr = [];
    points.forEach(p => pointsArr.push(new Point({lat: p.lat, lng: p.lng, dist: p.dist, gap: p.gap}, null, null)))
    let tracks = [new Track(null, pointsArr, null)]
    return new TrackData(name, tracks, null, null, null);
}

function createName(ctx) {
    let date = new Date().toDateString();
    let count = 0;
    let name;
    let maxNumber = 0;
    ctx.localTracks.forEach(t => {
        if (t.name.split(' - ')[0] === date) {
            let sp = parseInt(t.name.split(' - ')[1], 10);
            count++;
            if (sp > maxNumber) {
                maxNumber = sp;
            }
        }
    })
    name = count > 0 ? (date + ' - ' + (count + 1)) : date;
    ctx.localTracks.forEach(t => {
        if (t.name === name) {
            name = date + ' - ' + (maxNumber + 1);
        }
    })

    return name;
}

function createPoints() {
    let points = [];
    let prevPoint;
    for (let i = 1; i <= 10; i++) {
        let lat;
        let lng;
        if (!prevPoint) {
            lat = Math.floor(Math.random() * (Math.floor(48.305) - Math.ceil(51.543))) + Math.ceil(51.543);
            lng = Math.floor(Math.random() * (Math.floor(37.749) - Math.ceil(24.664))) + Math.ceil(24.664);
        } else {
            lat = Math.floor(Math.random() * (Math.floor(prevPoint.lat - 2) - Math.ceil(prevPoint.lat + 2))) + Math.ceil(prevPoint.lat + 2);
            lng = Math.floor(Math.random() * (Math.floor(prevPoint.lng - 2) - Math.ceil(prevPoint.lng + 2))) + Math.ceil(prevPoint.lng + 2);
        }
        prevPoint = {lat: lat, lng: lng};
        points.push({lat: lat, lng: lng})
    }

    return points;
}

function getFileName(currentFile) {
    let file = Object.assign('', currentFile);
    return prepareName(file.name, file.local);
}

function prepareName(name, local) {
    name = name.replace(/.gpx/, '');
    if (name.includes('/')) {
        return name.split('/')[1]
    } else if (local && name.includes(':')) {
        return name.split(':')[1]
    } else {
        return name;
    }
}

async function getTrackData(file) {
    let formData = new FormData();
    formData.append('file', file);
    const response = await Utils.fetchUtil(`${process.env.REACT_APP_GPX_API}/gpx/process-track-data`, {
        method: 'POST',
        credentials: 'include',
        body: formData
    });

    let track = null;
    if (response.ok) {
        let resp = await response.text();
        if (resp) {
            let data = JSON.parse(resp.replace(/\bNaN\b/g, '"***NaN***"'), function (key, value) {
                return value === "***NaN***" ? NaN : value;
            });
            if (data) {
                track = data.gpx_data;
                // updateSelectedTrack(ctx, track);
            }
        }
    }
    return track;
}

function updateSelectedTrack(ctx, track) {
    ctx.setSelectedGpxFile(Object.assign({}, track));
}

function addTrack(ctx, track) {
    ctx.localTracks.push(track);
    ctx.setLocalTracks([...ctx.localTracks]);
    TracksManager.saveTracks(ctx.localTracks);
}

function getTrackPoints(track) {
    let points = [];
    if (track.tracks) {
        track.tracks.forEach(track => {
            track.points.forEach(point => {
                if (point.geometry) {
                    point.geometry.forEach(trk => {
                        points.push(trk);
                    })
                } else {
                    points.push(point);
                }
            })
        })
    }
    return points;
}

async function getGpxTrack(ctx) {
    let trackData = {
        tracks: ctx.selectedGpxFile.tracks,
        wpts: ctx.selectedGpxFile.wpts,
        metaData: ctx.selectedGpxFile.metaData,
        ext: ctx.selectedGpxFile.ext,
        analysis: null
    }

    if (!trackData.metaData.name) {
        trackData.metaData.name = ctx.selectedGpxFile.name;
    }

    return await post(`${process.env.REACT_APP_GPX_API}/gpx/save-track-data`, trackData,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}

const TracksManager = {
    loadTracks,
    saveTracks,
    generate,
    getFileName,
    prepareName,
    getTrackData,
    addTrack,
    updateSelectedTrack,
    getTrackPoints,
    getGpxTrack
};

export default TracksManager;