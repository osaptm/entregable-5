//React
import React from 'react'
import ReactDOM from 'react-dom/client'
//React-Routes
import {HashRouter,Route,Routes} from 'react-router-dom'
//Components
import Users from './components/users/Users'
import Pokedex from './components/pokemons/Pokedex'
import PokemonId from './components/pokemons/PokemonId'
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
//Bootstrap y CSS custom
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
//Redux
import { GLOBAL_STATES } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={GLOBAL_STATES}>
    
      <HashRouter>
        <Routes>
            <Route path='/' element={<Users />}></Route>
            <Route element={<ProtectedRoutes />}>
                <Route path='/pokedex' element={<Pokedex />}></Route>
                <Route path='/pokemon/:id' element={<PokemonId />}></Route>
            </Route>
        </Routes>
      </HashRouter>

    </Provider>
  </React.StrictMode>
)
