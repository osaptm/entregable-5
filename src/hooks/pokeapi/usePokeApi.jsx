import { useState, useEffect } from 'react'

const usePokeApi = () => {
    const [ObjPokemons, setObjPokemons] = useState({status:false, pokemons:[], error:false})
    const getPokemons =  async () => { 
      setObjPokemons({status:false, pokemons:[], error:false});        
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154`);
      const json = await data.json();
      setObjPokemons({status:true,pokemons:json.results, error:false});
    }  
    const getPokemonsByType =  async (type) => { 
      setObjPokemons({status:false, pokemons:[], error:false});        
      const data = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
      const json = await data.json();
      const newData = json.pokemon.map((ele)=>{
        return {name:ele.pokemon.name, url:ele.pokemon.url}
      })
      setObjPokemons({status:true,pokemons:newData, error:false});
    }  

    const searchPoke =  async (pokemon) => {   
        try {   
          setObjPokemons({status:false, pokemons:[], error:false});      
          let urlFinal = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
          const data = await fetch(urlFinal);
          const json = await data.json();
          const newData = [{name:pokemon, url:urlFinal}]
          setObjPokemons({status:true,pokemons:newData, error:false});
        } catch (error) {
          setObjPokemons({status:false, pokemons:[], error:true});
        }
    }  

    return {ObjPokemons, getPokemons, getPokemonsByType,searchPoke};
};

export default usePokeApi;