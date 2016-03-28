angular.module("moviedb").filter("ago", [function() {
    return function(text) {
    	console.log(text);
        return moment(text).fromNow();
    }
}]);