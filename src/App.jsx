import './index.css'
import {Routes, Route} from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import Home from './_root/pages/Home'
import Search from './_root/pages/Search'


function App() {

  return (
    <main className='flex'>
      <Routes>
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/option' element={<Search/>}></Route>
          <Route path='/option2' element={<Search/>}></Route>
          <Route path='/profile' element={<Search/>}></Route>
          <Route path='/notifications' element={<Search/>}></Route>
          <Route path='/logout' element={<Search/>}></Route>
          
        </Route>
      </Routes>
    </main>
      
  )
}

export default App
