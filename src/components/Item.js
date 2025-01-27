import PropsTypes from 'prop-types'


function Item({marca,ano_lançamento}) {
    return(
        <>
        <li>{marca} - {ano_lançamento}
        </li>
        <p>Teste</p>
        </>
    )
}
Item.propTypes = {
    marca: PropsTypes.string.isRequired,
    ano_lançamento: PropsTypes.number
};
Item.defaultProps = {
    marca : 'Faltou a marca',
    ano_lançamento : 0
};

export default Item