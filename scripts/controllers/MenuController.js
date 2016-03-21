// En el modulo moviedb, defino el controlador
angular.module('moviedb').controller("MenuController", ["$scope", function($scope) { //Inyectamos dependencia de scope
    //Scope init
    $scope.model = {
        selectedItem: "movies"
    };

    //Scope methods

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


    //Scope watchers
    $scope.$watch("model.selectedItem", function(newValue, oldValue){
    	//Emitimos elemento a OnMenuChange con el nuevo valor
    	$scope.$emit("OnMenuChange", newValue);
    })
}]);
