
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AddProducts from './pages/AddProducts/AddProducts';
import Dashboard from './pages/DashBoard/Dashboard/Dashboard';
import Pay from './pages/DashBoard/Pay/Pay';
import Home from './pages/Home/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import ManageAllOrders from './pages/ManageAllOrders/ManageAllOrders';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import PrivetRoute from './pages/PrivetRoute/PrivetRoute';
import Products from './pages/Products/Products';
import PurchaseProduct from './pages/PurchaseProduct/PurchaseProduct';
import Register from './pages/Register/Register';
import Review from './pages/DashBoard/Review/Review'
import Footer from './pages/Shared/Footer/Footer';
import Navigation from './pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivetRoute path='/dashboard'>
              <Dashboard></Dashboard>
            </PrivetRoute>
            <Route exact path='/products'>
              <Products></Products>
            </Route>
            <PrivetRoute exact path='/products/:purchaseId'>
              <PurchaseProduct></PurchaseProduct>
            </PrivetRoute>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>

          </Switch>

          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
