import { extensionSpec, ImmutableObject } from 'jimu-core';
import { addView }from '../runtime/Reducer/viewSlice';
import viewSlice,{ initialstate } from '../runtime/Reducer/viewSlice';


interface MyState {
  view:{t:string,b:string},
  name:string,


}

type IMMyState = ImmutableObject<MyState>;

declare module 'jimu-core/lib/types/state'{
  interface State{
    MyState: IMMyState
  }
}

export default class MyReduxStoreExtension implements extensionSpec.ReduxStoreExtension {

  id = 'id add_ map';

  getActions() {
    return [addView.type]
  }

  getInitLocalState() {
    return {
      view:{t:"t del sad",b:"b del b"},
      name:"fdsfsdfsd",
    }
      
  }

  getReducer() {
    return viewSlice
  }
// en este metodo se tiene que llamar igual queel modulo que declaramos si no no funciona
  getStoreKey() {
    return 'MyState';
  }
}



