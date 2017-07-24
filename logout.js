angular.module("contacts").controller("logout",["$state","$cookieStore",function($state,$cookieStore){
	$cookieStore.remove('username');
	$state.go("login");
}]);