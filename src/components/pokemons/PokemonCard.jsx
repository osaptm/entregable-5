import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import pokebola from '../../assets/img/pokebola.png'
const PokemonCard = ({url}) => {
    const [ObjPoke, setObjPoke] = useState({status:false, data:{}})
    const navigate = useNavigate();

    const getPoke = async (url) => {     
        setObjPoke({status:false,...ObjPoke});     
        const data = await fetch(url);
        const json = await data.json();
       
        setObjPoke({status:true,data:json});  
    }

    const PokeDetail = (idpokemon) => {
        navigate(`/pokemon/${idpokemon}`);
    };

    useEffect(() => { 
        getPoke(url);
      }, []); 

    return (
        ObjPoke.status && 
        (<div className='pokemon-info' onClick={()=>{PokeDetail(ObjPoke.data.id)}}>
            <h3>{(ObjPoke.data.name).toUpperCase()}</h3>
            <div className='pokebola-container'>
                <img src={pokebola} className="pokebola"/>
                <img src={ObjPoke.data.sprites.other.dream_world.front_default} className="img-pokemon"/>
            </div>
            <p><b>Types:</b>TypesArray</p>
            <p><b>HP:</b>{ObjPoke.data.stats[0].base_stat}</p>
            <p><b>Attack:</b>{ObjPoke.data.stats[1].base_stat}</p>
            <p><b>Defense:</b>{ObjPoke.data.stats[2].base_stat}</p>
            <p><b>Speed:</b>{ObjPoke.data.stats[5].base_stat}</p>
        </div>)
        
    );
};

export default PokemonCard;