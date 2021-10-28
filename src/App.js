import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AddServices from './components/AddServices/AddServices';
import Booking from './components/Booking/Booking';
import Experts from './components/Home/Experts/Experts';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Registration from './components/Login/Registration/Registration';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route path="/experts">
            <Experts></Experts>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
