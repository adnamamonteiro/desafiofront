(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .controller('CatalogoController', catalogoController);

    catalogoController.$inject = ['helperFactory', 'autoLocadoraService'];

    function catalogoController(helper, service) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */

        vm.showLocatario = false;
        
        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        vm.iniciar = iniciar;
        vm.setCarro = setCarro;
        vm.limpar = helper.limpaForm;

        function iniciar() {
            return vm.listarCarros();
        }

        function setCarro(_param) {
            vm.carro = _param;
        } 

        /* ***************    FUNÇÕES ADD 'VM' PARA TESTES     **************** */
        vm.listarCarros = listarCarros;
        vm.alugar = alugar;
        vm.locatario = locatario;

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
        function listarCarros() {
            return service.listar()
                .then(function (_listaCarros) {
                    vm.listaCarros = _listaCarros;
                    //helper.rootScopeApply();
                });
        }

        function alugar(){
            var _params = vm.carro;
            var data = vm.confirmaCpf;
            return service.alugar(_params, data)
                .then(function (_resp) {
                    if(_resp.error){
                        helper.addAlerta(_resp.msg, 'info');
                    }
                    else{
                        helper.addAlerta("Contrato ativado", 'success');
                        vm.listarCarros();
                    }
                    vm.limpar("alugaForm");
                    $('#modal1').modal('hide');
                });
        }

        function locatario(placa){
            vm.id = placa;
            return service.contratosAtivos()
                .then(function (_contratosAtivos) { 
                    vm.nome =  _contratosAtivos.find(c => c.placa === placa).nomeCliente;
                });
        }

    }

})();