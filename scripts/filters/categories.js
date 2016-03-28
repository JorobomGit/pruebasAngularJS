angular.module("moviedb").filter("categories", [function() {
    return function(array) {
        if (array != undefined)
            return array.join(",");
    }
}]);
