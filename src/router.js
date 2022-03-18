import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/';
import Dns from './components/Dns/';

const Router =  () => {
  return (
    <Routes>
      <Route path='/'>

        <Route index element={<Home />} />
        <Route path='dns' element={<Dns />} />
      </Route>
    </Routes>
  )
}

export default Router;
