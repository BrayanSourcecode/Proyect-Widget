import React from "react";
import { useEffect, useState,useRef } from "react"

// modulos de arcgis
import MapView from "esri/views/MapView";

import { JimuMapViewConstructorOptions, MapViewManager } from 'jimu-arcgis';
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis';
import { string } from "prop-types";


// interface Myprops {
//     id: string
// }

// function Viewcomponent(props: Myprops) {

//     // estado inicial
//     const [jimuMapView, setJimuMapView] = useState(null);


//     // const mapContainer = document.querySelector("#map")

//     const mapContainer = React.createRef<HTMLDivElement>();

//     // const CreateView = async () => {
//     //     const mapViewManager = MapViewManager.getInstance();
//     //     const mapView: __esri.MapView = new MapView({
//     //         container: mapContainer.current,
//     //         map: { basemap: "arcgis-streets-night" },
//     //         center: [-74.663154, 5.454510],
//     //         zoom: 1,
//     //     });
//     //     const options: JimuMapViewConstructorOptions = {
//     //         dataSourceId: "",
//     //         mapViewManager: mapViewManager,
//     //         mapWidgetId: props.id,// IDENTIFICACION UNICA DEL WIDGET 
//     //         view: mapView,
//     //     }

//     //     const res = await mapViewManager.createJimuMapView(options)
//     //     .then(jimumapview => setJimuMapView(jimumapview.view))

//     //     return res
//     // }

//     // useEffect(() => {
//     //     const result = CreateView()
//     //     console.log(result)
//     //     // console.log(jimuMapView)
//     // }, [])

//     const CreateView = async () => {
//         const mapViewManager = MapViewManager.getInstance();
//         const mapView: __esri.MapView = new MapView({
//             container: mapContainer.current,
//             map: { basemap: "arcgis-streets-night" },
//             center: [-74.663154, 5.454510],
//             zoom: 1,
//         });
//         const options: JimuMapViewConstructorOptions = {
//             dataSourceId: "",
//             mapViewManager: mapViewManager,
//             mapWidgetId: props.id,// IDENTIFICACION UNICA DEL WIDGET 
//             view: mapView,
//         }
    
//         mapViewManager.createJimuMapView(options).then(jimumapview => setJimuMapView(jimumapview.view));
//     }
    
//     useEffect(() => {
//         CreateView();
//     }, []);

//     return (
//         <div id="map" ref={mapContainer}>
//        <div id="map" ref={mapContainer}>
//         {jimuMapView && <JimuMapView jimuMapView={jimuMapView} />}
//     </div>
//     </div>

//     );
// }



// export default Viewcomponent

// import React, { useEffect, useState, useRef } from "react";
// import { JimuMapView, JimuMapViewComponent } from "jimu-arcgis";
// import MapView from "esri/views/MapView";
// import { JimuMapViewConstructorOptions, MapViewManager } from "jimu-arcgis";

interface Myprops {
  id: string;
}

function Viewcomponent(props:Myprops) {

    const mapContainer = useRef<HTMLDivElement>(null);

    const createView = async () => {
      const mapViewManager = MapViewManager.getInstance();
      const mapView: __esri.MapView = new MapView({
        container: mapContainer.current,
        map: { basemap: "arcgis-streets-night" },
        center: [-74.663154, 5.45451],
        zoom: 4,
      });
      
      const options: JimuMapViewConstructorOptions = {
        dataSourceId: "",
        mapViewManager: mapViewManager,
        mapWidgetId: props.id,
        view: mapView,
      };
      await mapViewManager.createJimuMapView(options);
    };
  
    useEffect(() => {
      createView();
    }, []);
  
    return <div id="map" style={{ width: "100%", height: "100%" }} ref={mapContainer}></div>;
  }


export default Viewcomponent;