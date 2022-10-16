import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Front from './components/Front';
import Navbar from './components/Navbar'
import Search from './components/Search/index.js';
function App() {
  return (
   <>
   <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
   </style>
   <Router>
   <Navbar />
  
   <Routes>
    <Route exact path="/" element={<Front key="14" st="2020-03-15" rt="2022-05-12" gen="14"/>} ></Route>
    <Route  path="Search" element={<Search />} ></Route>
    <Route exact path="Latestaction" element={<Front key="16" st="2015-03-15" rt="2020-05-12" gen="16"/>} ></Route>
    <Route exact path="Drama" element={<Front key="18" st="2020-03-15" rt="2021-05-12" gen="18"/>} ></Route>
    <Route exact path="Family" element={<Front key="10751" st="2015-03-15" rt="2019-09-12" gen="10751"/>} ></Route>
   </Routes>
   </Router>
   </>
  );
}

export default App;
