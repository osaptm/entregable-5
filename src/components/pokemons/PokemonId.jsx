import { useState, useEffect } from 'react'
import {Link, useNavigate, useParams} from "react-router-dom";
import logopokemon from '../../assets/img/logopokemon.png'
const PokemonId = () => {
    const [ObjPoke, setObjPoke] = useState({status:false, data:{}})
    const navigate = useNavigate();
    const {id} = useParams();

    const getPoke = async (id) => {     
        setObjPoke({status:false,...ObjPoke}); 
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const json = await data.json();  console.log(json);     
        setObjPoke({status:true,data:json});  
    }

    useEffect(() => {
        getPoke(id);
      }, []); 

    return (
        ObjPoke.status &&        
        (
            <div className='container pokeid'>
                <div className='row header-pokeid'>
                    <div className='col-12 d-flex justify-content-between align-items-center'>
                        <img src={logopokemon} alt="" className="img-fluid logopoke"/>
           
                        <Link className='btn btn-secondary back-pokeid' to={`/pokedex/`}>
                            <i class="bi bi-backspace-fill"></i>
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
                                </div>
                        
                                <div className='bg-white w-50'>
                                    <h1>Abilities</h1>   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-3'>
                        <div className='d-flex flex-column justify-content-center align-items-center'>
                            <div className='encounters mb-2 bg-secondary w-100 ps-2'>
                                <h2><i class="bi bi-geo-alt"></i>Encounters</h2>
                            </div>
                            <div className='movements mb-2 bg-white w-100 ps-2'>
                                <h2><i class="bi bi-joystick"></i>Movements</h2>
                                <ul>
                                    <li>XXXXXXXX</li>
                                    <li>XXXXXXXX</li>
                                    <li>XXXXXXXX</li>
                                    <li>XXXXXXXX</li>
                                    <li>XXXXXXXX</li>
                                    <li>XXXXXXXX</li>
                                    <li>XXXXXXXX</li>
                                    <li>XXXXXXXX</li>
                                    <li>XXXXXXXX</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default PokemonId;