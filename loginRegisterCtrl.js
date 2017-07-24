angular.module("contacts").controller("loginRegisterCtrl",["$log","$scope","$firebaseArray","$state","$cookieStore",function($log,$scope,$firebaseArray,$state,$cookieStore){
	var ref = new Firebase("https://mycontactsadmin.firebaseio.com/");
	var list = $firebaseArray(ref);
	// create account
	$scope.createAccount=function(){
		var data=$scope.fm;
		var response=list.$add({
			username :data.username,
			password :data.password,
			email :data.email,
			phone :data.phone
		});
		response.then(function(){
			alert("successfully created account ");
		$state.go("login");
		},function(){
			alert("fail");
		})
	}
	// login
	$scope.accountLogin=function(){
		var data=$scope.fm;
		var result=[];
		ref.once('value', function(usersObject) {
			usersObject.forEach(function(userData) {
				var realData=userData.val();
				if(realData.username==data.username && realData.password==data.password){
					result.push(1);
				}
			});
			if(result.length==1){
				$log.log("success");
	 			$cookieStore.put('username',data.username);// Put cookie
				$state.go('myAccount.contacts');
			} 
			else{
				$log.log("fail");
				$scope.message="Invalid login details";
			}
		});
	}
}]);
