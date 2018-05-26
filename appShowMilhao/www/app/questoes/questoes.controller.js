(function () {
    function QuestoesController(QuestionariosService) {
        // declaração de variaveis
        var vm = this;
        vm.questoes = [];

        // ao inciar
        recuperarQuestoes();

        // resgistradas no escopo
        // funções
        function recuperarQuestoes() {
            QuestionariosService.recuperarQuestoes().then(function() {
                vm.questoes = QuestionariosService.questoes;
            });
        }

    }

    angular.module('questionarioApp')
        .controller('QuestoesController', QuestoesController);
})();