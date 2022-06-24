import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  // Link
} from "react-router-dom";

import Home from './pages/Home'
import QRgen from './pages/QRgenerator'
import QRscan from './pages/QRscanner'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Switch>
              <Route exact path="/">
                <Home/>
              </Route> */}
              <Route path="/qr_generator" element={<QRgen/>} />
              <Route path="/qr_scanner" element={<QRscan/>} />
          </Routes>
        </BrowserRouter>  
      </div>
    </div>
  );
}

export default App;
