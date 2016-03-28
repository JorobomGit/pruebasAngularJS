angular.module("moviedb").controller("SerieDetailController", ["$scope", "$routeParams", "$location", "APIClient", "paths",

    function($scope, $routeParams, $location, APIClient, paths) {
        $scope.model = {};
        $scope.uiState = 'loading';

        $scope.$emit("ChangeTitle", "Loading...");
        APIClient.getSerie($routeParams.id).then(
            // Pelicula encontrada
            function(serie) {
                $scope.model = serie;
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
