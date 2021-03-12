import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Route path="/" exact={true}>
                <Home/>
            </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
