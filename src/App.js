import React from 'react'
import {  Routes, Route} from "react-router-dom"
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import RegisterPage from './pages/RegisterPage'
import AccountPage from './pages/AccountPage'
import AdminPage from './pages/AdminPage'
import Ticket from './pages/Ticket'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/account' element={<AccountPage/>} />
        <Route path='/account/bookings' element={<AccountPage/>} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='/ticket' element={<Ticket/>} />
      </Route>
      
    </Routes>
  )
}

export default App;