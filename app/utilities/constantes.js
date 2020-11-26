(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .constant('constantes', {
            URL_BASE: 'http://localhost:8080/api',
            URL: 'https://autolocadora-api.herokuapp.com/api',
            MSGS: {
                ERRO_GERAL: 'Ocorreu algum problema. Tente novamente mais tarde.',
            },
        });

})();