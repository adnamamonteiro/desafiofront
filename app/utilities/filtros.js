(function () {
    "use strict";

    angular.module('autoLocadoraApp')
        .filter('capitalize', function () {
            return function (input) {
                return (angular.isString(input) && input.length > 0) ?
                    input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
            }
        })
        .filter('placaComHifen', function () {
            return function (input) {
                return (angular.isString(input) && input.length > 0) ?
                    input.substr(0, 3).toUpperCase() + '-' + input.substr(3) : input;
            }
        })
        .filter('cpfMask', function () {
            return function (input) {
                return (angular.isString(input) && input.length > 0) ?
                input.substr(0, 3) + '.' + input.substr(3,3) + '.' + input.substr(6,3) +
                 '-' + input.substr(9) : input;
            }
        })
        .filter('telMask', function () {
            return function (input) {
                if (angular.isString(input) && input.length > 0) {
                    return (input.length == 11) ? 
                    '(' + input.substr(0, 2) + ')' + input.substr(2,5) + '-' + input.substr(7) :
                    '(' + input.substr(0, 2) + ')' + input.substr(2,4) + '-' + input.substr(6);
                }else{
                    return input;
                }
            }
        });

})();