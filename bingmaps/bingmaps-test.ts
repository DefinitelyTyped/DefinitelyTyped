/// <reference path="Microsoft.Maps.d.ts"/> 
/// <reference path="Microsoft.Maps.AdvancedShapes.d.ts"/>
/// <reference path="Microsoft.Maps.Directions.d.ts"/>
/// <reference path="Microsoft.Maps.Search.d.ts"/>
/// <reference path="Microsoft.Maps.Themes.BingTheme.d.ts"/>
/// <reference path="Microsoft.Maps.Traffic.d.ts"/>
/// <reference path="Microsoft.Maps.VenueMaps.d.ts"/>

module BingMapsTests {

    // An interactive set of Bing Maps AJAX control usages can be found at http://www.bingmapsportal.com/isdk/ajaxv7
    // A full API description can be found at http://msdn.microsoft.com/en-us/library/gg427610.aspx
    export class TestFixture {

        public createMap(
            // This key can be acquired at http://www.microsoft.com/maps/create-a-bing-maps-key.aspx
            bingMapsApiKey: string,
            // This is the HTML container that the map will be drawn inside of
            target: HTMLElement,
            // These positions will be placed as pushpins onto the map
            mapPositions: Array<Position>,
            // This will fire if the geolocation fails and will pass the original target (parameter 2)
            onFailure: (element: HTMLElement) => any) {

            var self = this;
            var map: Microsoft.Maps.Map;

            navigator.geolocation.getCurrentPosition((position: Position) => {

                var locations: Array<Microsoft.Maps.Location> = new Array<Microsoft.Maps.Location>();
                var options: Microsoft.Maps.MapOptions;

                function loadMap() {
                    options = {};
                    options.credentials = bingMapsApiKey;
                    options.enableClickableLogo = false;
                    options.enableSearchLogo = false;
                    options.showDashboard = false;
                    options.showScalebar = false;
                    options.center = self.toLocation(position);
                    options.zoom = 16;
                    options.mapTypeId = Microsoft.Maps.MapTypeId.road;
                    options.height = target.clientHeight;
                    options.width = target.clientWidth;

                    target.innerHTML = "";

                    map = new Microsoft.Maps.Map(target, options);

                    for (var i = 0; i < mapPositions.length; ++i) {

                        var mapPosition: Position = mapPositions[i];
                        var location: Microsoft.Maps.Location = self.createPushpin(map, mapPosition);

                        locations.push(location);
                    }

                    // Sets the view of the map to the smallest size that contains all of the 
                    // specified locations (in this case the pusphin locations)
                    map.setView({ bounds: Microsoft.Maps.LocationRect.fromLocations(locations) });
                }

                if ((<any>window).Windows != undefined) {
                    // Running in Win8 app
                    Microsoft.Maps.loadModule("Microsoft.Maps.Map", { callback: loadMap });
                } else {
                    // Running anywhere else
                    loadMap();
                }
            }, () => onFailure(target), { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true });

        }

        // Converts a standard HTML geolocation Position to a Location
        private toLocation(position: Position): Microsoft.Maps.Location {
            return new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude);
        }

        // Creates a pushpin on a specified map and returns the Location for potentially setting the map view
        private createPushpin(map: Microsoft.Maps.Map, position: Position): Microsoft.Maps.Location {

            var location: Microsoft.Maps.Location;
            var pushpin: Microsoft.Maps.Pushpin;

            location = this.toLocation(position);
            pushpin = new Microsoft.Maps.Pushpin(location, null);

            map.entities.push(pushpin);

            return location;
        }
    }
}