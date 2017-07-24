angular.module("contacts").controller("addContactCtrl",["$log","$scope","$uibModalInstance","$firebaseArray","$cookieStore","contactDataIndual","title",function($log,$scope,$uibModalInstance,$firebaseArray,$cookieStore,contactDataIndual,title){
	$scope.fm=contactDataIndual;
	$scope.mainTitle=title.mainTitle;
	$scope.btnTitle=title.btnTitle;
	$scope.username=$cookieStore.get('username');
	var ref = new Firebase("https://mycontacts-ded88.firebaseio.com/");
	var list = $firebaseArray(ref);

	$scope.ok=function(type){
		var data=$scope.fm;
		var data1=$scope.contactData;
	//	var data1=contactData;
		if(type=="Add"){
		var response=list.$add({
			//username:$scope.username,
			firstName :data.firstName,
			lastName :data.lastName,
			company:data.company,
			emailAddress:data.emailAddress,
			work:data.work,
			mobile:data.mobile,
			home:data.home,
			street:data.street,
			city:data.city,
			state:data.state,
			zip:data.zip
		});
		response.then(function(){
			$log.log("success");
			$uibModalInstance.close();
		},function(err){
			$log.log("fail");
		});
		// Get the snackbar DIV
   
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
		} // Add contact
		if(type=="Update"){ // update contact
			//list.$remove(data);
			var id = data.$id;
			//console.log(id);
			var record = list.$getRecord(id);
			//console.log(record);
			record.firstName=data.firstName;
			record.lastName=data.lastName;
			record.company=data.company;
			record.emailAddress=data.emailAddress;
			record.work=data.work;
			record.mobile=data.mobile;
			record.home=data.home;
			record.street=data.street;
			record.city=data.city;
			record.state=data.state;
			record.zip=data.zip;

			list.$save(record).then(function(){
			$log.log("success");
			$uibModalInstance.close();
		},function(err){
			$log.log("fail");
		});
		
			var x = document.getElementById("snackbar1")

 		   	// Add the "show" class to DIV
  			x.className = "show";

   			// After 3 seconds, remove the show class from DIV
    		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000); 
		}

	}

	$scope.cancel=function(){
		$uibModalInstance.dismiss();
	}
}]);
