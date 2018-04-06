(function(){
  angular
  .module('restaurantes')
  .controller('restaurantesController', function($scope, Restaurantes) {

    $scope.restaurantes = [];

    var carregarRestaurantes = function(){
      Restaurantes.listar().then(function(restaurantes){
        console.log(restaurantes)
        $scope.restaurantes = restaurantes;
      });
    }

    $scope.removerRestaurante = function(id) {
      console.log(id)
      Restaurantes.remover(id).then(carregarRestaurantes);
    }

    carregarRestaurantes();

  });
})();
