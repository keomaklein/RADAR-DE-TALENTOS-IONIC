(function () {
    function QuestionariosController(QuestionariosService) {
        // declaração de variaveis
        var vm = this;
        vm.questionarios = [];

        // ao inciar
        recuperarQuestionarios();

        // resgistradas no escopo
        // funções
        function recuperarQuestionarios() {
            QuestionariosService.recuperar().then(function() {
                vm.questionarios = QuestionariosService.questionarios;
            });
        }

    }

    angular.module('questionarioApp')
        .controller('QuestionariosController', QuestionariosController);
})();