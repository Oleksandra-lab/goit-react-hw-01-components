import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
margin-top: 30px;
margin-left: auto;
margin-right: auto;
width: 350px;
padding: 30px;
background-color: lightpink;
border-radius: 10px; 
`;

export const Title = styled.h2`
margin-left: auto;
margin-right: auto;
padding: 30px;
text-align: center;
text-transform: uppercase;
background-color: white;
font-size: 20px;
font-weight: 500;
`;

export const StatisticsList = styled.ul`
margin-left: auto;
margin-right: auto;
display: flex;
justify-content: center;
padding: 0;
`;

export const StatItem = styled.li `
padding: 10px 5px;
width: 60px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const Label = styled.span`
font-weight: 500;
font-size: 16px;
`; 

export const Persentage = styled.span`
font-weight: 700;
font-size: 18px;
margin-top: 5px;
`;