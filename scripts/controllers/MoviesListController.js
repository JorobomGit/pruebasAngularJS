angular.module("moviedb").controller("MoviesListController",

    ["$scope", "$log", "APIClient", "URL", "paths", function($scope, $log, APIClient, URL, paths) {
        // Scope init
        //$scope.uiState = 'blank';
        $scope.model = [];
        $scope.uiState = 'loading';

        $scope.getMovieDetailURL = function(movie){
            return URL.resolve(paths.movieDetail, { id: movie.id});
        }

        // Controller start
        APIClient.getMovies().then(
            //promesa resuelta
            function(data) {
                $log.log("SUCCESS", data);
                $scope.model = data;
                if ($scope.model.length == 0) {
                    $scope.uiState = 'blank';
                } else {
                    $scope.uiState = 'ideal';
                }

            },
            // promesa rechazada
            function(data) {
                $log.error("ERROR", data);
                $scope.uiState = 'error';
            }
        );
    }]
);