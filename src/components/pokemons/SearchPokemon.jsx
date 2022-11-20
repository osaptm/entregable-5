import { useState, useEffect } from 'react'

const SearchPokemon = ({changeFilter, ObjPokemonsStatus,searchPokemon, InputSearchValue}) => {
    const [InputValue, setInputValue] = useState(InputSearchValue)
    const search = () =>{
      if(InputValue.length<2) {alert("Insert Search.."); return;}
      searchPokemon(InputValue.toLowerCase());
      changeFilter('search');
    }   
    
    useEffect(() => {
      setInputValue('');
    }, [InputSearchValue]);

    return (
      <div className="col-xs-12 col-md-6 col-lg-5 d-flex">
          <input type="text" 
          onChange={(e) =>{setInputValue(e.target.value);}} 
          value={InputValue}
          className="form-control" 
          placeholder="Search Here!" 
          aria-label="Search Here!" 
          aria-describedby="button-addon2" />
          {
            ObjPokemonsStatus &&
            <button className="btn btn-primary" type="button" id="button-addon2" onClick={()=>{search();}}>Search</button>
          }
          
      </div>
    );
};

export default SearchPokemon;