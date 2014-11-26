/**
 * Created by AleksanderVatleWaage on 11.11.14.
 */

describe('PhoneListCtrl', function(){
    beforeEach(module('phonecatControllers'));

    it('should create "phones" model with 3 phones', inject(function($controller){
        var scope = {},
            ctrl = $controller('PhoneListCtrl', {$scope:scope});
        expect(scope.phones.length).toBe(3);
        expect(scope.title).toBe('Mobiles:')
    }));
});