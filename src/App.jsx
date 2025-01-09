// import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavComponent from './assets/Components/Layout/Header/Navbar/NavComponent.jsx'
import FooterComponent from './assets/Components/Layout/Footer/FooterComponent.jsx';


function App() {

  return (
    <div className="AppCAL">
      <NavComponent/>
      {/* <Routes>
        <Route>
        
        </Route>
      </Routes> */}
      <img src="https://drive.google.com/uc?export=view&id=1vF3g-S1YX6WxPZ7jusQbOD_SP8LFjBIu" alt="" width={300} height={300} />
      <FooterComponent/>
    </div>
  )
}

export default App;
