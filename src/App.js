import './App.css';
import ClassComponent from "./Components/ClassComponent";
import Hook from "./Components/Hook";
import CallbackHook from "./Callback/CallbackHook";
import PromiseHook from "./Promises/PromiseHook";

function App() {
  return (
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
    </div>
  );
}

export default App;
