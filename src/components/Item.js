import PropTypes from 'prop-types';

function Item({mark , releaseYear}) {
    return (
        <>
            <li>{mark} - {releaseYear}</li>
        </>
    );
}

Item.propTypes = {
    mark: PropTypes.string.isRequired,
    releaseYear: PropTypes.number
}

Item.defaultProps = {
    mark: "Marca desconhecida",
    releaseYear: 0
}

export default Item;