angular.module("moviedb").controller("AppController",

    ["$scope", function($scope) {

    	//Model init
        $scope.model = {
            title: ""
        }

        //Scope event listeners
        $scope.$on('OnMenuChange', function(evt, data){
        	console.log("OnMenuChange", arguments);
        	console.log(arguments[1]);
        	$scope.model.title = data;
        });
    }]
);
