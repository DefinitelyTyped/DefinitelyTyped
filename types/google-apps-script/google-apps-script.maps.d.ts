// Type definitions for Google Apps Script 2018-07-11
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  export module Maps {
    /**
     * An enum representing the types of restrictions to avoid when finding directions.
     */
    export enum Avoid { TOLLS, HIGHWAYS }

    /**
     * An enum representing the named colors available to use in map images.
     */
    export enum Color { BLACK, BROWN, GREEN, PURPLE, YELLOW, BLUE, GRAY, ORANGE, RED, WHITE }

    /**
     * Allows for the retrieval of directions between locations.
     * The example below shows how you can use this class to get the directions from Times Square to
     * Central Park, stopping first at Lincoln Center, plot the locations and path on a map, and send
     * the map in an email.
     *
     *     // Get the directions.
     *     var directions = Maps.newDirectionFinder()
     *         .setOrigin('Times Square, New York, NY')
     *         .addWaypoint('Lincoln Center, New York, NY')
     *         .setDestination('Central Park, New York, NY')
     *         .setMode(Maps.DirectionFinder.Mode.DRIVING)
     *         .getDirections();
     *     var route = directions.routes[0];
     *
     *     // Set up marker styles.
     *     var markerSize = Maps.StaticMap.MarkerSize.MID;
     *     var markerColor = Maps.StaticMap.Color.GREEN
     *     var markerLetterCode = 'A'.charCodeAt();
     *
     *     // Add markers to the map.
     *     var map = Maps.newStaticMap();
     *     for (var i = 0; i < route.legs.length; i++) {
     *       var leg = route.legs[i];
     *       if (i == 0) {
     *         // Add a marker for the start location of the first leg only.
     *         map.setMarkerStyle(markerSize, markerColor, String.fromCharCode(markerLetterCode));
     *         map.addMarker(leg.start_location.lat, leg.start_location.lng);
     *         markerLetterCode++;
     *       }
     *       map.setMarkerStyle(markerSize, markerColor, String.fromCharCode(markerLetterCode));
     *       map.addMarker(leg.end_location.lat, leg.end_location.lng);
     *       markerLetterCode++;
     *     }
     *
     *     // Add a path for the entire route.
     *     map.addPath(route.overview_polyline.points);
     *
     *     // Send the map in an email.
     *     var toAddress = Session.getActiveUser().getEmail();
     *     MailApp.sendEmail(toAddress, 'Directions', 'Please open: ' + map.getMapUrl(), {
     *       htmlBody: 'See below.<br/><img src="cid:mapImage">',
     *       inlineImages: {
     *         mapImage: Utilities.newBlob(map.getMapImage(), 'image/png')
     *       }
     *     });
     *
     * See also
     *
     * Google Directions API
     */
    export interface DirectionFinder {
      addWaypoint(latitude: Number, longitude: Number): DirectionFinder;
      addWaypoint(address: string): DirectionFinder;
      clearWaypoints(): DirectionFinder;
      getDirections(): Object;
      setAlternatives(useAlternatives: boolean): DirectionFinder;
      setArrive(time: Date): DirectionFinder;
      setAvoid(avoid: string): DirectionFinder;
      setDepart(time: Date): DirectionFinder;
      setDestination(latitude: Number, longitude: Number): DirectionFinder;
      setDestination(address: string): DirectionFinder;
      setLanguage(language: string): DirectionFinder;
      setMode(mode: Mode): DirectionFinder;
      setOptimizeWaypoints(optimizeOrder: boolean): DirectionFinder;
      setOrigin(latitude: Number, longitude: Number): DirectionFinder;
      setOrigin(address: string): DirectionFinder;
      setRegion(region: string): DirectionFinder;
    }

    /**
     * A collection of enums used by DirectionFinder.
     */
    export interface DirectionFinderEnums {
      Avoid: typeof Avoid;
      Mode: typeof Mode;
    }

    /**
     * Allows for the sampling of elevations at particular locations.
     * The example below shows how you can use this class to determine the highest point along the route
     * from Denver to Grand Junction in Colorado, plot it on a map, and save the map to Google Drive.
     *
     *     // Get directions from Denver to Grand Junction.
     *     var directions = Maps.newDirectionFinder()
     *         .setOrigin('Denver, CO')
     *         .setDestination('Grand Junction, CO')
     *         .setMode(Maps.DirectionFinder.Mode.DRIVING)
     *         .getDirections();
     *     var route = directions.routes[0];
     *
     *     // Get elevation samples along the route.
     *     var numberOfSamples = 30;
     *     var response = Maps.newElevationSampler()
     *         .samplePath(route.overview_polyline.points, numberOfSamples)
     *
     *     // Determine highest point.
     *     var maxElevation = Number.MIN_VALUE;
     *     var highestPoint = null;
     *     for (var i = 0; i < response.results.length; i++) {
     *       var sample = response.results[i];
     *       if (sample.elevation > maxElevation) {
     *         maxElevation = sample.elevation;
     *         highestPoint = sample.location;
     *       }
     *     }
     *
     *     // Add the path and marker to a map.
     *     var map = Maps.newStaticMap()
     *         .addPath(route.overview_polyline.points)
     *         .addMarker(highestPoint.lat, highestPoint.lng);
     *
     *     // Save the map to your drive
     *     DocsList.createFile(Utilities.newBlob(map.getMapImage(), 'image/png', 'map.png'));
     *
     * See also
     *
     * Google Elevation API
     */
    export interface ElevationSampler {
      sampleLocation(latitude: Number, longitude: Number): Object;
      sampleLocations(points: Number[]): Object;
      sampleLocations(encodedPolyline: string): Object;
      samplePath(points: Number[], numSamples: Integer): Object;
      samplePath(encodedPolyline: string, numSamples: Integer): Object;
    }

    /**
     * An enum representing the format of the map image.
     * See also
     *
     * Google Static Maps API
     */
    export enum Format { PNG, PNG8, PNG32, GIF, JPG, JPG_BASELINE }

    /**
     * Allows for the conversion between an address and geographical coordinates.
     * The example below shows how you can use this class find the top nine matches for the location
     * "Main St" in Colorado, add them to a map, and then embed it in a new Google Doc.
     *
     *     // Find the best matches for "Main St" in Colorado.
     *     var response = Maps.newGeocoder()
     *         // The latitudes and longitudes of southwest and northeast corners of Colorado, respectively.
     *         .setBounds(36.998166, -109.045486, 41.001666,-102.052002)
     *         .geocode('Main St');
     *
     *     // Create a Google Doc and map.
     *     var doc = DocumentApp.create('My Map');
     *     var map = Maps.newStaticMap();
     *
     *     // Add each result to the map and doc.
     *     for (var i = 0; i < response.results.length && i < 9; i++) {
     *       var result = response.results[i];
     *       map.setMarkerStyle(null, null, i + 1);
     *       map.addMarker(result.geometry.location.lat, result.geometry.location.lng);
     *       doc.appendListItem(result.formatted_address);
     *     }
     *
     *     // Add the finished map to the doc.
     *     doc.appendImage(Utilities.newBlob(map.getMapImage(), 'image/png'));
     *
     * See also
     *
     * Google Geocoding API
     */
    export interface Geocoder {
      geocode(address: string): Object;
      reverseGeocode(latitude: Number, longitude: Number): Object;
      reverseGeocode(swLatitude: Number, swLongitude: Number, neLatitude: Number, neLongitude: Number): Object;
      setBounds(swLatitude: Number, swLongitude: Number, neLatitude: Number, neLongitude: Number): Geocoder;
      setLanguage(language: string): Geocoder;
      setRegion(region: string): Geocoder;
    }

    /**
     * Allows for direction finding, geocoding, elevation sampling and the creation of static map
     * images.
     */
    export interface Maps {
      DirectionFinder: DirectionFinderEnums;
      StaticMap: StaticMapEnums;
      decodePolyline(polyline: string): Number[];
      encodePolyline(points: Number[]): string;
      newDirectionFinder(): DirectionFinder;
      newElevationSampler(): ElevationSampler;
      newGeocoder(): Geocoder;
      newStaticMap(): StaticMap;
      setAuthentication(clientId: string, signingKey: string): void;
    }

    /**
     * An enum representing the size of a marker added to a map.
     * See also
     *
     * Google Static Maps API
     */
    export enum MarkerSize { TINY, MID, SMALL }

    /**
     * An enum representing the mode of travel to use when finding directions.
     */
    export enum Mode { DRIVING, WALKING, BICYCLING, TRANSIT }

    /**
     * Allows for the creation and decoration of static map images.
     * The example below shows how you can use this class to create a map of New York City's Theatre
     * District, including nearby train stations, and display it in a simple web app.
     *
     *     function doGet(event) {
     *       // Create a map centered on Times Square.
     *       var map = Maps.newStaticMap()
     *           .setSize(600, 600)
     *           .setCenter('Times Square, New York, NY');
     *
     *       // Add markers for the nearbye train stations.
     *       map.setMarkerStyle(Maps.StaticMap.MarkerSize.MID, Maps.StaticMap.Color.RED, 'T');
     *       map.addMarker('Grand Central Station, New York, NY');
     *       map.addMarker('Penn Station, New York, NY');
     *
     *       // Show the boundaries of the Theatre District.
     *       var corners = [
     *         '8th Ave & 53rd St, New York, NY',
     *         '6th Ave & 53rd St, New York, NY',
     *         '6th Ave & 40th St, New York, NY',
     *         '8th Ave & 40th St, New York, NY'
     *       ];
     *       map.setPathStyle(4, Maps.StaticMap.Color.BLACK, Maps.StaticMap.Color.BLUE);
     *       map.beginPath();
     *       for (var i = 0; i < corners.length; i++) {
     *         map.addAddress(corners[i]);
     *       }
     *
     *       // Create the user interface and add the map image.
     *       var app = UiApp.createApplication().setTitle('NYC Theatre District');
     *       app.add(app.createImage(map.getMapUrl()));
     *       return app;
     *     }
     *
     * See also
     *
     * Google Static Maps API
     */
    export interface StaticMap {
      addAddress(address: string): StaticMap;
      addMarker(latitude: Number, longitude: Number): StaticMap;
      addMarker(address: string): StaticMap;
      addPath(points: Number[]): StaticMap;
      addPath(polyline: string): StaticMap;
      addPoint(latitude: Number, longitude: Number): StaticMap;
      addVisible(latitude: Number, longitude: Number): StaticMap;
      addVisible(address: string): StaticMap;
      beginPath(): StaticMap;
      clearMarkers(): StaticMap;
      clearPaths(): StaticMap;
      clearVisibles(): StaticMap;
      endPath(): StaticMap;
      getAs(contentType: string): Base.Blob;
      getBlob(): Base.Blob;
      getMapImage(): Byte[];
      getMapUrl(): string;
      setCenter(latitude: Number, longitude: Number): StaticMap;
      setCenter(address: string): StaticMap;
      setCustomMarkerStyle(imageUrl: string, useShadow: boolean): StaticMap;
      setFormat(format: string): StaticMap;
      setLanguage(language: string): StaticMap;
      setMapType(mapType: string): StaticMap;
      setMarkerStyle(size: string, color: string, label: string): StaticMap;
      setMobile(useMobileTiles: boolean): StaticMap;
      setPathStyle(weight: Integer, color: string, fillColor: string): StaticMap;
      setSize(width: Integer, height: Integer): StaticMap;
      setZoom(zoom: Integer): StaticMap;
    }

    /**
     * A collection of enums used by StaticMap.
     */
    export interface StaticMapEnums {
      Color: typeof Color;
      Format: typeof Format;
      MarkerSize: typeof MarkerSize;
      Type: typeof Type;
    }

    /**
     * An enum representing the type of map to render.
     * See also
     *
     * Google Static Maps API
     */
    export enum Type { ROADMAP, SATELLITE, TERRAIN, HYBRID }

  }
}

declare var Maps: GoogleAppsScript.Maps.Maps;
