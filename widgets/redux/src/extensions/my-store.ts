import { extensionSpec, ImmutableObject, IMState } from 'jimu-core';



interface MyState {
  a: string;
  b: string;
}
type IMMyState = ImmutableObject<MyState>;

declare module 'jimu-core/lib/types/state'{
  interface State{
    myState?: IMMyState
  }
}

export default class MyReduxStoreExtension implements extensionSpec.ReduxStoreExtension {
  id = 'redux extwencion';

  getActions() {
    return  ["addpru"]// Object.keys(MyActionKeys).map(k => MyActionKeys[k]);
  }

  getInitLocalState() {
    return {
      a: "brayan 2",
      b: "dasdasdasd"
    }
  }

  getReducer() {

   return(undefined)
    // return (localState: IMMyState, action: ActionTypes, appState: IMState): IMMyState => {
    //   switch (action.type) {
    //     case MyActionKeys.MyAction1:
    //       return localState.set('a', action.val);
    //     case MyActionKeys.MyAction2:
    //       return localState.set('b', action.val);
    //     default:
    //       return localState;
    //   }
    // }
  }

  getStoreKey() {
    return 'myState';
  }
}