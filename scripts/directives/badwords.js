angular.module("moviedb").directive('badwords', function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, elem, attrs, cntrl) {
            var badwords = ["fuck", "shit"];
            console.log("badwords link", arguments);
            console.log("0000:", $scope.movieForm.overview.modelValue);
            // console.log($scope);
            // console.log(elem);
            // console.log(attrs);
            // console.log(cntrl);
            cntrl.$validators.badwords = function(modelValue, viewValue) {
                var rawWords = modelValue || "";
                var words = rawWords.split(" ");
                for (var i in badwords) {
                    if (words.indexOf(badwords[i]) >= 0) {
                    	cntrl.badword = badwords[i];
                        return false;
                    }
                }
                cntrl.badword = "";
                return true;
            }

        }
    };
});
