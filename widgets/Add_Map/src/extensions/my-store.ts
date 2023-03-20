import { extensionSpec, ImmutableObject, IMState } from 'jimu-core';
import { addView }from '../runtime/Reducer/viewSlice';
import viewSlice from '../runtime/Reducer/viewSlice';
import { initialstate } from '../runtime/Reducer/viewSlice';

interface MyState {
  view:string
  name: string;
  email: string;
}

type IMMyState = ImmutableObject<MyState>;

declare module 'jimu-core/lib/types/state'{
  interface State{
    MyState?: IMMyState
  }
}

export default class MyReduxStoreExtension implements extensionSpec.ReduxStoreExtension {
  id = 'id add_ map';

  getActions() {
    return [addView.type]
  }

  getInitLocalState() {
    return {
      view:initialstate,
      name:"dsfds"
    }
  }

  getReducer() {
    return viewSlice
  }

  getStoreKey() {
    return 'MyState';
  }
}



