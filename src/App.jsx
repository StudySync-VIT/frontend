
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';



function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Main/>} />
       <Route path='/home' element={<Home/>} />
      {/*<Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/send' element={<Send/>} /> */}
      
    </Routes>      
    </BrowserRouter>
    </>
  )
}

export default App
