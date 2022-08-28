import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAddButton }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={showAddButton ? 'brown' : 'green'}
        text={showAddButton ? 'Close' : 'Add'}
        onClick={onAdd} />
    </header>

  )
}
Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header