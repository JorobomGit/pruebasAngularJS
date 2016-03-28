angular.module("moviedb").controller("MovieDetailController", ["$scope", "$routeParams", "$location", "MovieService", "paths",

    function($scope, $routeParams, $location, MovieService, paths) {
        $scope.model = {};
        $scope.uiState = 'loading';

        $scope.$emit("ChangeTitle", "Loading...");
        MovieService.getMovie($routeParams.id).then(
            // Pelicula encontrada
            function(movie) {
                $scope.model = movie;
                $scope.uiState = 'ideal';
                $scope.$emit("ChangeTitle", $scope.model.title);
            },
            // Pelicula no encontrada
            function(error) {
                // TODO: improve error managment
                $location.url(paths.notFound);
            }
        );
    }
]);
