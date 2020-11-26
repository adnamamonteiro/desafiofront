(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .controller('CadastrarController', cadastrarController);

    cadastrarController.$inject = ['helperFactory', 'clienteService'];

    function cadastrarController(helper, service) {
        var vm = this;
        /* ***************    INIT VARIÁVEIS    *********************************** */

        /* ***************    FUNÇÕES EXECUTADAS NA VIEW (HMTL)    **************** */
        vm.go = helper.go;
        vm.iniciar = iniciar;

        function iniciar() {
            vm.go();
        }

        /* ***************    FUNÇÕES INSTERNAS    ******************************** */
        
        vm.buscaCep = buscaCep;
        vm.cadastrar = cadastrar;

        function buscaCep(){
            return service.buscaCep(vm.cep)
            .then(function (_resp) {
                if(_resp.erro){
                    vm.validCep = false;
                }else{
                    vm.validCep = true;
                    vm.logradouro = _resp.logradouro;
                    vm.bairro = _resp.bairro;
                    vm.cidade = _resp.localidade;
                    vm.uf = _resp.uf;
                }
            });
        }

        function cadastrar(){
            var cliente = {
                bairro: vm.bairro,
                cep: vm.cep,
                cidade: vm.cidade,
                complemento: vm.complemento,
                contato: vm.contato,
                cpf: vm.cpf,
                email: vm.email,
                logradouro: vm.logradouro,
                nome: vm.nome,
                uf: vm.uf
            }
            return service.cadastrar(cliente)
                .then(tratarRes);
            
            function tratarRes(_resp) {
                if (_resp.error) {
                    helper.addAlerta(_resp.msg, 'info');
                } else {
                    vm.go('/catalogo');
                    helper.addAlerta("Cadastrado efetuado com sucesso", 'success');
                    //helper.rootScopeApply();
                }
            }
        }

    }

})();