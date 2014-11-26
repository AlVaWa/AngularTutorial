/**
 * Created by AleksanderVatleWaage on 24.11.14.
 */

angular.module('phonecatFilters', []).filter('checkmark', function() {
    return function(input) {
        return input ? '\u2713' : '\u2718';
    };
});