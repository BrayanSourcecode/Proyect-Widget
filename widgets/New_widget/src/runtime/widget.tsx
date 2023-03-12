import { React, AllWidgetProps} from 'jimu-core'
import { IMConfig } from '../config'

// conponentes
import Viewcomponent from './Components/ViewComponent'


export default function Widget (props:AllWidgetProps<IMConfig>)  {
 
  return (
    <div   className="widget-demo jimu-widget m-2">
    <p>Simple Widget</p>
    
    <Viewcomponent id={props.id}/>

   

  </div>
  )
}
