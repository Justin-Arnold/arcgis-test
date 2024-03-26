import './style.css'
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";


// Create the map
const map = new Map({
  basemap: "topo-vector"
});

// Create the map view
new MapView({
  container: "viewDiv",  
  map: map,
  center: [-85.3094, 35.0458],
  zoom: 13 
});

const walkingDisatanceLayer = new FeatureLayer({
  url: "https://services.arcgis.com/S0bgWxbY97XvuH2I/arcgis/rest/services/Chattanooga_Parks_and_Greenways_WFL1/FeatureServer/125",
  opacity: 0.2
})
map.add(walkingDisatanceLayer) 

const trailHeadLayer = new FeatureLayer({
  url: "https://services.arcgis.com/S0bgWxbY97XvuH2I/arcgis/rest/services/Chattanooga_Parks_and_Greenways_WFL1/FeatureServer/43"
});
map.add(trailHeadLayer);

const trailLayer = new FeatureLayer({
  url: "https://services.arcgis.com/UnTXoPXBYERF0OH6/arcgis/rest/services/Trails_THRIVE_2018/FeatureServer"
});
map.add(trailLayer)


