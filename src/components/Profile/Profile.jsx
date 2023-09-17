import propTypes from 'prop-types'
import { ProfileWrap,
        Description,
        Avatar,
        UserName,
        Tag,
        Location,
        Statistics,
        ListItem,
        Label,
        Quantity
 } from './Profile.styled'
 
const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
            <ProfileWrap >
        <Description>
    <Avatar
      src={avatar}
      alt={username}
      Avatar/>
    <UserName>{username}</UserName>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Description>

  <Statistics>
    <ListItem>
      <Label>Followers</Label>
      <Quantity>{stats.followers}</Quantity>
    </ListItem>
    <ListItem>
      <Label>Views</Label>
      <Quantity>{stats.views}</Quantity>
    </ListItem>
    <ListItem>
      <Label>Likes</Label>
      <Quantity>{stats.likes}</Quantity>
    </ListItem>
  </Statistics>
</ProfileWrap>
    )
}

Profile.propTypes = {
  username: propTypes.string.isRequired , 
  tag: propTypes.string.isRequired, 
  location: propTypes.string.isRequired, 
  avatar: propTypes.string.isRequired, 
  stats: propTypes.shape ({
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired
  })

}


export default Profile