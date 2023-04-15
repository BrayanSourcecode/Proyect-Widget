// modulos de jimu core 
import { React} from 'jimu-core';
import { AllWidgetSettingProps } from 'jimu-for-builder';
import { IMConfig } from '../config'

// modulos de jimu iu
import { Switch } from 'jimu-ui'

// modulos de react 
import { useState, useEffect ,ChangeEvent} from 'react';
// estilos css
import "./aset/setting.css"


// creacion del componente funcional 
export default function Setting(props: AllWidgetSettingProps<IMConfig>) {


  // const [check_Map3D, setCheck_Map3D] = useState(false)
  // const [check_MapBase, setCheck_MapBase] = useState(false)

// manejador de evento para el switch del mapa 3D
  const handleSwitch_Map3D = (event: ChangeEvent<HTMLInputElement>) => {
    let check=event.target.checked
    
    props.onSettingChange({
      id: props.id,
      config: props.config.set("Map_3D",check) 
    })
  }
  // manejador de evento para el switch del mapa base
  const handleSwitch_MapBase = (event: ChangeEvent<HTMLInputElement>) => {
    let check=event.target.checked
    props.onSettingChange({
      id: props.id,
      config: props.config.set("Map_Base",check) 
    })
  }
 
  return (
    <div className="p-3">
      <div className="setting" >
        <h6>Herramientas</h6>
        <div className='tool'>
          <span>Map 3D</span>
          <Switch onChange={handleSwitch_Map3D} checked={props.config.getIn(["Map_3D"])} ></Switch>
        </div>

        <div className='tool'>
          <span>Mapa base</span>
          <Switch onChange={handleSwitch_MapBase} checked={props.config.getIn(["Map_Base"])}></Switch>
        </div>

      </div>
    </div>
  )

}



