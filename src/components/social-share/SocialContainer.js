import React from 'react';
import PropTypes from 'prop-types';
import { Social } from './socials.styled';

/**
 * @description - Contient les icons 
 * @param {Array} children - contient le(s) componsant(s) enfant(s)
 * @param { String } [position] - position des éléments - V ou H
 * @param { Object} [styling=square] - forme de l'élément  - circle
 * 
 */
export const Socials = ({ children, position, styling, color }) => {
  
  return (
    <Social position={position} >
      {children.map((child, k) => {
        const {props} = child;
        return React.cloneElement(child, { key: k, props, styling, color })
      }
      )}
    </Social>
  )
};

Socials.propTypes = {
  children: PropTypes.array,
  position: PropTypes.oneOf(['H', 'V']),
  styling: PropTypes.oneOf(['circle']),
  color: PropTypes.string
}
export default Socials;
