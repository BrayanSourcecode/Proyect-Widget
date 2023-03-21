import React, { useRef } from "react"
import { useEffect, useState } from "react"

// modulos 
import MapView from "esri/views/MapView"
import SceneView from "esri/views/SceneView"
import { JimuMapView, JimuMapViewConstructorOptions, MapViewManager } from "jimu-arcgis"

// css 
import "./map_default.css"

import { useDispatch } from "react-redux"
import { addView } from "../Reducer/viewSlice"

import { useSelector } from 'react-redux';
import {AllWidgetProps,IMState } from 'jimu-core'

interface Myprosp {
    mapWidgetId: string
    typeMap?:string
}


function MapDefault(props: Myprosp) {

    // const dispatch=useDispatch();
    const [view1, setView] = useState<__esri.View>(null);
    const mapViewManager = MapViewManager.getInstance();
    const containerMap = useRef();

    const crearMap = async () => {
        if (view1 == null) {
            const optiones: JimuMapViewConstructorOptions = ({
                mapWidgetId: props.mapWidgetId,
                dataSourceId: "",
                mapViewManager: mapViewManager,
                view: new MapView({
                    container: containerMap.current,
                    map: ({ basemap: "arcgis-streets-night" }),
                    zoom: 1
                })
            });
            const {view}=await mapViewManager.createJimuMapView(optiones)
            setView(view)
        } else {
            console.log("ya existe algun mapa debe de borrarlo con alguhn metodo")
        }

    }

    useEffect(() => {
        crearMap()
    }, []);
 
   
    const mystate= useSelector((state:IMState)=>state.MyState)
    const viewT = mystate.view ? mystate.view.t : null;
//   const initial=  useSelector((state:IMState)=>state.MyState.initiastate)
 console.log(viewT)
    return (
        
        <div className="containerMap" ref={containerMap}>
                <div>my name {viewT}</div>
                {/* <div>my name {mystate.view}</div> */}
        </div>

    )
}

export default MapDefault