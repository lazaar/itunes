# Search Itunes App

C'est une Single Page Application pour la recherche sur iTunes et l'ajout des pistes sur un panier. 

## Demo : 
http://lazaar.github.io/itunes/#/

## Développement :
### Frameworks utilisés:
L’application est développée avec le Framework AngularJS (1.4), avec l’architecture MVC. On a utilisé le générateur de Yoeman : gulp-angular (https://github.com/swiip/generator-gulp-angular) comme starter du projet. 

- On a utilisé comme gestionnaire de tâche Gulp, et Sass/compass comme préprocesseur CSS.
- Node et bower pour la gestion des dépendances
- Le panier a été géré par le module ngCart (https://github.com/snapjay/ngCart)
- La validation du formulaire de recharche a été faite par le module Angular-messages
- Le module Angular-ui-route gére le routage de l'app
- L'affichage des pistes en grid est réalisé par le plugin Masonry
- Bootstrap CSS est utilisé dans la page


### Prérequis
Les éléments suivants doivent être présent sur la machine:

1. Node.js et npm
2. Ruby

### Installation

#####  gulp :

```sh
$ npm install -g gulp
```

##### Saas et compass :

Vérifier que ruby est bien installé 

```sh
$ ruby -v
```
Pour l'installation de Saas et de Compass, suivre la documentation suivante : [Documentation](http://compass-style.org/install/)


##### Cloner le repository git
Se positionner dans le dossier ou vous souhaitez cloner le repository
Accès ssh :

```sh
$  git clone git@github.com:lazaar/itunes.git
```
Accès https :

```sh
$  git clone https://github.com/lazaar/itunes.git
```

Aller dans le dossier cloner :
```sh
$  cd itunes
```

##### Installer les dépendances node.js et bower.js

Dépendances node.js
```sh
$  npm install && bower install
```

##### Développer dans le navigateur web

Pour lancer le serveur web avec livereload

```sh
$  gulp serve
```

Pour lancer le serveur web avec livereload avec les fichiers optimisés
```sh
$  gulp serve:dist
```

##### Générer les fichies optimisés dans le dossier dist


```sh
$  gulp
```
