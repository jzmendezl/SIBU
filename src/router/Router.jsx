import Dashboard from '@pages/Dashboard/Dashboard'
import Home from '@pages/Home/Home'
import Login from '@pages/Login/Login'
import Player from '@pages/Player/Player'
import { Route, Routes } from 'react-router-dom'

// TODO: add role separation. But this can wait a bit, for now the fundamentals are what matters

const Router = () => {
  return (
    <Routes>
      <Route path='/player/:idSong' element={<Player />} />
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}

export default Router
