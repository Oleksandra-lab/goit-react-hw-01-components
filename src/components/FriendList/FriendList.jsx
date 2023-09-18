import PropTypes from 'prop-types'
import { List, FriendsItem, StatusInLine, Avatar, Name } from './FriendList.styled'

const FriendsList = ( { friends }) => (
    <List>
        {friends.map(({id, avatar, name, isOnLine}) =>
        (<FriendsItem 
          key = {id}>
        <StatusInLine style={{ backgroundColor: isOnLine ? "green" : "red" }}>{isOnLine}</StatusInLine>
        <Avatar src={avatar} alt={name} width="48" />
        <Name>{name}</Name>
      </FriendsItem>))}
  
</List>
)

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnLine: PropTypes.bool.isRequired

    })
  ).isRequired
}
export default FriendsList