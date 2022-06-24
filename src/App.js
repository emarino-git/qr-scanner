import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
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
              <Route path="/qr_generator" element={<QRgen/>} />
              <Route path="/qr_scanner" element={<QRscan/>} />
          </Routes>
        </BrowserRouter>  
      </div>
    </div>
  );
}

export default App;
