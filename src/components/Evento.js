import Button from "./evento/Button"

function Evento() {

    function meuEvento () {
        console.log(`Ativando primeiro evento`)
    }

    function segundoEvento() {
        console.log('Ativando segundo Evento')
    }
    return (
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text='Primeiro evento'></Button>
            <Button event={segundoEvento} text='Segundo evento'></Button>
           
        </div>
    ) 
}

export default Evento