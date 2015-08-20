
angular.module('app', ['ngRoute']).
	config(['$routeProvider', function($routeProvider){
		$routeProvider.
			when('/projects', {
				templateUrl: 'partials/projectManagement.html',
				controller: 'projectController'
			}).
			when('/project/:projectId', {
				templateUrl: 'partials/hours.html',
				controller: 'hoursController'
			}).						
			otherwise({redirectTo: '/projects'});
}]);




