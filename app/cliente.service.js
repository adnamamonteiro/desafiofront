(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .service('clienteService', clienteService);

    clienteService.$inject = ['$http', 'constantes', 'helperFactory'];

    function clienteService($http, constantes, helper) {

        return {
            listar: listar,
            cadastrar: cadastrar,
            buscaCep: buscaCep,
            historico: historico,

        }

        // ======================================

        function listar() {
            return $http.get(constantes.URL+ '/cliente')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function cadastrar(data) {
            return $http.post(constantes.URL+ '/cliente/cadastrar', data)
                .then(function (response) {
                    return response.data;
                }, function(response){
                    return {error: true, msg:response.data};
                });
        }

        function buscaCep(_params) {
            return $http.get('https://viacep.com.br/ws/'+_params+'/json/')
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

        function historico(_params) {
            return $http.get(constantes.URL+ '/cliente/historico/'+_params)
                .then(function (response) {
                    return response.data;
                })
                .catch(helper.sendError);
        }

    }


})();
