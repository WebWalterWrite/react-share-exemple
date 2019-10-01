import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socials from './socialsUrl';
import { href } from '../../utils/fn/browser';
import { SocialContainer } from './socials.styled';
import { linkedinIcon, facebookIcon, pinterestIcon } from '../../utils/style/icons';
const { facebook, linkedin, pinterest } = socials;

/**
 * @description - Composant stylé Linkedin
 * @param {string} styling - style de forme de l'icon
 * @param {string} color - couleur de fond de l'icon
 * @param {Object} props - contient les options passées individuellement
 * @param {string} [url=href] - contient l'url de partage || par défaut href
 */
export const LinkedinShare = ({ styling, color: c, props, url = href, text }) => {

  const { color: cc } = props
  return (
    <SocialContainer color={cc ? cc : c} styling={styling} social='linkedin'>
      <a target="_blank" rel="noopener noreferrer" href={linkedin.url + url}>
        <div>
          <FontAwesomeIcon icon={linkedinIcon} size='lg' />
        </div>
        {text && linkedin.content}
      </a>
    </SocialContainer>
  );
};

/**
 * @description - Composant stylé Facebook
 * @param {string} styling - style de forme de l'icon
 * @param {string} color - couleur de fond de l'icon
 * @param {Object} props - contient les options passées individuellement
 * @param {string} [url=href] - contient l'url de partage || par défaut href
 */
export const FacebookShare = ({ styling, color: c, props, url = href, text }) => {
  const { color: cc } = props
  return (
    <SocialContainer color={cc ? cc : c} styling={styling} social='facebook' >
      <a target="_blank" rel="noopener noreferrer" href={facebook.url + url}>
        <div>
          <FontAwesomeIcon icon={facebookIcon} size='lg' />
        </div>
        {text && facebook.content}
      </a>
    </SocialContainer>
  );
};

/**
 * @description - Composant stylé Pinterest
 * @param {string} styling - style de forme de l'icon
 * @param {string} color - couleur de fond de l'icon
 * @param {Object} props - contient les options passées individuellement
 * @param {string} [url=href] - contient l'url de partage || par défaut href
 */
export const PinterestShare = ({ styling, color: c, props, url = href, text }) => {

  const { color: cc } = props;

  return (
    <SocialContainer color={cc ? cc : c} styling={styling} social='pinterest'>
      <a target="_blank" rel="noopener noreferrer" href={pinterest.url + url}
        data-pin-do="embedPin"
      >
        <div>
          <FontAwesomeIcon icon={pinterestIcon} size='lg' />
        </div>
        {text && pinterest.content}
      </a>
    </SocialContainer>
  );
};

/**
 *  Autres social component
 */