(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .service('autoLocadoraService', autoLocadoraService);

    autoLocadoraService.$inject = ['$http', 'constantes', 'helperFactory'];

    function autoLocadoraService($http, constantes, helper) {

        return {
            listar: listar,
            alugar: alugar,
            contratosAtivos: contratosAtivos,
            desativar: desativar,

        }

        // ======================================

        function listar() {
            return $http.get(constantes.URL_BASE + '/carro')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function alugar(_params, data) {
            return $http.post(constantes.URL_BASE + '/contrato/'+_params, data)
                .then(function (response) {
                    return response.data;
                }, function(response){
                    return {error: true, msg:response.data};
                });
        }

        function contratosAtivos(){
            return $http.get(constantes.URL_BASE + '/contrato')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function desativar(_params) {
            return $http.put(constantes.URL_BASE + '/contrato/'+_params)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

    }


})();