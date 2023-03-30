import { React, AllWidgetProps, getAppStore,} from 'jimu-core'
import { IMConfig } from '../config'
import {Provider} from 'react-redux';
//componentes
import MapDefault from './components/map_default'
import Setting from '../setting/setting';

import { AllWidgetSettingProps } from 'jimu-for-builder';


export default function Widget  (props: AllWidgetProps<IMConfig>)  {

 
// sacamos el estado  para gregarlo al provider
  // const store = getAppStore();
 
  // const store = getAppStore();
  // const MyState=store.getState().MyState.name

  return (
    // <Provider store={store}> 
      <div className="widget-demo jimu-widget m-2">
        <MapDefault mapWidgetId={props.id} config={props.config} />
       {/* <Setting  /> */}
      </div>
    //  </Provider>
  


)
}







