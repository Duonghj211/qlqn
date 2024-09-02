
import './App.css';
import Login from '../src/Pages/Login/Login'
import Qlmt from '../src/Pages/Qlmt/Qlmt'
import Qlnd from '../src/Pages/Qlnd/Qlnd'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/qlmt' element={<Qlmt/>}/>
        <Route path='/qlnd' element={<Qlnd/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
