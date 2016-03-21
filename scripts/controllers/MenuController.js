// En el modulo moviedb, defino el controlador
angular.module('moviedb').controller("MenuController", ["$scope", function($scope) { //Inyectamos dependencia de scope
    //Scope init
    $scope.model = {
        selectedItem: "movies"
    };

    $scope.setSelectedItem = function(item) {
        $scope.model.selectedItem = item;
    };

    $scope.getClassForItem = function(item) {
        if ($scope.model.selectedItem == item){
        	return "active";
        }else{
        	return "";
        }
    };
}]);
