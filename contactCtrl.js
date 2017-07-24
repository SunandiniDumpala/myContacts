angular.module("contacts").controller("contactCtrl",["$log","$scope","$firebaseArray","$state","$cookieStore","$uibModal",function($log,$scope,$firebaseArray,$state,$cookieStore,$uibModal){
	
	$scope.openAddContactPopup=function(){
		var popupOpen=$uibModal.open({
			animation:true,
			templateUrl:"templates/add.html",
			controller:"addContactCtrl",
			size:"xs",
				resolve:{contactDataIndual:$scope.fm,
					title:{
						mainTitle:"Add new Conatct ",
						btnTitle:"Add"
				 	} }
		}); // open popup
		popupOpen.result.then(function(){ },function(){});
	}// edit pop
	$scope.openEditContactPopup=function(contactData){	
		console.log("contactData"+contactData.firstName);
		var popupEditOpen=$uibModal.open({
		animation:true,
		templateUrl:"templates/add.html",
		controller:"addContactCtrl",
		size:"xs",
			resolve:{contactDataIndual:contactData,
				title:{
					mainTitle:"Update Contact ",
					btnTitle:"Update",
					}}
		}); // edit popup
		popupEditOpen.result.then(function(){ },function(){});
	}
	
	var ref = new Firebase("https://mycontacts-ded88.firebaseio.com/");
	var list = $firebaseArray(ref);
	$scope.deleteContact=function(item){
		$log.log(list[0]);
		$log.log(item.$id);
		list.$remove(list.$getRecord(item.$id)).then(function(ref) {
		},
		function(error) {
  				console.log("Error:", error);
		});
		var x = document.getElementById("snackbar2")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	} 
}]);