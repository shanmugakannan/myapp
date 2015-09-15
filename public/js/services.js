var dataServices = angular.module("dataServices",[])
dataServices.factory("dataFactory",function($http){
	return {
		data:function(){
			return $http.get('/data');
		}
	}
});