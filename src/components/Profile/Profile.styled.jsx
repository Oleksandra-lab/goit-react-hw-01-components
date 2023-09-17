import styled from "@emotion/styled";

export const ProfileWrap = styled.div`
width: 400px;
margin: 0 auto;
padding: 50px:
background-color: darkgrey;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)
`;

export const Description = styled.div`
width: 300px;
height: 250px;
margin: o auto;
padding: 40px;
background-color: #fffffff;
`;

export const Avatar = styled.img`
display: block;
margin: 0 auto;
width: 100px;
border-radius: 50%;
border: 4px solid blue;
`;

export const UserName = styled.p`
text-align: center;
font-weight: 700;
font-size: 22px;
margin-bottom: 20px;
`;

export const Tag = styled.p`
text-align: center;
color: darkgrey;
margin-bottom: 10px;
`;

export const Location = styled.p`
text-align: center;
color: darkgrey;
`;

export const Statistics = styled.ul`
width: 334px;
heigh: 120px;
margin: 0 auto;
display: flex;
justify-content: space-between;

`;

export const ListItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex: 1;
text-align: center;
`;

export const Label = styled.span`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10px;
`;

export const Quantity = styled.span`
display: flex;
align-items: center;
justify-content: center;
font-weight: 500;
font-size: 18px;
margin-bottom: 10px;
`;