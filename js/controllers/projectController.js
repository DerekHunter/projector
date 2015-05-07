angular.module('app').controller('projectController', function(){
	var projectList = this;
	projectList.projects = [
		{name:'iosRunning', done:true},
		{name:'narwhal', done:false}];

	projectList.addProject = function() {
		projectList.projects.push({name:projectList.projectName, done:false});
		projectList.projectName = ' ';
	};
		
});