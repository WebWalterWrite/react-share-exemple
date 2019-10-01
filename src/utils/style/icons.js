import { library, icon } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faFacebookSquare,
  faFacebookMessenger,
  faLinkedin,
  faPinterest,
  faPinterestSquare,
  faTwitter,
  faTwitterSquare,
  faWhatsapp,
  faWhatsappSquare,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faFacebookF,
  faFacebookSquare,
  faFacebookMessenger,
  faLinkedin,
  faPinterest,
  faPinterestSquare,
  faTwitter,
  faTwitterSquare,
  faWhatsapp,
  faWhatsappSquare,
);

const facebookIcon = icon({ prefix: 'fab', iconName: 'facebook-f' });
const facebookSquare = icon({ prefix: 'fab', iconName: 'facebook-square' });
const linkedinIcon = icon({ prefix: 'fab', iconName: 'linkedin' });
const pinterestIcon = icon({ prefix: 'fab', iconName: 'pinterest' });
const pinterestSquare = icon({ prefix: 'fab', iconName: 'pinterest-square' });
const twitter = icon({ prefix: 'fab', iconName: 'twitter' });
const twitterSquare = icon({ prefix: 'fab', iconName: 'twitter-square' });
const whatsapp = icon({ prefix: 'fab', iconName: 'whatsapp' });

export {
  facebookIcon, facebookSquare, linkedinIcon, pinterestIcon, pinterestSquare, twitter, twitterSquare, whatsapp
};
