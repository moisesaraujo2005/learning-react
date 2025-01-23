import Item from "./Item";


function List() {
    return(
       <>
            <h1>Minha lista</h1>
            <ul>
             <Item marca='Ferrari'></Item>
             <Item marca="Fiat"></Item>
             <Item marca="Renault"></Item>
            </ul></>
    ) 
}

export default List;