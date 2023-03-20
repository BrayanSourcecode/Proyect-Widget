import { AllWidgetProps, React} from 'jimu-core'
import { IMConfig } from '../config'

// conponentes
import Viewcomponent from './Components/ViewComponent'
import { UseDataSource } from "jimu-core";


interface Myprops {
  id:string,
  useDataSources?: UseDataSource[]
}

export default function Widget (props:AllWidgetProps<IMConfig> & Myprops)  {
  const paso=props.useDataSources
   console.log(props.useDataSources[0].dataSourceId +"1111")
  return (
    <div   className="widget-demo jimu-widget m-2">   
    <Viewcomponent id={props.id} useDataSources={paso} ></Viewcomponent>

  </div>
  )
}
