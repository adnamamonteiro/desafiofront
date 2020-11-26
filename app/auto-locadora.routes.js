(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .config(routes)
        .run(configDefaults);

    routes.$inject = ['$routeProvider'];
    configDefaults.$inject = ['$rootScope'];

    function routes($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home.tpl.html',
            })
            .when('/cadastrar', {
                templateUrl: 'cadastrar.tpl.html',
            })
            .when('/catalogo', {
                templateUrl: 'catalogo.tpl.html',
            })
            .when('/clientes', {
                templateUrl: 'clientes.tpl.html',
            })
            .when('/historico', {
                templateUrl: 'historico.tpl.html',
            })
            .otherwise({
                redirectTo: '/home'
            });
    }

    function configDefaults($rootScope) {
        $rootScope.listaMensagens = [];
    }

})();