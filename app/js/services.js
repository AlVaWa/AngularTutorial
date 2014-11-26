/**
 * Created by AleksanderVatleWaage on 24.11.14.
 */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

function PhoneService ($resource){
    return $resource('phones/:phoneId.json', {}, {
        query: {method: 'GET', params:{phoneId:'phones'}, isArray: true}
    });
}
// Injecting dependencies
PhoneService.$inject = ['$resource'];

// Setting the controller to the module
phonecatServices.factory('Phone', PhoneService);