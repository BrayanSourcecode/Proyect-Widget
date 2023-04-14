// modulos de jimu core

// modulos de react
import React, { useRef } from "react"
import { useEffect, useState } from "react"
import "./map_default.css"


// librerias de jimu argis
import { JimuMapView, JimuMapViewConstructorOptions, MapViewManager } from "jimu-arcgis"

// modulos  de  api de js
import MapView from "esri/views/MapView"
import SceneView from "esri/views/SceneView"
// modulos de jimu iu 
import { Switch } from 'jimu-ui'

// estilos css 
import "./map_default.css"

import { IMConfig } from '../../config'



// definimos las tipo de las propiedades que vamos a recibir
interface Myprosp {
    mapWidgetId: string
    // typeMap?: string
    config: IMConfig
}

//  creamos el componente
function MapDefault(props: Myprosp) {

    //  estados
    const [view_actual, setView] = useState<__esri.View>(null);
    const [check_Map3D, setCheck_Map3D] = useState(false)
    const [check_MapBase, setCheck_MapBase] = useState(false)

// creamos el gestor de la views
    const mapViewManager = MapViewManager.getInstance();
//creamos la referencia para el div del mapa 
    const containerMap = useRef();

// creamos una fucion asyncrona para crear el mapa
    const crearMap = async () => {

        if (view_actual == null) {
            // 
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
            
            const { view } = await mapViewManager.createJimuMapView(optiones)
            setView(view)

            view.ui.add("Switch_Map3D", "top-right")
            view.ui.add("Switch_MapBase", "top-right")
        } else {
            console.log("ya existe algun mapa debe de borrarlo con alguhn metodo")
        }

    }

    async function get_check_Map3D() {
        try {
            let result = await props.config.getIn(["Map_3D"])
            if (result !== undefined) {
                setCheck_Map3D(result)
            }
        } catch (error) {
            console.log("error")
        }
    }
    async function get_check_MapBase() {
        try {
            let result = await props.config.getIn(["Map_Base"])
            if (result !== undefined) {
                setCheck_Map3D(result)
            }
        } catch (error) {
            console.log("error")
        }
    }


    get_check_Map3D()




    useEffect(() => {
        crearMap()
    }, []);



    return (
        <div className="containerMap" id="containerMap" ref={containerMap}>
             
            <div id="Switch_Map3D" >
                <p> {check_Map3D ?"<h1>gfdgdf</h1>" :"no paso"}</p>
            </div>

            <div id="Switch_MapBase" >
                <p className="Switch_p">Map Base</p>
                <Switch ></Switch>
            </div>
        </div>


    )
}

export default MapDefault