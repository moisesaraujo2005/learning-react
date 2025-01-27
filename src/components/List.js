import Item from "./Item";


function List() {
    return(
       <>
            <h1>Minha lista</h1>
            <ul>
             <Item marca='Ferrari' ano_lançamento={1985}></Item>
             <Item marca="Fiat" ano_lançamento={1964}></Item>
             <Item marca="Renault"></Item>
             <Item marca="Chevrolet"></Item>
            </ul></>
    ) 
}

export default List;