import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from "./components/Navigation";
import { Context, Provider } from "./providers/Provider";
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import Chlebickobrani from "./components/Chlebickobrani";
import Setup from "./components/Setup";
import { useContext } from 'react';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Chlebickobrani />} />
          <Route path='/setup' element={<Setup />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
