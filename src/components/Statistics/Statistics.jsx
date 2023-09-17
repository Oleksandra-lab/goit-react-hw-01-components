 import PropTypes from 'prop-types'
 import { getRandomHexColor } from './getRandomHexColor'
 import { } from './Statistics.styled'

 const Statistics = ({stats}) =>{
    return (
        <section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list"> {stats.map(stat =>
     (<li className="item"
     key = {stat.id}
     style = {{backgroundColor: getRandomHexColor()}}
     >
      <span className="stat.label">{stat.label}</span>
      <span className="stat.percentage">{stat.percentage}</span>
    </li>))}
  </ul>
</section>
    )
 }
 
 Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })

  ).isRequired,

 }
 export default Statistics