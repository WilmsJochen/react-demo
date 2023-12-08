import './App.css';
import ClassComponent from "./Components/ClassComponent";
import Hook from "./Components/Hook";
import CallbackHook from "./Callback/CallbackHook";
import PromiseHook from "./Promises/PromiseHook";
import { Provider } from 'react-redux'
import store from "./Redux/store"
import ReduxHookComponent from "./Redux/ReduxHookComponent";
import ReduxHookWIthActionsComponent from "./Redux/ReduxHookWIthActionsComponent";
function App() {
  return (
      <Provider store={store}>
          <div className="App">
            <ClassComponent/>
            <br/>
            <Hook/>
            <br/>
            <br/>
            <CallbackHook/>
            <br/>
            <br/>
            <PromiseHook/>
            <br/>
            <br/>
            <ReduxHookComponent/>
            <br/>
            <ReduxHookWIthActionsComponent/>
        </div>
      </Provider>
  );
}

export default App;
