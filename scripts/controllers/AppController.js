angular.module("moviedb").controller("AppController",

    //Cada vez que queramos utilizar un servicio lo tenemos que inyectar tanto como parametro como
    //en la funcion
    ["$scope", "$location", function($scope, $location) {
        var controller = this;

        //Controller properties
        controller.titles = {
            "/movies/": "Movies List",
            "/series/": "Series List",
            "/people/": "People List"


        };

    	//Model init
        $scope.model = {
            title: ""
        }


        $scope.$on("$locationChangeSuccess", function(evt, currentRoute){
            console.log("$locationChangeSuccess", $location.path());
            $scope.model.title = controller.titles[$location.path()] || "404 Not Found";            

        });
    }]
);
