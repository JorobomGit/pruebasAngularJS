angular.module("moviedb").service("MovieService", ["$q", "$timeout", function($q, $timeout) {
    this.getMovies = function() {

    	var movies = [];
        // Creamos el objeto diferido
        var deferred = $q.defer();
        // Asincronia
        $timeout(function() {
            // Resolvemos la promesa
            if(Math.round(Math.random()*10)%2 == 0){
            	deferred.resolve(movies);
            } else {
            	deferred.reject({error: "Forbidden"});
            }
            // Rechazamos la promesa
        }, 500);


        // Devolvemos la promesa del objeto diferido
        return deferred.promise;
    }
}]);