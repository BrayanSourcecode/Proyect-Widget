import { React, Immutable, UseDataSource, DataSourceTypes, DataSource, getAppStore, IMState, AllWidgetProps } from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { IMConfig } from '../config'

import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector';
import { Switch } from 'jimu-ui'

// REACT
import { useState, useEffect } from 'react';
// css
import "./aset/setting.css"
import { ChangeEvent } from 'react';
import { connect, Provider, useSelector } from 'react-redux';
import { ReactRedux } from 'jimu-core'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components';


 interface myprops {
  name:string,
  view:{t:string,b:string}
 }
export default function Setting(props: AllWidgetSettingProps<IMConfig>&myprops) {


  const [check, setCheck] = useState(false)
  
 

  const handleSwitch = (event: ChangeEvent<HTMLInputElement>) => {
    
    setCheck(event.target.checked);
    props.onSettingChange({
      id: props.id,
      config: props.config.set("prueba",{name:"fdsdf",view:"fdsfsd"}) 
    })

  }
//  const  onToolsChanged = (checked, name): void => {
//     this.props.onSettingChange({
//       id: this.props.id,
//       config: this.props.config.set(name, checked)
//     })
//   }


  const supportedTypes = Immutable([DataSourceTypes.FeatureLayer]);
  const onDataSourceSelected = (useDataSources: UseDataSource[]) => {
    console.log('Selected data source:', useDataSources);
    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources
    });

  }

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
          <Switch onChange={handleSwitch} checked={check} ></Switch>
        </div>

        <div className='tool'>
          <span>Mapa base</span>
          <Switch></Switch>
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



