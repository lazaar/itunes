(function(){
    'use strict';
    angular
        .module('itunes')
        .factory('searchService', function($http, $q, $log, itunesConstantes){


        // ############################################# //
        // ############### PUBLIC BUSINESS ############# //
        // ############################################# //

        /**
         * Récupération du résultats
         */
        function searchMusic(query){
                var defered = $q.defer();

                /********** On vérifie la connextion internet **********/
                if(navigator.onLine){
                    var url = itunesConstantes.url;
                    $http.jsonp(encodeURI(url), {
                            params: {
                                "callback": "JSON_CALLBACK",
                                "term": query
                            }
                        })
                        .success(function (datas) {
                            // Récupération de pistes
                            defered.resolve(datas);
                        })
                        .error(function (datas, status, headers, config) {
                            $log.debug('Erreur lors de la récupération des resultats :', datas, status, headers, config);
                            // Erreur WS
                            defered.reject(itunesConstantes.messageError.wsError);
                        });
                }else {
                    // Pas de connexion Internet
                    defered.reject(itunesConstantes.messageError.noConnection);
                }
                return defered.promise;
            }

            return {
                searchMusic : searchMusic
            };
        });
}());