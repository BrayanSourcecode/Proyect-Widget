// import React from "react";
// import { useEffect, useState, useRef } from "react"

// // modulos de arcgis
// import MapView from "esri/views/MapView";
// import FeatureLayer from "esri/layers/FeatureLayer";;

// import { JimuMapViewConstructorOptions, MapViewManager } from 'jimu-arcgis';
// import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';



// interface Myprops {
//   id: string;
// }

// function Viewcomponent(props: Myprops) {

//   const [view, setView] = useState<__esri.View>(null)


//   const mapContainer = useRef<HTMLDivElement>(null);
//   const createView = async () => {
//     const mapViewManager = MapViewManager.getInstance();
//     const mapView: __esri.MapView = new MapView({
//       container: mapContainer.current,
//       map: { basemap: "arcgis-streets-night" },
//       center: [-74.663154, 5.45451],
//       zoom: 4,
//     });


//     const options: JimuMapViewConstructorOptions = {
//       dataSourceId: "218a38b281874c7fb694aa7b30facdab",
//       mapViewManager: mapViewManager,
//       mapWidgetId: props.id,
//       view: mapView,
//     };
//     const resulView = await mapViewManager.createJimuMapView(options);

//     setView(resulView.view)



//   };

//   useEffect(() => {
//     createView();
//   }, []);

//   return(
//     <div style={{ width: "100%", height: "100%" }}>
//       <div id="map" style={{ width: "100%", height: "100%" }} ref={mapContainer}></div>
//     </div>
//   )


// }


// export default Viewcomponent;


import React, { useEffect, useState, useRef } from "react"
import MapView from "esri/views/MapView";
import FeatureLayer from "esri/layers/FeatureLayer";
import { JimuMapViewConstructorOptions, MapViewManager } from 'jimu-arcgis';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import { DataSourceComponent, DataSourceManager, QueriableDataSource, UseDataSource } from "jimu-core";


interface Myprops {
  id: string,
  useDataSources: UseDataSource[]
}

function ViewComponent(props: Myprops) {

  const [view, setView] = useState<__esri.View>(null)

  const dataSourceId = props.useDataSources[0].dataSourceId

  const mapContainer = useRef<HTMLDivElement>(null);

  const createView = async () => {
    const mapViewManager = MapViewManager.getInstance();
    // Create a new MapView instance
    const mapView: __esri.MapView = new MapView({
      container: mapContainer.current,
      map: { basemap: "arcgis-streets-night" },
      center: [-74.663154, 5.45451],
      zoom: 4,
    });


    const options: JimuMapViewConstructorOptions = {
      dataSourceId: dataSourceId,
      mapViewManager: mapViewManager,
      mapWidgetId: props.id,
      view: mapView,
    };
    const jimuMapView = await mapViewManager.createJimuMapView(options);

    setView(jimuMapView.view)
    
      const datasourceid =  dataSourceId && DataSourceManager.getInstance().getDataSource(dataSourceId) as QueriableDataSource
      const idfeature = datasourceid.url
      const ggg = new FeatureLayer({
        url: idfeature
      })
      
    view.map.add(ggg)

  }

  
  console.log(view)


  useEffect(() => {
    createView();
   
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div id="map" style={{ width: "100%", height: "100%" }} ref={mapContainer}></div>

    </div>
  )
}

export default ViewComponent;