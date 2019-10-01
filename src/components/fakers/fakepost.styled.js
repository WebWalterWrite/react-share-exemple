import styled from 'styled-components/macro';
import colors from '../../utils/style/colors';
const { infos, wh } = colors;

export const Post = styled.section`
position: relative;
width:40%;
font-family: 'Thasadith', sans-serif;
img{
  max-width:1000px;
  border: solid 2px ${infos};
}
`;

export const Preview = styled.div`
background: #FCE772;
position: absolute;
border-right: 2px solid ${infos};
border-top:2px solid ${infos};
border-bottom: 2px solid ${infos};
display: flex;
flex-direction: column;
width:60%;
height: 600px;
left:40%;
top:15%;
bottom:20%;
`;

export const Title = styled.div`
background: ${wh};
color: ${infos};
font-size:42px;
font-weight: bold;
text-align: center;
padding: 1em 1em .5em 1em;
`;


export const Category = styled.div`
position: absolute;
left:-10%;
top:-3%;
font-weight: bold;
text-align:center;
text-transform: uppercase;
letter-spacing: 3px;
width: 30%;
background: #FFF58B;
color: #282C34;
padding:5px 15px 5px 15px;
font-size:22px;
`;

export const Infos = styled.div`
color: ${infos};
p{
  font-weight: normal;
  margin:20px;
  font-size: 24px;
}
p:nth-child(2n){
    text-align: center;
}

& ._read-btn{
  padding: .5em;
  background: ${wh};
  width: 35%;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  letter-spacing:2px;
}
`;

