import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './Screens/HomeScreen'
import Services from './Screens/Services'
import ProductScreen from './Screens/ProductScreen'
import CartScreen from './Screens/CartScreen'
import Main from './Screens/Main'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'
import ProfileScreen from './Screens/ProfileScreen'
import ShippingScreen from './Screens/ShippingScreen'
import PaymentScreen from './Screens/PaymentScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import OrderScreen from './Screens/OrderScreen'
import UserListScreen from './Screens/UserListScreen'


function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={Main} exact />
      <Route path='/services' component={Services} exact />
      <Route path='/#about' component={Main} exact />
      <Container>
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/shop' component={HomeScreen} />
      </Container>
      <Footer />
    </Router>
  )
}

export default App
