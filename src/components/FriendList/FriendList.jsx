import PropTypes from 'prop-types'
import { } from './FriendList.styled'

const FriendsList = ( { friends }) => (
    <ul className="friend-list">
        {friends.map(({avatar, name, isOnLine}) =>
        (<li className="item">
        <span className="status">{isOnLine}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>))}
  
</ul>
)

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnLine: PropTypes.bool.isRequired

    })
  ).isRequired
}
export default FriendsList