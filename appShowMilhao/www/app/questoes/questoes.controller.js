(function () {
    function QuestoesController($stateParams, QuestionariosService) {
        // declaração de variaveis
        var vm = this;
        var codigoQuestionario = $stateParams.codigo;
        vm.questionario = {};
        vm.questoes = [];
        vm.indice = 0;
        vm.questaoCorrente = {};

        // ao inciar
        recuperarQuestionarioDetalhe();        
        recuperarQuestoes();

        // resgistradas no escopo
        // funções
        function recuperarQuestionarioDetalhe() {
            QuestionariosService.recuperarDetalhe(codigoQuestionario)
                                .then(function() {
                                    vm.questionario = QuestionariosService.questionario;
                                });
        }

        function recuperarQuestoes() {
            QuestionariosService.recuperarQuestoes(codigoQuestionario)
                                .then(function() {
                                    vm.questoes = QuestionariosService.questoes;
                                    vm.questaoCorrente = vm.questoes[vm.indice];
                                });
        }


    }

    angular.module('questionarioApp')
        .controller('QuestoesController', QuestoesController);
})();