import { React, AllWidgetProps, getAppStore} from 'jimu-core'
import { IMConfig } from '../config'
import { Provider } from 'react-redux';
//componentes
import MapDefault from './components/map_default'



export default function Widget  (props: AllWidgetProps<IMConfig>)  {
// sacamos el estado  para gregarlo al provider
  const store = getAppStore();

  return (
<Provider store={store}> 
    <div className="widget-demo jimu-widget m-2">
       <MapDefault mapWidgetId={props.id} /> 
    </div>
</Provider>


)
}







