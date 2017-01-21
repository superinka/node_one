var myApp = angular.module('myApp',[]);


myApp.controller('HomeCtrl', function($scope, $http) {
    
    $http.get('/contactlist').then(function(response){
        console.log(response.data);

        $scope.contactlist = response.data;
    });

});
