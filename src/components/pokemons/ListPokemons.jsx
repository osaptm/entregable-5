import { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
const ListPokemons = ({ObjPokemons}) => {
  const ItemsPage = 20;
  const [Page,setPage] = useState(1);


  const AllPokemons = () => {
        let startIndex = ((Page-1)*ItemsPage) 
        let endIndex =  (ItemsPage*Page)
        return(
            <div className='all-pokemons'>
            {ObjPokemons.pokemons.map((ele,index)=>{
                if(index>=startIndex && index<endIndex){
                    return (<PokemonCard key={ele.url} url={ele.url} />);
                }
            })}
            </div>
        );    
    }

  const Pagination = () => {         
        let total = Math.ceil(ObjPokemons.pokemons.length/ItemsPage) 
        let rango = total<5 ? total : 5;
        let initPage = Page>rango?Page:1;
        if(initPage===total && total!==1) initPage-=rango;
        let ButtonsJsx = []; 
        
        if(total===1) return;

        if(initPage!==1){
            ButtonsJsx.push(<button onClick={()=>{setPage(Page-5)}} key='0' className='btn-pagination' type='button'>...</button>);
        }
        for(let i=initPage;i<=initPage+rango;i++) {
            if(i>total) break
            let classButton = (Page===i)?'btn-pagination-active':'btn-pagination';
            ButtonsJsx.push(<button onClick={()=>{setPage(i)}} key={i} className={classButton} type='button'>{i}</button>);
        }  ButtonsJsx.push(<b key='btnfin'>({total} Pages)</b>);
        
        

        return (
             <div className='pagination'>
                 {ButtonsJsx}
             </div>
         );
     };

     useEffect(() => {
        setPage(1);
     }, [ObjPokemons]); 

     
    return (
        <> 
            <Pagination />
            <AllPokemons />
            <Pagination />
        </> 
    );
};

export default ListPokemons;