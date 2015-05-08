angular.module('app').controller('projectController', function($scope, projects){
	
	var projectController = this;
	$scope.projects = projects;
	$scope.projectController = this;

	projectController.addProject = function() {
		projects.addProject({name:projectController.projectName, done:false})
		projectController.projectName = ' ';
		projects.saveProjects();
	};

	projectController.deleteSelected = function(){
		projects.deleteSelected();
		projects.saveProjects();
	};
		
});