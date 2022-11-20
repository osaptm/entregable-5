import { useState, useEffect } from "react";

const FilterTypePokemon = ({ValChangeFilter, changeFilter, getPokemonsByType}) => {
    const [SelectValue, setSelectValue] = useState(1);
    const [Types, setTypes] = useState({status:false,alltypes:[]});

    const getAllTypes = async () => {
        setTypes({status:false,...Types});
        const data = await fetch(`https://pokeapi.co/api/v2/type/`);
        const json = await data.json();
        setTypes({status:true,alltypes:json.results});
    }
    
    const SelectAlltypes = () => {
        return(
            <select className="form-select" 
            onChange={(e)=>{setSelectValue(e.target.value); 
            changeFilter('select'); 
            getPokemonsByType(e.target.value);}
            } 
            value={SelectValue} >
                <option key="Select Pokemon Tipe..." value="1">Select Pokemon Tipe...</option>
                {
                    Types.alltypes.map((type)=>{
                        return <option key={type.url} value={type.name}>{(type.name).toUpperCase()}</option>
                    })
                }
            </select>
        )
    }

    useEffect(() => {
        getAllTypes();       
    }, []);  

    useEffect(() => {
        if(ValChangeFilter ==='search') setSelectValue(1); 
    }, [ValChangeFilter]);
      
    return (
        <div className="col-xs-12 col-md-4 col-lg-5">
            <SelectAlltypes />
        </div>    
    );
};

export default FilterTypePokemon;