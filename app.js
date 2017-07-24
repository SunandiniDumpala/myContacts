angular.module("contacts",['ui.router','firebase','ngCookies','ui.bootstrap']);
angular.module("contacts").config(function($stateProvider,$urlRouterProvider)
							   {
								$urlRouterProvider.otherwise("/login");
								$stateProvider.state("login",{
								url:"/login",
								    templateUrl:"templates/loginRegister.html",
									controller:"loginRegisterCtrl",
									controllerAs:"loginRegister"
								})
								.state("register",{
								url:"/register",
								    templateUrl:"templates/register.html",
									controller:"loginRegisterCtrl",
									controllerAs:"loginRegister"
								})

								.state("myAccount",{
								url:"/myaccount",
								    templateUrl:"templates/myAcc.html",
									controller:"myAccCtrl",
									controllerAs:"myAccCtrlAs"
								})
								
	                         .state("logout",{
								url:"/logout",
								    templateUrl:"templates/logout.html",
									controller:"logout"
								})
								
								.state("myAccount.contacts",{
								url:"/contacts",
								    views:{ "inner" :{
								    	templateUrl:"templates/contacts.html",
									  	controller:"contactCtrl",
									    controllerAs:"contactAs"}}
								})


});