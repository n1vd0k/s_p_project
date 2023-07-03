import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/indexHome';
import Careere from './pages/Careere/indexCareere';
import Mamba from './pages/Mamba Mentality/indexMamba';
import T666 from './pages/666/index666';
import Achivments from './pages/Achivments/indexAchivments';
import './stylefooter.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}  ></Route>
        <Route path='/Careere' element={<Careere/>}  ></Route>
        <Route path='/Achivments' element={<Achivments/>}  ></Route>
        <Route path='/T666' element={<T666/>}  ></Route>
        <Route path='/Mamba' element={<Mamba/>}  ></Route>
      </Routes>
      <footer className='footer'>©prod by nivzhik</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
