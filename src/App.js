import logo from './logo.svg';
import './App.css';
import Addpatient from './components/Addpatient';
import Searchpatient from './components/Searchpatient';
import Deletepatient from './components/Deletepatient';
import Viewallpatient from './components/Viewallpatient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addpatient/>}/>
        <Route path='/search' element={<Searchpatient/>}/>
        <Route path='/delete' element={<Deletepatient/>}/>
        <Route path='/viewall' element={<Viewallpatient/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
