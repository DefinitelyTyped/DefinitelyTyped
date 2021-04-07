/// <reference path="../../../../../node_modules/@types/leaflet/index.d.ts"/>
/// <reference path="../../../../../node_modules/@types/leaflet-offline/index.d.ts"/>
import L from 'leaflet';
import 'leaflet-offline';

@Component({
  selector: 'app-map-insert',
  templateUrl: './map-insert.component.html',
  //styleUrls: ['./map-insert.component.css']
})
export class MapInsertComponent {
 
  private map: Map;
  private tilesDb: any;
  private osmTileLayer;
  private satelliteTileLayer;

  constructor(
  ) {
    this.tilesDb = this.offlineMapStorageService;
  }

  initializeTileLayersOffline(): Observable<any> {
    
	try {
      this.osmTileLayer = L.tileLayer.offline('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', this.tilesDb,
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          subdomains: 'abc',
          minZoom: 13,
          maxZoom: 19,
          crossOrigin: true
        })
      this.satelliteTileLayer = L.tileLayer.offline('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', this.tilesDb,
        {
          attribution: 'Tiles © Esri — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
          minZoom: 13,
          maxZoom: 19,
          crossOrigin: true
        })
  
      // Define the layer to be shown on the map
      let selectedLayer = this.osmTileLayer;

      // Add the layer to the map
      selectedLayer.addTo(this.map);

      // Init layers
      var baseLayers = {
        "OSM": this.osmTileLayer,
        "Satelliet": this.satelliteTileLayer
      };

      // Add control for switching between layers
      L.control.layers(baseLayers).addTo(this.map);

    }
    catch (error) {
	
    }

    return of({});

  }
}
