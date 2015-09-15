var appControllers = angular.module("appControllers",[]);
appControllers.controller('dataCtrl',['$scope','dataFactory',function($scope,dataFactory){
   dataFactory.data()
            .success(function(data) {
                $scope.data = angular.fromJson(data.names);
            });
}]);
 
