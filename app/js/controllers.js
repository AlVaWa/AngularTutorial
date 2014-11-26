/**
 * Created by AleksanderVatleWaage on 11.11.14.
 */



var phonecatControllers = angular.module('phonecatControllers', []);

// Where the magic happens
function PhoneListCtrl($scope, Phone) {
    $scope.phones = Phone.query();

    $scope.title = 'Mobiles:';
    $scope.orderProp = 'age';

}

function PhoneDetailCtrl ($scope, $routeParams, Phone){

    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
        $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    }



}

function TestingCtrl ($scope){
    $scope.hello = function(name){
        alert('Hello ' + (name || 'world') + '!');
    }

}

// Injecting dependencies
PhoneListCtrl.$inject = ['$scope', 'Phone'];
PhoneDetailCtrl.$inject = ['$scope', '$routeParams', 'Phone'];
TestingCtrl.$inject = ['$scope'];

// Setting the controller to the module
phonecatControllers.controller('PhoneListCtrl', PhoneListCtrl);
phonecatControllers.controller('PhoneDetailCtrl', PhoneDetailCtrl);
phonecatControllers.controller('TestingCtrl', TestingCtrl);