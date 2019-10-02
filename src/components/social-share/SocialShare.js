import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socials from "./socialsUrl";
import { href } from "../../utils/fn/browser";
import { SocialContainer } from "./socials.styled";
import {
	linkedinIcon,
	facebookIcon,
	pinterestIcon
} from "../../utils/style/icons";
const { facebook, linkedin, pinterest } = socials;

/**
 * @description - Composant stylé
 * @param {string} styling - style de forme de l'icon
 * @param {string} color - couleur de fond de l'icon
 * @param {Object} props - contient les options passées individuellement
 * @param {string} [url=href] - contient l'url de partage || par défaut href
 */
const SetSocial = (name, { styling, color: c, props, url = href, text }) => {

	const getSocial = () =>
		name === "linkedin"
			? linkedin
			: name === "pinterest"
			? pinterest
      : name === "facebook"
      && facebook;
      
	const getIcon = () =>
		name === "linkedin"
			? linkedinIcon
			: name === "pinterest"
			? pinterestIcon
      : name === "facebook"
      && facebookIcon;

	const { color: cc } = props;
	return (
		<SocialContainer color={cc ? cc : c} styling={styling} social={name}>
			<a target="_blank" rel="noopener noreferrer" href={getSocial().url + url}>
				<div>
					<FontAwesomeIcon icon={getIcon()} size="lg" />
				</div>
				{text && getSocial().content}
			</a>
		</SocialContainer>
	);
};

export const Linkedin = props => SetSocial("linkedin", props);

export const Facebook = props => SetSocial("facebook", props); 

export const Pinterest = props => SetSocial("pinterest", props);

/**
 *  Autres social component
 */

 Linkedin.propTypes = {
   props: PropTypes.shape({
   styling: PropTypes.func,
   color: PropTypes.string,
   props : PropTypes.objectOf(PropTypes.string.isRequired),
   url: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
   })
 };
