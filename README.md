# react-share-exemple
Exemple de code pour le partage du contenu de son blog via les medias sociaux
<img src="https://media.giphy.com/media/atZII8NmbPGw0/giphy.gif" width="100%"/>

## Comment ça fonctionne ?

Le composant Socials qui prend en tant que enfant les composants ayants pour nom celui du résau social dont nous souhaitons effectuer le partage.

Les composants enfants héritent par défault des propriétés du composant parent.

```javascript
import React from 'react';
import {Linkedin, Pinterest} from '[YOUR PATH'];
import Socials from '[YOUR PATH]';

const MyPost = () => {

// do stuff ...

  return(
  
    // your content post...
    
    <h2>partager</h2>
    
    <Socials>
      <Linkedin />
      <Pinterest />
      // ... others social media
  </ Socials>
  )
};

export default MyPost;
```

## Modifier l'apparence

Par défault les éléments : 
* positionnés horizontalement
* couleur du media social
* forme carrée

Pour modifier l'apparence il suffit d'ajouter la ou les propriétés à modifier afin que celle(s)-ci s'applique(nt) à l'ensemble des composants enfants.

```javascript
import React from 'react';
import {Linkedin, Pinterest} from '[YOUR PATH'];
import Socials from '[YOUR PATH]';

const MyPost = () => {

// do stuff ...

  return(
  
    // your content post...
    
    <h2>partager</h2>
    
    <Socials 
      position="V" // vertical alignment
      color="gray" // color icons
      styling="circle" // shape icons 
    >
      <Linkedin />
      <Pinterest />
      // ... others social media
  </ Socials>
  )
};

export default MyPost;
```
