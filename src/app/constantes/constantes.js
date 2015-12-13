(function () {
    'use strict';
    angular.module('itunes').constant('itunesConstantes', {
        url:'https://itunes.apple.com/search?term=',
        messageError:{
			noConnection: 'Même iTunes ne fonctionne pas en mode non connecté, Vérifiez votre connexion internet puis réessayer',
			wsError		: 'Oups! Une erreur est survenue. Veuillez réessayer ultèrieurement. '
        }
    });
})();