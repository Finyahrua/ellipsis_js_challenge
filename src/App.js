import "./App.css";
import ErrorScreen from "./screens/ErrorScreen";
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";



function App() {
  return (
    <div className="App">
      {/* <HomeScreen/> */}
      {/* <ErrorScreen/> */}
      <LoadingScreen/>
    </div>
  );
}

export default App;
