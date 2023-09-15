

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

export default FriendsList