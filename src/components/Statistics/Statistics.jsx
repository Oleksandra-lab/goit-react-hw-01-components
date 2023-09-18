 import PropTypes from 'prop-types'
 import { getRandomHexColor } from './getRandomHexColor'
 import { StatisticsSection, Title, StatisticsList, StatItem, Label, Persentage } from './Statistics.styled'

 const Statistics = ({stats}) =>{
    return (
        <StatisticsSection>
  <Title>Upload stats</Title>

  <StatisticsList> {stats.map(stat =>
     (<StatItem
     key = {stat.id}
     style = {{backgroundColor: getRandomHexColor()}}
     >
      <Label>{stat.label}</Label>
      <Persentage>{stat.percentage}%</Persentage>
    </StatItem>))}
  </StatisticsList>
</StatisticsSection>
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