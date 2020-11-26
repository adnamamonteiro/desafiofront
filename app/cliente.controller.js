(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .controller('ClienteController', clienteController);

    clienteController.$inject = ['helperFactory', 'clienteService', 'autoLocadoraService'];

    function clienteController(helper, clienteService, locadoraService) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */
  
        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        vm.iniciar = iniciar;

        function iniciar() {
            vm.listarClientes();
            vm.contratoAtivo();
        }

        /* ***************    FUNÇÕES ADD 'VM' PARA TESTES     **************** */
        vm.listarClientes = listarClientes;
        vm.contratoAtivo = contratoAtivo;
        vm.historicoCliente = historicoCliente;
        vm.desativarContrato = desativarContrato;


        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
        
        function listarClientes() {
            return clienteService.listar()
                .then(function (_listaClientes) {
                    vm.listaClientes = _listaClientes;
                });
        }

        function contratoAtivo(){
            return locadoraService.contratosAtivos()
            .then(function (_resp) {
                vm.listaContratosAtivos = _resp;
            });
        }

        function historicoCliente(_id,_nome){
            helper.setRootScope('nomeCliente', _nome);
            return clienteService.historico(_id)
            .then(function (_resp){
                vm.go('/historico');
                helper.setRootScope('historicoCliente', _resp);      
            });
        }

        function desativarContrato(_idContrato){
            return locadoraService.desativar(_idContrato)
            .then(function (_resp){
                if (_resp.error) {
                    helper.addAlerta();
                } else {
                    helper.addAlerta("O contrato foi desativado", 'success');
                    vm.iniciar();
                }
                      
            });
        }

    }

})();