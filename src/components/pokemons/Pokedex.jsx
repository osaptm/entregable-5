import { useSelector } from "react-redux";
import FiltersPokemon from "./FiltersPokemon";
import ListPokemons from "./ListPokemons";
import usePokeApi from '../../hooks/pokeapi/usePokeApi';
import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { setUser, unsetUser } from "../../reducers/user/userSlice";

const Pokedex = () => {
    const {userName} = useSelector((state) => state.user);
    const {ObjPokemons, getPokemons, getPokemonsByType, searchPoke} = usePokeApi();
    const [ValChangeFilter, setChangeFilter] = useState('search');    
    const [InputSearchValue, setInputSearchValue] = useState('');

    const dispatch = useDispatch();

    const changeFilter = (filter) => {
        setChangeFilter(filter);
    }

    const searchPokemon =  (pokemon) =>{
           searchPoke(pokemon);
    }

    const getPokemonsByTypex = (type) => {
        if(type!=='1') getPokemonsByType(type);
    }

    function changeUser(user){
        dispatch(setUser({userName:user}));
    }

    const ApiPokemons = (msj) => {
        setInputSearchValue(msj);
        getPokemons();
    }
      
    useEffect(() => {
      ApiPokemons();
    }, []);

    
    return (
        <div className="container text-center">
            <div className="container-flui header">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <h1>POKEDEX</h1>
                    <button className="btn btn-primary" type="button" id="button-addon2" onClick={()=>{alert('config');}}>Config</button>
                </div>
                <p className="welcome">Welcome <b>{userName}</b>, hare you can find your favorite pokemon.</p>
            </div>
            
           
            <FiltersPokemon 
            ApiPokemons={ApiPokemons} 
            getPokemonsByType={getPokemonsByTypex} 
            ObjPokemonsStatus={ObjPokemons.status} 
            changeFilter={changeFilter} 
            ValChangeFilter={ValChangeFilter}
            searchPokemon = {searchPokemon}
            InputSearchValue = {InputSearchValue}
            setInputSearchValue = {setInputSearchValue}
            />

            {
            (ObjPokemons.status) ? 
                <ListPokemons ObjPokemons={ObjPokemons} />
            :
                ObjPokemons.error === true ? 
                    (
                        <div className="container">
                            <b style={{fontSize:'40px'}}>There is no data for the search</b><br />
                            <button className="btn btn-primary" type="button" id="button-addon2" onClick={()=>{ApiPokemons();}}>Reset</button>
                        </div>
                    )
                :<b style={{fontSize:'40px'}}>...</b>
        }
        </div>
    );
};

export default Pokedex;