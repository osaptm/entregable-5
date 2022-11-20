import FilterTypePokemon from './FilterTypePokemon';
import SearchPokemon from './SearchPokemon'
import { useState , useEffect} from "react";
import pokeball from '../../assets/img/pokeball.svg'
const FiltersPokemon = ({ApiPokemons, getPokemonsByType, ObjPokemonsStatus, changeFilter, ValChangeFilter, searchPokemon,InputSearchValue, setInputSearchValue}) => { 

    useEffect(() => {
        setInputSearchValue('');
    }, [InputSearchValue]);
  
    return (
        <div className="row align-items-center">
            <SearchPokemon 
            changeFilter={changeFilter}  
            ObjPokemonsStatus={ObjPokemonsStatus} 
            searchPokemon={searchPokemon} 
            InputSearchValue= {InputSearchValue}     
            />
            <div className="col-xs-12 col-md-2 col-lg-2">
                <button className='btn btn-success w-100' onClick={()=>{ApiPokemons('ok')}}>
                    ALL
                </button>
            </div>  
            <FilterTypePokemon changeFilter={changeFilter} ValChangeFilter={ValChangeFilter} getPokemonsByType={getPokemonsByType}/>
        </div>
    );
};

export default FiltersPokemon;