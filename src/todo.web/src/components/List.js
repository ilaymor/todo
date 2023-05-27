import PropTypes from 'prop-types'
import ListItem from './ListItem';

const List = ( { items , notFound } ) => {
     return (
      <>
        {items.length > 0 ? (
          <ul>
            {items.map(item => <ListItem text = {item.text} />)};
          </ul>
        ) : (
          <p> { notFound } </p>
        )}
      </>
      );
}



List.propTypes = {
  items: PropTypes.array,
  notFound: PropTypes.string,
}

export default List