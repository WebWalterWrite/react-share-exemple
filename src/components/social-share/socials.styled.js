import styled, { css } from 'styled-components/macro';
import colors from '../../utils/style/colors';
const { facebook, linkedin, pinterest, infos, wh } = colors;

export const Social = styled.div`
margin: 0 auto;
text-align:center;
font-size: 18px;
${props  => positionSocialsElems(props.position)};
> div{
  margin:10px;
  div{
  border-radius: ${props => props.circle && 50+'%'} !important;
  background-color: ${props => props.color ? props.color : defaultSocialColor(props.social)}
  };
}
`;


export const SocialContainer = styled.div`
display: inline-block;
a{
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${infos};
  svg{
    color:${wh};
  }

div{
  padding: 10px;
  width:20px;
  height:20px;
  border-radius: ${props => props.styling === "circle" && 50+'%'};
  background:${props => props.color ? props.color : defaultSocialColor(props.social)};
  margin-right: 5px;
}
}
`;

const defaultSocialColor = socialName => (
  socialName === 'facebook'
    ? facebook
    : socialName === 'linkedin'
      ? linkedin
      : socialName === 'pinterest'
        ? pinterest
        : socialName === 'twitter'
        && ''
);

const positionSocialsElems = props => {

  const h = css`
  display:'block';
  `
  const v = css`
  display: flex;
  flex-direction: column;
  `;
  return props === 'H' ?  h : props === "V" && v;
}