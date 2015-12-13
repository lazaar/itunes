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
                if(navigator.onLine){
                    var url = itunesConstantes.url + query;
                    $http.get(encodeURI(url))
                        .success(function (datas) {
                            defered.resolve(datas);
                        })
                        .error(function (datas, status, headers, config) {
                            $log.debug('Erreur lors de la récupération des resultats :', datas, status, headers, config);
                            defered.reject(itunesConstantes.messageError.wsError);
                        });
                }else {
                    defered.reject(itunesConstantes.messageError.noConnection);
                }
                return defered.promise;
            }

            return {
                searchMusic : searchMusic
            };
        });
}());