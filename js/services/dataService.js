angular.module('app').factory('projects', function(){

	var projects = {}

	try{
		projects.list = JSON.parse(localStorage["projects"]);
		projects.maxId = JSON.parse(localStorage["maxId"]);
	}catch(e){
		console.log("Could not load projects from storage");
		projects.list = [];
		projects.maxId = 0;
	}

	projects.addProject = function(project){
		projects.maxId++;
		console.log(projects.maxId);
		project.id = projects.maxId;
		projects.list.push(project);
	};

	projects.saveProjects = function(){
		localStorage["projects"] = JSON.stringify(projects.list);
		localStorage["maxId"] = projects.maxId;
	};

	projects.deleteSelected = function(){
		notDone = true;
		while(notDone){
			notDone = false;
			for(i = 0; i < projects.list.length; i++){
				if(projects.list[i].done){
					projects.list.splice(i,1);
					notDone = true;
					break;
				}
			}
		}
	}

	return projects;
});