import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch , Route } from 'react-router-dom';
import Home from './Conponent/Home/Home';
import Services from './Conponent/Services/Services';
import About from './Conponent/About/About';

import PageNotFound from './Conponent/PageNotFound/PageNotFound';
import Header from './Conponent/Header/Header';
import Footer from './Footer/Footer';
import Enroll from './Conponent/Enroll/Enroll';


function App() {
  return (
    <BrowserRouter>
    <Header></Header>
     <Switch>
       <Route path="/home" >
         <Home></Home>
       </Route>
       <Route path="/services" >
         <Services></Services>
       </Route>
       <Route path="/about" >
         <About></About>
       </Route>
       <Route path="/enroll" >
        <Enroll></Enroll>
       </Route>
       <Route path="*" >
        <PageNotFound></PageNotFound>
       </Route>
       <Route exact path="/" >
         <Home></Home>
       </Route>
     </Switch>
     <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
