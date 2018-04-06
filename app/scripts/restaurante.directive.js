angular.module("restaurantes").directive("awRestaurante", function () {
  return {
    restrict: "A",
    scope: {
      restaurante: '=awRestaurante',
      fnFechar: '&'
    },
    templateUrl: "../templates/restaurante.template.html",
    link: function (scope, element, attr) {
      element.addClass('restaurante');

      if (!attr.fnFechar) {
        element.find('button').remove();
      }
    }
  };
})
