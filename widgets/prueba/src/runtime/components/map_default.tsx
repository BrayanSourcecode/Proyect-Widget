// modulos de jimu core

// modulos de react
import React from "react"
import { useEffect, useState, useRef, ChangeEvent } from "react"
import "./map_default.css"


// librerias de jimu argis
import { JimuMapViewConstructorOptions, MapViewManager } from "jimu-arcgis"

// modulos  de  api de js
import MapView from "esri/views/MapView"
import SceneView from "esri/views/SceneView"
// modulos de jimu iu 
import { Switch } from 'jimu-ui'

// estilos css 
import "./map_default.css"

import { IMConfig } from '../../config'
import { map } from "esri/widgets/TableList/TableListViewModel"
import BasemapGallery from "esri/widgets/BasemapGallery"
import Expand from "esri/widgets/Expand"



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
    const [check_Config_Map, setCheck_Config_Map] = useState(false)
    const [check_Config_Basemap, setCheck_Config_BaseMap] = useState(false)


    // creamos el gestor de la views
    const mapViewManager = MapViewManager.getInstance();
    //creamos la referencia para el div del mapa 
    const containerMap = useRef();

    // creamos una fucion asyncrona para crear el mapa
    const crearMap = async () => {
        let map = null
        if (check_Map3D === true) {
            map = new SceneView({
                container: containerMap.current,
                map: ({ basemap: "arcgis-streets-night" }),
                zoom: 1
            })
        } else {
            map = new MapView({
                container: containerMap.current,
                map: ({ basemap: "arcgis-streets-night" }),
                zoom: 1
            })
           

        }

        const optiones: JimuMapViewConstructorOptions = ({
            mapWidgetId: props.mapWidgetId,
            dataSourceId: "",
            mapViewManager: mapViewManager,
            view: map
        });

        const { view } = await mapViewManager.createJimuMapView(optiones)
        setView(view)
        
        const basemapgallery = new BasemapGallery({
            view: view,

        });
        const expand = new Expand({
            expandIconClass: "esri-icon-layer-list",
            view: view,
            content: basemapgallery,
        });

        view.ui.add(expand, "bottom-left");
        view.ui.add("Switch_Map3D", "top-right")
        view.ui.add("Switch_MapBase", "bottom-right")
    }


    // cargamos el mapa al cargar el componente
    useEffect(() => {
        crearMap()
    }, [check_Map3D]);


    //    funciones para obtener el  checket del la configuracion
    async function get_check_Map3D() {
        try {
            let result = await props.config.getIn(["Map_3D"])
            if (result !== undefined) {
                setCheck_Config_Map(result)
            }
        } catch (error) {
            console.log("error" + error)
        }
    }

    async function get_check_MapBase() {
        try {
            let result = await props.config.getIn(["Map_Base"])
            if (result !== undefined) {
                setCheck_Config_BaseMap(result)
            }
        } catch (error) {
            console.log("error")
        }
    }

    get_check_MapBase()
    get_check_Map3D()


    // funciones de los manejadores del checket del mapa

    const handleSwitch_Map3D = (event: ChangeEvent<HTMLInputElement>) => {
        let check = event.target.checked
        setCheck_Map3D(check)

    }
    // manejador de evento para el switch del mapa base
    const handleSwitch_MapBase = (event: ChangeEvent<HTMLInputElement>) => {
        let check = event.target.checked
        setCheck_MapBase(check)
    }

    return (
        <div className="containerMap" id="containerMap" ref={containerMap}>

            <div id="Switch_Map3D" >
                {check_Config_Map === true &&
                    <>
                        <p className="Switch_p">Map 3D</p>
                        <Switch onChange={handleSwitch_Map3D} checked={check_Map3D} ></Switch>
                    </>
                }
            </div>

            <div id="Switch_MapBase" >
                {check_Config_Basemap === true &&
                    <>
                        <p className="Switch_p">Map Base</p>

                    </>
                }
            </div>

        </div>


    )
}

export default MapDefault