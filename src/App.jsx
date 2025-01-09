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
      <FooterComponent/>
    </div>
  )
}

export default App;
