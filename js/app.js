
angular.module('app', ['ngRoute']).
	config(function($routeProvider){
		$routeProvider.
			when('/project', {
				templateURL:"partials/hours.html",
				controller: "hoursController"}).
			when('/projects', {
				templateURL:"partials/projectManagement",
				controller: "projectController"}).
			otherwise({redirectTo: '/project'});

});




