import { useState, useEffect } from 'react'
import {Link, useNavigate, useParams} from "react-router-dom";
import logopokemon from '../../assets/img/logopokemon.png'
const PokemonId = () => {
    const [ObjPoke, setObjPoke] = useState({status:false, data:{}})
    const [ObjEncounters, setObjEncounters] = useState({status:false, data:[]})
    const [ObjMovements, setObjMovements] = useState({status:false, data:[]})
    
    const navigate = useNavigate();
    const {id} = useParams();

    const getPoke = async (id) => {     
        setObjPoke({status:false,...ObjPoke}); 
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const json = await data.json();   
        setObjPoke({status:true,data:json});
    }
    const PokeTypes = () =>{
       return ObjPoke.data.types.map(({type}, index)=>{
            return <button key={type.name} className={index%2===0?'btn btn-primary me-1':'btn btn-success me-1' } >{type.name[0].toUpperCase() + type.name.substring(1)}</button>
        })
    }
    const Abilities = () =>{
        return ObjPoke.data.abilities.map(({ability}, index)=>{
             return <button key={ability.name} className={index%2===0?'btn btn-primary me-1':'btn btn-success me-1' } >{ability.name[0].toUpperCase() + ability.name.substring(1)}</button>
         })
     }

    const getEncounters = async () => {
        let urlEncounters = ObjPoke.data.location_area_encounters;
        setObjEncounters({status:false,...ObjEncounters}); 
        const data = await fetch(urlEncounters);
        const json = await data.json(); 
        setObjEncounters({status:true,data:json});
    }

    const Encounters = () =>{
        return(
            <ul>
                {ObjEncounters.data.map((ele)=>{
                    let name = ele.location_area.name.split('-').map((ele)=>(ele[0].toUpperCase() + ele.substring(1))).join(' ');
                    return <li key={ele.location_area.name}>{name}</li>
                })}
            </ul>
        ) 
    }

    const Movements = () =>{
        return(
            <ul>
                {ObjPoke.data.moves.map(({move}, index)=>{
                      return <li key={move.name}>{move.name[0].toUpperCase() + move.name.substring(1)}</li>
                })}
            </ul>
        )        
    }

    useEffect(() => {
        getPoke(id);
    }, []); 

    useEffect(() => {
        ObjPoke.status && getEncounters();  
     }, [ObjPoke]); 

    return (
        ObjPoke.status &&        
        (
            <div className='container pokeid'>
                <div className='row header-pokeid'>
                    <div className='col-12 d-flex justify-content-between align-items-center'>
                        <img src={logopokemon} alt="" className="img-fluid logopoke"/>           
                        <Link className='btn btn-secondary back-pokeid' to={`/pokedex/`}>
                            <i className="bi bi-backspace-fill"></i>
                        </Link>
                    </div>
                </div>
                <div className='row main-pokeid mb-2'>
                    <div className='col-sm-12 col-md-9'>
                        <div 
                        className='row mb-2 info-poke 
                        align-content-sm-start 
                        justify-content-sm-start 
                        align-items-sm-start 
                        align-items-md-end                        
                        text-center'>
                            <div className='col-sm-12 col-md-4'>
                                <h3>Height</h3>
                               <h3>{ObjPoke.data.height}</h3>
                            </div>
                            <div className='content-img-pokeid col-sm-12 col-md-4 align-self-start order-sm-first order-md-0'>
                                <img src={ObjPoke.data.sprites.other.dream_world.front_default} className="img-fluid img-pokemonid"/>
                            </div>
                            <div className='col-sm-12 col-md-4'>
                                <h3>Weight</h3>
                                <h3>{ObjPoke.data.weight}</h3>
                            </div>
                        </div>
                        <div className='row mb-2 text-center bg-white'>
                            <h1>{(ObjPoke.data.name).toUpperCase()}</h1>
                            <h2>#2</h2>
                        </div>
                        <div className='row mb-2 text-center'>
                            <div className='otra-info'>
                                <div className='bg-white w-50'>
                                    <h1>Type</h1>
                                    <div className='d-flex justify-content-center flex-wrap w-100'>                                     
                                        {(ObjPoke.data.types.length!==0) && <PokeTypes />}
                                    </div>
                                </div>
                        
                                <div className='bg-white w-50'>
                                    <h1>Abilities</h1>
                                    <div className='d-flex justify-content-center flex-wrap w-100'>                                     
                                        {(ObjPoke.data.types.length!==0) && <Abilities />}
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-3'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='encounters bg-white mb-2 w-100'>
                                <h2 className='bg-secondary'><i className="bi bi-geo-alt"></i>Encounters</h2>
                                {(ObjEncounters.status) && <Encounters />}
                            </div>
                            <div className='movements mb-2 bg-white w-100 ps-2'>
                                <h2><i className="bi bi-joystick"></i>Movements</h2>
                                {(ObjPoke.data.moves.length!==0) && <Movements />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default PokemonId;