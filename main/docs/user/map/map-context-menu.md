---
sidebar_position: 1
title: "Map Context menu"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import ProFeature from '@site/src/components/buttons/ProFeature.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';


Map Context menu' provides information of selected object on the map and allows to share, to edit, to move or to navigate to this place.


## Context menu 
In order to open Context menu you should tap on the object on the Map. There are two types of map contet menu: selecting an object - by short tap, selecting any precise point on the map - by long tap.

### Select an object (short tap)
Context menu will appear when you **short tap** on the marked object on the Map. In this case context menu provides you the information of the object name & icon (how it is marked on the map),  address, distance and direction from your current position. By this method you can select POI, Favorite, Transport stop, Marker or Map Object.

**Note**: Selectable map objects are OpenStreetMap [node](https://wiki.openstreetmap.org/wiki/Node) or [way](https://wiki.openstreetmap.org/wiki/Way).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context menu Android](@site/static/img/map/map_context_menu_short_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu iOS](@site/static/img/map/map_context_menu_short_tap_ios.png)

</TabItem>

</Tabs> 


### Select any point (long tap)
Context menu will appear when you hold at any point on the Map with **long tap**. In this case context menu provides you the information of geographical point address, distance and direction from your current position. 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android"> 
 

![Context menu long_tap_Android](@site/static/img/map/map_context_menu_long_tap_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  


![Context menu long_tap_iOS](@site/static/img/map/map_context_menu_long_tap_ios.png)

</TabItem>

</Tabs> 


### Select route

Short tap on a [GPX-track](../map/tracks-on-map.md) on the map  opens [Context track menu](../map/track-context-menu.md).



<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context track menu Android](@site/static/img/map/context_track_menu_Android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Statistics screen track iOS](@site/static/img/personal/tracks/statistics_track_ios.png)

</TabItem>

</Tabs> 

### Hide context menu

To hide the context menu:
- Click on any empty place (to not open menu once again) on the map
- Drag down by the top of menu 

## Details
In order to gain more details about object you need to click on the "Details" button in the Context menu or move the panel up. 



<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Context menu Android](@site/static/img/map/context_menu_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![Context menu iOS](@site/static/img/map/context_menu_ios.png)

</TabItem>

</Tabs>


### Object info

This panel includes additional information about the object. This info could be copied to the buffer by tap on it. Additional information about object includes:

- [Coordinates](../map/map-context-menu.md#coordinates)
- [Nearby Wikipedia articles](../map/map-context-menu.md#nearby-pois-wikipedia)
- [Nearby POI](../map/map-context-menu.md#nearby-pois-wikipedia)
- [Public Transport routes (on transport stops)](../map/map-context-menu.md#public-transport-routes)
- [Favorites / Track Points from the same group](../map/map-context-menu.md#favorites--track-points-from-the-group)
- [OpenStreetMap link](../map/map-context-menu.md#openstreetmap-link)
- [Article image / description](../map/map-context-menu.md#article-image--description)
- [Online photos](../map/map-context-menu.md#online-photos)
- [OpenStreetMap Details](https://wiki.openstreetmap.org/wiki/Map_features)
    - [Alternative names](https://wiki.openstreetmap.org/wiki/Names)
    - [Website](https://wiki.openstreetmap.org/wiki/Key:website)
    - [Phone number](https://wiki.openstreetmap.org/wiki/Key:contact)
    - [Working hours](https://wiki.openstreetmap.org/wiki/Key:opening_hours)
    - [Fee](https://wiki.openstreetmap.org/wiki/Key:fee)
    - [Accessibility](https://wiki.openstreetmap.org/wiki/Key:wheelchair)
    - [Width](https://wiki.openstreetmap.org/wiki/Key:width) / [Height](https://wiki.openstreetmap.org/wiki/Key:height)
    - etc.

### Coordinates 
In the Context menu you can find geographical coordinates of an object. If you expand this section, you will see location in various geo formats and shareable OsmAnd Link. If you click on any item it will be automatically copied to the clipboard. 

|Coordinates format||
|:------|:------|
|DDD.DDDDD (Plain Decimal Degress)   <br /> DDD.DDDDD (N/S, E/W comma)   <br /> DDD MM.MMM   <br /> DDD MM SS.S   <br /> [UTM Standard](https://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system)    <br /> [MGRS](https://en.wikipedia.org/wiki/Military_Grid_Reference_System)   <br /> [Open Location Code](https://en.wikipedia.org/wiki/Open_Location_Code)   <br /> [OsmAnd Web Link](https://osmand.net/go.html) |![Coordinates](@site/static/img/map/map_context_menu_Coordinates.png)|

With OsmAnd Web Link you can send location to any device and it will be automatically recognized by OsmAnd (for example: https://osmand.net/go?lat=-49.306051764139475&lon=69.13371469678623&z=10).

### Nearby POIs/ Wikipedia

These sections displays nearby [Wikipedia articles](../plugins/wikipedia.md) or [Points of Interest](../map/point-layers-on-map.md#points-of-interest-pois-on-the-map) with '<Translate android="true" ids="shared_string_show_on_map"/>' and '<Translate android="true" ids="search_more"/>' to display and [search](../search/search-poi.md) all other POI & Wikipedia articles.

Clicking to 'Nearby POIs/ Wikipedia articles' opens a points list (Wikipedia and POIs). A tap to one of these points from a point list moves the map to this point (POI or Wikipedia) with the opening point Map Context menu.

**Note**: [<Translate android="true" ids="wiki_around"/>](../plugins/wikipedia.md) will appear only if you previously downloaded special maps with [Wikipedia articles for this area](../plugins/wikipedia.md#download-wikipedia).

![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia.png) ![Nearby Wikipedia articles](@site/static/img/map/map_context_menu_nearby_wikipedia_1.png)

### Public Transport Routes

Shown info about Public transport routes for chosen Transport stop. Information about Public transport Context menu and actions with it read [here](../map/public-transport.md#transport-routes-context-menu).

 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Public transport Routes Android](@site/static/img/map/pt_routes_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">

![Public transport Routes iOS](@site/static/img/map/pt_routes_ios.png)

</TabItem>

</Tabs> 

### Favorites / Track Points from the group

This is a list of all points in one group for a [Favorite](../map/point-layers-on-map.md#favorites-on-the-map) or Waypoint. By clicking, the entire list of points of one group expands, when clicking on a point from the list, the map moves to the selected point.

![Favorite list](@site/static/img/map/favorite_list_android.png) ![Favorite list full](@site/static/img/map/favorite_list_full_android.png) 

### Article description

This part contains a part of the description from [Wikipedia article](../plugins/wikipedia.md), [Favorite](../personal/favorites.md) or Waypoint description, by clicking you can open full description.


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Description list](@site/static/img/map/description_list_android.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![Description list](@site/static/img/map/description_list_ios.png)

</TabItem>

</Tabs> 

### OpenStreetMap link

OpenStreetMap link provides direct link to the OpenStreetMap object where you can find complete information about it (https://www.openstreetmap.org/node or https://www.openstreetmap.org/way).

![OSM link](@site/static/img/map/context_menu_osm_link.png) ![OSM link](@site/static/img/map/context_menu_osm_link_1.png)

### Online photos 

In this section, you can view photos of the object from different web sources. Such as [Mapillary](../plugins/mapillary.md) - takes the best and the closest photos from Street-Level view, [OpenPlaceReviews](../plugins/openplacereviews) - takes photos associated with this object, [Wikimedia](https://www.wikimedia.org/) - takes urls from OpenStreetMap tags **image**, **wikimedia**. Click on the image to open in full size or [browse](../map/point-layers-on-map.md#street-level-imagery) street level photos.

![Online photos context menu](@site/static/img/map/context_menu_online_photo.png) ![Online photo wikimedia](@site/static/img/map/context_menu_online_photo_1.png)

### * Audio/Video Note

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

[Audio / Video notes](../plugins/audio-video-notes.md) have additional information on Details Menu and buttons (Delete, Play, Show) in Context menu. 

For Image notes in the Details Menu an image is displayed; when you click on the image it opens in the editor. There is information about the date and the time when note was made. In the Context menu, there are 'Show' and 'Delete' buttons to open an image in the editor or delete it.
 
![Image list](@site/static/img/map/image_list_android.png) ![Video list](@site/static/img/map/video_list_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

<InfoAndroidOnly />

</TabItem>

</Tabs> 

## Actions

It is a set of specific manipulations that can be performed on a point or object. This menu is split into two parts: visible section consists of maximum 3 actions and other actions are accessible by 'Actions' button. You can customize (Android) the order of actions in [General settings](#customize-android-advanced).

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Actions menu Android](@site/static/img/map/actions_menu_android.png) ![Actions additional menu Android](@site/static/img/map/actions_additional_menu_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Actions menu iOS](@site/static/img/map/actions_menu_ios.png)  ![Actions additional menu iOS](@site/static/img/map/actions_additional_menu_ios.png)

</TabItem>

</Tabs> 

### Add / Edit Favorite

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add Edit favorite action Android](@site/static/img/map/add_favorite_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit favorite action iOS](@site/static/img/map/add_favorite_ios.png)

</TabItem>

</Tabs> 

In the context menu there are options to **add** or to **edit** the selected point / object to the [favorites list](../personal/myplaces.md). 
- In order to **add**, you need to select a point / object, click on the 'Star' icon (with signature Add) and enter all the necessary information. 
- In order to **edit** information about favorite point you need to turn on 'Show on the map' (Menu → Me places → Favorites) then press on it and in the Context menu instead of 'Star' icon will appear 'Pancil icon' (with signature Edit).

- [<Translate android="true" ids="add_edit_favorite"/>](../personal/myplaces.md)  - adds a selected point to the favorites list.

### Add / Edit Marker

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Add Edit marker action Android](@site/static/img/map/add_marker_android.png) ![Pass marker action Android](@site/static/img/map/action_pass_marker_android.png)
</TabItem>

<TabItem value="ios" label="iOS">  

![Add Edit marker action iOS](@site/static/img/map/add_marker_ios.png)  ![Restore marker action Android](@site/static/img/map/action_restore_marker_android.png)

</TabItem>

</Tabs> 

It is possible to mark a point or an object in order to make it easier to plan navigation. You just need to click on the 'flag' icon in the menu (Android), 'arrow' (iOS) - displays direction and distance to the selected point from your current location.

Actions:
- [<Translate android="true" ids="shared_string_marker"/> / <Translate android="true" ids="edit_map_marker"/>](../personal/markers.md) - puts a new marker on the selected point.
- 'Mark passed' (Android) / Dismiss (iOS) - deactivates marker and puts it to the History.
- 'Make active' (Android) - moves marker to the top position (on the top panel).
- 'Restore marker' (Android) - moves marker from History to active list.

Read more about [markers](../personal/markers.md).

### Share

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Share action Android](@site/static/img/map/action_share_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Share action iOS](@site/static/img/map/action_share_ios.png)

</TabItem>

</Tabs> 

The app provides the opportunity to **<Translate android="true" ids="shared_string_share"/>** location in a variety of ways. You can also share your location by selecting 'your location' icon on the map.

All options to share your location: 
- Send - sends a message via messengers (name, address, coordinates and link) 
- Copy - copies a message into clipboard (name, address, coordinates and link) 
- Copy address (Android) - copies a message into clipboard (only address) 
- Copy location/POI name (Android) - copies a message into clipboard (only name and coordinates) 
- Copy coordinates (Android) - copies a message into clipboard (only coordinates) 
- geo (Android) - opens local installed apps that support [geo url](https://developers.google.com/maps/documentation/urls/android-intents) 
- QR-code (Android) - generates location in QR-code (link with your location)
- Save Image (iOS) - saves a screenshot with map and selected point in the image gallery.
- Assign to Contact (iOS) - makes an icon for chosen contact from the map screenshot.
- Print (iOS) - opens Printer Options for printing the map screenshot.
- Save to files (iOS) - saves the map screenshot in iCloud Drive or storage of your device.

### Directions To / From 

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Directions Android](@site/static/img/map/action_directions_android.png)

![Multiple Directions Android](@site/static/img/map/action_multiple_directions_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Directions iOS](@site/static/img/map/action_directions_ios.png)

</TabItem>

</Tabs> 

In order to start navigation or route planning, you need to select destination first with [<Translate android="true" ids="get_directions"/>](../widgets/map-buttons.md#directions). In case you already have a destination point, the menu will suggest you to replace the destnation point or to insert as another intermediate or start point. 

It is also possible to select 'From' Destination first via Map context menu (<Translate android="true" ids="context_menu_item_directions_from"/>).

**Note**: if you click "Start navigation" - 'From' point will be discarded as application enters in Navigation mode. In order to preserve a route, don't click "Start navigation" and [swipe down](#hide-context-menu)  "Route preparation" menu.

Read more about [navigation](../navigation/route-navigation.md).

### Search nearby

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Search action Android](@site/static/img/map/action_search_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Search action iOS](@site/static/img/map/action_search_ios.png)

</TabItem>

</Tabs> 

Via this context menu action it is possible to search around specific location on the map. 

Read more about [search](../search/index.md) functionality.

### Avoid road

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Avoid action Android](@site/static/img/map/action_avoid_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Avoid roads map](@site/static/img/map/action_avoid_roads_list_android.png)

</TabItem>

</Tabs> 

 

It is possible to add avoid roads at specific location, so selected roads will be avoided during the route planning. 

![Avoid delete action Android](@site/static/img/map/context_menu_avoid_roads.png) ![Avoid roads list Android](@site/static/img/map/action_avoid_delete_android.png) 

**Note**: avoid roads are global and used for all navigation profiles (except online routing). 

Read more about [navigation](../navigation/route-navigation.md).

### Change object position

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Change position Android](@site/static/img/map/action_change_position_android.png)

![Action Change position UI Android](@site/static/img/map/action_change_position_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Change position iOS](@site/static/img/map/action_change_position_ios.png)

![Action Change position UI iOS](@site/static/img/map/action_change_position_ui_iOS.png) 

</TabItem>

</Tabs> 


Almost every created object by user is moveable i.e. Marker, Favorite, Created POI, Audio/Video Note or Track Waypoint. First select an object on the map and then use '<Translate android="true" ids="change_markers_position"/>' menu to move it to a new location.

### Plan a route

![Action Plan a route Android](@site/static/img/map/action_plan_route_android.png)

You can start a route planning from a selected point via object context menu.

Read more about ['Plan a route'](../plan-route/create-route.md) tool.

### Update / Download Online Maps


<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

To update or download online maps (tiles) at specific location, you can use object context menu:  
**Android**: *<Translate android="true" ids="shared_string_download_map"/>* and for *Update* go to: *<Translate android="true" ids="shared_string_menu,welmode_download_maps,download_tab_updates"/>*.  
Please refer to [full instruction](../map/raster-maps.md#download--update-tiles). 


![Action Download online map Android](@site/static/img/map/action_load_online_map_and.png)

</TabItem>

<TabItem value="ios" label="iOS">  

To update or download online maps (tiles) at specific location, you can use object context menu:  
**iOS**: *<Translate ios="true" ids="download_map"/>* and *<Translate ios="true" ids="update_map"/>*.   
Please refer to [full instruction](../map/raster-maps.md#download--update-tiles).  

![Action Download online map iOS](@site/static/img/map/action_download_online_map_ios.png)

</TabItem>

</Tabs> 

### Update / Download Vector Maps

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Download vector map Android](@site/static/img/map/action_download_vector_map_android.png)

![Select vector map worldwide on Android](@site/static/img/map/download_region_map_via_worldmap.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Download vector map iOS](@site/static/img/map/action_download_vector_map_ios.png)

![Select vector map on iOS](@site/static/img/map/download_map_ios.png)

</TabItem>

</Tabs> 

In case there is no offline map present at selected location, for example map object menu was opened via Search or via specific Favorite, then the smallest possible offline map will be suggested to [download](../start-with/download-maps.md#download---map-context-menu).  

**iOS**: If you already have [downloaded](../start-with/download-maps.md) OsmAnd maps (vector or terrain), it is possible to updated them via context 
menu. You will need to select the region on the map first - click on any location on worldwide zoom 3-7. 

>**NOTE**: if you have opened context menu for map region (region is higlighted), you will be able to see '<Translate android="true" ids="rendering_category_details"/>' about it: type and size of a available map, link to a wikipedia page, language, population and other.

### * Add / Delete Parking point

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Parking Android](@site/static/img/map/action_parking_android.png)

![Action Delete Parking Android](@site/static/img/map/context_menu_limited_parking.png) 

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Parking iOS](@site/static/img/map/action_parking_ios.png)

![Action Delete Parking iOS](@site/static/img/map/context_menu_limited_parking_ios.png) 

</TabItem>

</Tabs> 



Any selected location on the map could be marked as [a parking position](../plugins/parking.md). In order to delete parking position, you can open context menu associated with parking location.

Requires [Parking position plugin](../plugins/parking.md).

### * Add / Edit  Track waypoint

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Waypoint Android](@site/static/img/map/action_waypoint_android.png)

![Select Track to add Waypoint Android](@site/static/img/map/action_select_track_to_add_waypoint_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Waypoint iOS](@site/static/img/map/action_waypoint_ios.png)

![Select Track to add Waypoint iOS](@site/static/img/map/action_select_track_to_add_waypoint_ios.png) 

</TabItem>

</Tabs> 



It is possible to [add waypoints](../personal/tracks.md#add-waypoint) to any track at selected location via Map Context menu - <Translate android="true" ids="context_menu_item_add_waypoint"/> . By default waypoint is added to [currently recording track](../plugins/trip-recording.md#from-widget). Though if there are many [visible tracks](../map/tracks-on-map.md#tracks-on-the-map-layers) on the map, it will be suggested to select the track waypoint will be added to.

Requires [Trip recording plugin](../plugins/trip-recording.md).

### * Create / Modify POI

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action POI Android](@site/static/img/map/action_poi_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action POI iOS](@site/static/img/map/action_poi_ios.png)

</TabItem>

</Tabs> 

 

With OSM Editing plugin, you can create and modify most of the POIs present on [OpenStreetMap](https://www.openstreetmap.org/).

&nbsp;<Translate android="true" ids="context_menu_item_create_poi"/> - [creates a new POI](../plugins/osm-editing.md#how-to-add-poi) at selected location.

&nbsp;<Translate android="true" ids="poi_context_menu_modify"/> - [modifies selected POI](../plugins/osm-editing.md#how-to-modify-poi).

Requires [OSM Editing plugin](../plugins/osm-editing.md).

### * Open OSM Note

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

![Action Note Android](@site/static/img/map/action_note_android.png)

![Action Add Note Android](@site/static/img/map/action_add_osm_note_ui_android.png)

</TabItem>

<TabItem value="ios" label="iOS">  

![Action Note iOS](@site/static/img/map/action_note_ios.png)

![Action Add Note iOS](@site/static/img/map/action_add_osm_note_ui_ios.png)

</TabItem>

</Tabs> 


You can [report](../plugins/osm-editing.md#how-to-report-a-mistake) map data errors at specific location to [OpenStreetMap community](https://wiki.openstreetmap.org/wiki/Join_the_community). Please follow [guidelines](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes) and add proper comments to an issue.

Requires [OSM Editing plugin](../plugins/osm-editing.md).

### * Comment / Close OSM Note

![Comment OSM Note Android](@site/static/img/map/action_comment_note_android.png) ![Reopen OSM Note Android](@site/static/img/map/action_reopen_note_android.png)

You can [comment](https://wiki.openstreetmap.org/wiki/Notes#Adding_notes), [resolve](https://wiki.openstreetmap.org/wiki/Notes#Resolving_notes) and reopen
OpenStreetMap Notes via objects context menu.

Requires [OSM Editing plugin](../plugins/osm-editing.md).

### * Upload POI / OSM Note

![Upload POI Android](@site/static/img/map/action_poi_upload_android.png) ![Upload OSM Note Android](@site/static/img/map/action_note_upload_android.png)

In case you use 'Offline mode' to add / edit POI or OSM Note, you will need to upload the changes to OpenStreetMap. By default 'Offline mode' is on to avoid accidental changes of public database. You can upload or delete change via created object context menu.

Requires [OSM Editing plugin](../plugins/osm-editing.md).

### * Record AV Note

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">

![Action Audio-Video Android](@site/static/img/map/action_av_note_android.png)

Records or takes a media note at selected point on the map.

- &nbsp;<Translate android="true" ids="recording_context_menu_arecord"/> - makes a [audio note](../map/point-layers-on-map.md#-audio--video-points-android) on selected point (creates new point on the overlay with audio icon).
- &nbsp;<Translate android="true" ids="recording_context_menu_vrecord"/> - makes a [video note](../map/point-layers-on-map.md#-audio--video-points-android) on selected point (creates new point on the overlay with video icon).
- &nbsp;<Translate android="true" ids="recording_context_menu_precord"/> - makes a [photo point](../map/point-layers-on-map.md#-audio--video-points-android) on the map.

Requires [Audio / Video note plugin](../plugins/audio-video-notes.md).

</TabItem>

<TabItem value="ios" label="iOS">  

<InfoAndroidOnly />

</TabItem>

</Tabs> 



## Customize

<Tabs groupId="operating-systems">

<TabItem value="android" label="Android">  

It is possible to reorder or hide items from the '<Translate android="true" ids="context_menu_actions"/>'. You can move the most useful actions to the top 3 actions and setup whole menu independently for each profile. It is also possible to reset to default settings after all.

**<Translate android="true" ids="android_button_seq"/>:** <Translate android="true" ids="shared_string_menu,configure_profile,ui_customization,context_menu_actions"/>

<p> </p>

![Context menu actions items ](@site/static/img/map/customize_actions_menu.png)

</TabItem>

<TabItem value="ios" label="iOS">  

<InfoAndroidOnly />

</TabItem>

</Tabs> 



 
