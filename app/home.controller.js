(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .controller('HomeController', homeController);

    homeController.$inject = ['helperFactory', 'autoLocadoraService'];

    function homeController(helper, service) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        vm.iniciar = iniciar;

        function iniciar() {
            vm.go();
        }
        

        /* ***************    FUNÇÕES ADD 'VM' PARA TESTES     **************** */
       

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
        

    }

})();