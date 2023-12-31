import styled from "@emotion/styled"

export const List = styled.ul `
margin: 20px;
`;

export const FriendsItem = styled.li`
display: flex;
align-items: center;
width: 350px;
margin-left: auto;
margin-right: auto;
margin-bottom: 20px;
background-color: lightskyblue;

padding: 20px 30px;
border-radius: 10px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2)
`;

export const StatusInLine = styled.span`
width: 13px;
height: 13px;
border-radius: 50%;
margin-right: 20px;
`;

export const Avatar = styled.img`
margin-right: 10px;
`;

export const Name = styled.p`
margin-right: 15px;
font-weight: 500;
font-size: 24px;
color: darkviolet;
`;
