import './App.css';
import Home from './components/Home';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import WhatsAppButton from './components/layouts/whatapp'; 


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './components/product/ProductDetail';
import ProductSearch from './components/product/ProductSearch';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect, useState } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';

import axios from 'axios';

import Dashboard from './components/admin/Dashboard';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';
import UpdateProduct from './components/admin/UpdateProduct';
import OrderList from './components/admin/OrderList';
import UpdateOrder from './components/admin/UpdateOrder';
import UserList from './components/admin/UserList';
import UpdateUser from './components/admin/UpdateUser';
import ReviewList from './components/admin/ReviewList';
import About from './components/About/About';
import pr from './components/layouts/Projects/OngoingProject1';
// import Landing from './components/layouts/land';


import ProjectDetails from './components/layouts/Projects/onging';
import Facility from './components/layouts/Projects/Fasility';
import Pop from './components/layouts/pop';
import PraveenBloosom from './components/layouts/Projects/OngoingProject1';
import PraveenSai from './components/layouts/Projects/OngoingProject2';
import PraveenPark from './components/layouts/Projects/OngoingProject3';
import PraveenMarvel from './components/layouts/Projects/OngoingProject4';
import ContactPage from './components/layouts/Contact/contact';
import CustomCursor from './components/layouts/cur';
import PraveenSaiEnclave from './components/layouts/Projects/OngoingProject5';
import PraveenSaiGarden from './components/layouts/Projects/OngoingProject6';
import Completed from './components/layouts/Projects/Completed/Completed';
import Projectscard from './components/layouts/Projectcard';

import Upcoming from './components/layouts/Projects/Upcomeing/Upcomingcard';
import PraveenSudikshaGarden from './components/layouts/Projects/Upcomeing/Upcomeing';
import PraveenSaiHome from './components/layouts/Projects/OngoingProject8';





function App() {
  const [stripeApiKey, setStripeApiKey] = useState("")
  useEffect(() => {
    store.dispatch(loadUser)
    async function getStripeApiKey(){
      const {data} = await axios.get('/api/v1/stripeapi')
      setStripeApiKey(data.stripeApiKey)
    }
    getStripeApiKey()
  },[])

  return (

    <Router>
      <div className="App">
        <HelmetProvider>
            <Header/>
           
            <CustomCursor/>
            {/* <Pop/> */}
                <div className=' container-fluid'>
                  <ToastContainer theme='dark' />
                  <Routes>
                    {/* <Pop/> */}
                      <Route path='/' element={<Home/>} />
                      <Route path='/about' element={<About/>} />
                      {/* <Route path='/land' element={<Landing/>} /> */}
                      <Route path='/ongoing' element={<ProjectDetails/>} />
                      <Route path='/fa' element={<Facility/>} />
                      <Route path='/PraveenBloosom' element={<PraveenBloosom/>} />
                      <Route path='/PraveenSaiAvenue' element={<PraveenSai/>} />
                      <Route path='/PraveenPark' element={<PraveenPark/>} />
                      <Route path='/PraveenMarvel' element={<PraveenMarvel/>} />
                      <Route path='/PraveenSaiEnclave' element={<PraveenSaiEnclave/>} />
                      <Route path='/PraveenSaiGarden' element={<PraveenSaiGarden/>} />
                      <Route path='/PraveenSaiHome' element={<PraveenSaiHome/>} />
                      <Route path='/Completed' element={<Completed/>} />
                      <Route path='/Ongoingprojects' element={<Projectscard/>} />
                      
                      <Route path='/Upcoming' element={<Upcoming/>} />
                      <Route path='/PraveenSudikshaGarden' element={<PraveenSudikshaGarden/>} />
                      <Route path='/ContactPage' element={<ContactPage/>} />
                      <Route path='/pop' element={<Pop/>} />
                     

                   
                     

                      <Route path='/search/:keyword' element={<ProductSearch/>} />
                      <Route path='/product/:id' element={<ProductDetail/>} />
                      <Route path='/login' element={<Login/>} />
                     
                      <Route path='/register' element={<Register/>} />
                      <Route path='/myprofile' element={<ProtectedRoute><Profile/></ProtectedRoute> } />
                      <Route path='/myprofile/update' element={<ProtectedRoute><UpdateProfile/></ProtectedRoute> } />
                      <Route path='/myprofile/update/password' element={<ProtectedRoute><UpdatePassword/></ProtectedRoute> } />
                      <Route path='/password/forgot' element={<ForgotPassword/> } />
                      <Route path='/password/reset/:token' element={<ResetPassword/> } />
                    

                  </Routes>
                </div>
                {/* Admin Routes */}
                <Routes>
                  <Route path='/admin/dashboard' element={ <ProtectedRoute isAdmin={true}><Dashboard/></ProtectedRoute> } />
                  <Route path='/admin/products' element={ <ProtectedRoute isAdmin={true}><ProductList/></ProtectedRoute> } />
                  <Route path='/admin/products/create' element={ <ProtectedRoute isAdmin={true}><NewProduct/></ProtectedRoute> } />
                  <Route path='/admin/product/:id' element={ <ProtectedRoute isAdmin={true}><UpdateProduct/></ProtectedRoute> } />
                  <Route path='/admin/orders' element={ <ProtectedRoute isAdmin={true}><OrderList/></ProtectedRoute> } />
                  <Route path='/admin/order/:id' element={ <ProtectedRoute isAdmin={true}><UpdateOrder/></ProtectedRoute> } />
                  <Route path='/admin/users' element={ <ProtectedRoute isAdmin={true}><UserList/></ProtectedRoute> } />
                  <Route path='/admin/user/:id' element={ <ProtectedRoute isAdmin={true}><UpdateUser/></ProtectedRoute> } />
                  <Route path='/admin/reviews' element={ <ProtectedRoute isAdmin={true}><ReviewList/></ProtectedRoute> } />
                </Routes>
                <WhatsAppButton />
            <Footer/>
        </HelmetProvider>
      </div>
    </Router>
    
    
  );
}

export default App;
