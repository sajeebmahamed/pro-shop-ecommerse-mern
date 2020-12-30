import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CartScreen from './screens/CartScreen/CartScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import OrderScreen from './screens/OrderScreen/OrderScreen';
import PaymentScreen from './screens/PaymentScreen/PaymentScreen';
import PlaceorderScreen from './screens/PlaceorderScreen/PlaceorderScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen/ShippingScreen';
import UserListScreen from './screens/UserListScreen/UserListScreen';


const App = () => {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Route path='/order/:id' component={OrderScreen} />
            <Route path='/placeorder' component={PlaceorderScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/' component={HomeScreen} exact />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/admin/userlist' component={UserListScreen} />
            <Route path='/shipping' component={ShippingScreen} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
};

export default App;