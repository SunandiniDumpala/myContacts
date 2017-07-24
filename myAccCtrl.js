angular.module("contacts").controller("myAccCtrl",["$log","$scope","$firebaseArray","$state","$cookieStore",function($log,$scope,$firebaseArray,$state,$cookieStore){
	$scope.username=$cookieStore.get('username');
	var ref = new Firebase("https://mycontacts-ded88.firebaseio.com/");
	var list = $firebaseArray(ref);
	$scope.contacts=list;
	if($scope.username==null || $scope.username==''){ 
		$state.go("login");
	}
}]);