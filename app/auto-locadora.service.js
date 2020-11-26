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
            return $http.get(constantes.URL + '/carro')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function alugar(_params, data) {
            return $http.post(constantes.URL + '/contrato/'+_params, data)
                .then(function (response) {
                    return response.data;
                }, function(response){
                    return {error: true, msg:response.data};
                });
        }

        function contratosAtivos(){
            return $http.get(constantes.URL + '/contrato')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function desativar(_params) {
            return $http.put(constantes.URL + '/contrato/'+_params)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

    }


})();