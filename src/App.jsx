import { Navigate,Route, Routes } from 'react-router-dom'
import './App.css'
import NavComponent from './assets/Components/Layout/Header/Navbar/NavComponent.jsx'
import FooterComponent from './assets/Components/Layout/Footer/FooterComponent.jsx';
// import PrivateRoute from './PrivateRoute.jsx';
import HomePage from './assets/Components/Pages/Home/HomePage/Home.jsx';
function App() {

  return (
    <div className="AppCAL">
      <NavComponent/>
       <Routes>
        <Route path="/" element={<Navigate to={"/Home"} />} />
        <Route path='/Home' element={<HomePage/>} />
        {/* <Route path="/Register" element={<RegisterForm />} />
        <Route path="/AboutTeam" element={<AboutTeam />} />
        <Route path="/Login" element={<LoginPage setUser={setUser} />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Galery" element={<Gallery />} /> */}
        {/* <Route path='/Reserve' 
               element={
                <PrivateRoute isAllowed={user.isLoggedIn}>
                <Reservas />
                </PrivateRoute>
                      } 
        />
        <Route path='/Admin' 
          element={
                  <PrivateRoute isAllowed={user.isLoggedIn && user.role === "Administrador"}>
                  <Admin />
                  </PrivateRoute>
                  } 
        /> */}
        {/* <Route path="*" element={<Error404 />} /> */}
      </Routes>
      
      <FooterComponent/>
    </div>
  )
}

export default App;
