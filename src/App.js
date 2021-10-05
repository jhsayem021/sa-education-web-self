import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch , Route } from 'react-router-dom';
import Home from './Conponent/Home/Home';
import Services from './Conponent/Services/Services';
import About from './Conponent/About/About';

import PageNotFound from './Conponent/PageNotFound/PageNotFound';
import Header from './Conponent/Header/Header';
import Footer from './Conponent/Footer/Footer';
import Enroll from './Conponent/Enroll/Enroll';
import Contact from './Conponent/Contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Header></Header>
    
     <div className="switch-style py-4">
     <Switch>
     <Route exact  path="/" >
         <Home></Home>
       </Route>
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
       <Route path="/contact" >
        <Contact></Contact>
       </Route>
       <Route path="*" >
        <PageNotFound></PageNotFound>
       </Route>
       
     </Switch>
     </div>
     <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
