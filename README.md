# react-share-exemple
Exemple de code pour le partage du contenu de son blog via les medias sociaux
<img src="https://media.giphy.com/media/atZII8NmbPGw0/giphy.gif" width="100%"/>

## Comment ça fonctionne ?

Le composant Socials qui prend en tant que enfant les composants ayants pour nom celui du résau social dont nous souhaitons effectuer le partage.

Les composants enfants héritent par défault des propriétés du composant parent.

```javascript
import React from 'react';
import {Facebook, Linkedin, Pinterest} from '[YOUR PATH'];
import Socials from '[YOUR PATH]';

const MyPost = () => {

// do stuff ...

  return(
  
    // your content post...
    
    <h2>partager</h2>
    
    <Socials>
      <Linkedin />
      <Facebook />
      <Pinterest />
      // ... others social media
  </ Socials>
  );
}

export default MyPost;
```

### Exemple de rendu
![exemple](https://res.cloudinary.com/dajmcbds4/image/upload/v1570008492/github/react-share-socials-exemple-01092019.png)
[🧐 voir le code](../master/src/components/fakers/FakePost.js)

## Modifier l'apparence

Par défault les éléments : 
* positionnés horizontalement
* couleur du media social
* forme carrée

Pour modifier l'apparence il suffit d'ajouter la ou les propriétés à modifier afin que celle(s)-ci s'applique(nt) à l'ensemble des composants enfants.

```javascript
import React from 'react';
import {Facebook, Linkedin, Pinterest} from '[YOUR PATH'];
import Socials from '[YOUR PATH]';

const MyPost = () => {

// do stuff ...

  return(
  
    // your content post...
    
    <h2>partager</h2>
    
    <Socials 
      color="gray" // color icons
      styling="circle" // shape icons 
    >
      <Linkedin />
      <Facebook />
      <Pinterest />
      // ... others social media
  </ Socials>
  )
};

export default MyPost;
```

### Exemple de rendu
![exemple](https://res.cloudinary.com/dajmcbds4/image/upload/v1570020857/github/react-share-socials-style-02102019.png)

## Modifier l'url de partage

Par default l'url actuelle est celle utilisée pour effectuer le partage sur l'un des medias sociaux car en général le bouton de partage est situé sur dans le post lui même. Cependant il est possible de transmettre une url différente une props url au(x) composant(s).

```javascript

// exemple de données provenants de votre base de données ou API
data = {
  title: "Tartelettes aux douceurs d'🍊ranges...",
  author: 'Sammy',    
  createdAt: '30/09/2019',
  category: 'recettes',
  image: '/image/upload/v1570020857'
  url: 'https://www.monjolisite/articles/recettes/tartelettes-aux-douceurs-d-oranges',
  preview: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque similique veniam ea dicta illo commodi et nisi pariatur incidunt reiciendis laudantium, velit obcaecati quia mollitia aut dolorum quo magni sint...'
};

// Post.js
import React, { useState, useEffect } from 'react';
import { Facebook, Linkedin, Pinterest } from '../social-share/SocialShare';
import Socials from '../social-share/SocialContainer';

const Post = ({idPost}) => {
 
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    // get data post from API or DB
    const { data } = await func(idPost);
    return setPost(your data);
    };
  fetchData();
  }, [idPost]);

return (
<section>
  <img src={post.image} alt="post.title" />
  <div>
    <h1>{post.title}</h1>
  <div>
    <p>{post.category}</p>
    <p><span role="img" aria-label="pen">✍</span> avec <span role="img" aria-label="heart">❤️</span>par {post.author} le  {post.createdAt}</p>
    <p>{post.preview}</p>
    <div>lire la suite</div>			
    <h2>Partager</h2>
  
    <Socials styling="circle" color="#606060">
      <Linkedin url={post.url} />
      <Facebook url={post.url} />
      <Pinterest url={post.url} />
    </Socials> 
  
  </div>
  </div>
</section>
);
}
```
## API COMPONENTS

### Socials

props | type | value | default | description
--- | --- | --- | --- | ---
position | *string* | H, V | H | Les icons sont alignés verticalement ou horizontalement
styling | *string* | circle, square | square | La forme des icons | En forme de cercle ou carré
color | *string* | - | origin color |  La couleur de fond des icons. Par défault celle d'origine

### Linkedin
props | type | value | default | description
--- | --- | --- | --- | ---
styling | *string* | circle, square | square | La forme des icons | En forme de cercle ou carré
color | *string* | - | ![#0073B1](https://placehold.it/15/0073B1/000000?text=+) `#0073B1` |  La couleur de fond des icons. Par défault celle d'origine

### Facebook
props | type | value | default | description
--- | --- | --- | --- | ---
styling | *string* | circle, square | square | La forme des icons | En forme de cercle ou carré
color | *string* | - | ![#4267B2](https://placehold.it/15/4267B2/000000?text=+) `#4267B2` |  La couleur de fond des icons. Par défault celle d'origine


### Pinterest
props | type | value | default | description
--- | --- | --- | --- | ---
styling | *string* | circle, square | square | La forme des icons | En forme de cercle ou carré
color | *string* | - | ![#E60122](https://placehold.it/15/E60122/000000?text=+) `#E60122` |  La couleur de fond des icons. Par défault celle d'origine
