import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CartScreen from './screens/CartScreen/CartScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';


const App = () => {
  return (
    <Router>
      <Header />
        <main className="py-3">
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
          </Container>
        </main>
      <Footer />
    </Router>
  );
};

export default App;