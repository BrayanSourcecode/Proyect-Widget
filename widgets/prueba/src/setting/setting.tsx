// modulos de jimu core 
import { React, Immutable, UseDataSource, DataSourceTypes,ReactRedux} from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { IMConfig } from '../config'

// modulos de jimu iu
import { Switch } from 'jimu-ui'

// modulos de react 
import { useState, useEffect ,ChangeEvent} from 'react';
// componente de propios de experiencie builder
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components';
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector';

// estilos css
import "./aset/setting.css"


// creacion del componente funcional 
export default function Setting(props: AllWidgetSettingProps<IMConfig>) {


  const [check_Map3D, setCheck_Map3D] = useState(false)
  const [check_MapBase, setCheck_MapBase] = useState(false)

// manejador de evento para el switch del mapa 3D
  const handleSwitch_Map3D = (event: ChangeEvent<HTMLInputElement>) => {
    let check=event.target.checked
    setCheck_Map3D(check)
    props.onSettingChange({
      id: props.id,
      config: props.config.set("Map_3D",check) 
    })
  }
  // manejador de evento para el switch del mapa base
  const handleSwitch_MapBase = (event: ChangeEvent<HTMLInputElement>) => {
    let check=event.target.checked
    setCheck_MapBase(check)
    props.onSettingChange({
      id: props.id,
      config: props.config.set("Map_Base",check) 
    })

  }
  

// creamos un objecto imutable para los datos que vamos a permitir para el witget
  const supportedTypes = Immutable([DataSourceTypes.FeatureLayer]);

  // creamos una funcion para  e
  const onDataSourceSelected = (useDataSources: UseDataSource[]) => {
    console.log('Selected data source:', useDataSources);
    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources
    });
  }

  // hace parte de los datos defiir o entender de una menjor manera 
  const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  
  return (
    
    <div className="p-3">
      <div className="setting" >
        <h6>Herramientas</h6>
        <div className='tool'>
          <span>Map 3D</span>
          <Switch onChange={handleSwitch_Map3D} checked={check_Map3D} ></Switch>
        </div>

        <div className='tool'>
          <span>Mapa base</span>
          <Switch onChange={handleSwitch_MapBase} checked={check_MapBase}></Switch>
        </div>

      </div>

      <div className="setting" >
      <h6>Fuente de datos</h6>
        <span> por favor seleciona Un mapa web, una escena web o una capa </span>
        <DataSourceSelector
          mustUseDataSource
          types={supportedTypes}
          useDataSources={props.useDataSources}
          onChange={onDataSourceSelected}
          widgetId={props.id}
        />
      </div>
      <div className="widget-setting-demo">
    <MapWidgetSelector
      useMapWidgetIds={props.useMapWidgetIds}
      onSelect={onMapWidgetSelected}
    />
  </div>

    </div>

  )

}



