angular.module("restaurantes").factory("Restaurantes", function($q, $http){
	return {
		listar: function() {
			var promessa = $q.defer();

			$http.get("http://localhost:3000/api/v1/restaurants/").then(
				function(result){
					var restaurantes = [];

					angular.forEach(result.data.restaurants, function(restaurante, id){
						restaurante.id = id;
						restaurantes.push(restaurante);
					});
					promessa.resolve(restaurantes);
				}
			);

			return promessa.promise;
		},
		remover: function(id) {
			$http.delete("http://localhost:3000/api/v1/restaurants/" + id);
		}
	};
});
