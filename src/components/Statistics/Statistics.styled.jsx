import styled from "@emotion/styled";

export const StatisticsSection = styled.section`
margin-top: 30px;
margin-left: auto;
margin-right: auto;
width: 350px;
padding: 30px;
background-color: lightpink;
border-radius: 10px; 
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)
`;

export const Title = styled.h2`
margin-left: auto;
margin-right: auto;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
padding: 30px;
text-align: center;
text-transform: uppercase;
background-color: beige;
font-size: 20px;
font-weight: 500;
`;

export const StatisticsList = styled.ul`
margin-left: auto;
margin-right: auto;
display: flex;
justify-content: center;
padding: 0;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
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