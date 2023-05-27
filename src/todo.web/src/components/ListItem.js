import React from 'react'
import PropTypes from 'prop-types'

const ListItem = ({ text }) => {
  return (
    <li>
      { text }
    </li>
  )
}

ListItem.propTypes = {
  text: PropTypes.string,
}

export default ListItem