angular.module('app').factory('hours', function(){

	var hours = {}

	hours.loadProjects = function(){
		try{
			hours.list = JSON.parse(localStorage[hours.project]);
			hours.maxId = JSON.parse(localStorage[hours.project+"_maxId"])
		}catch(e){
			hours.list = [];
			hours.maxId = 0;
		}		
	}

	hours.totalHours = function(){
		var totalHours = 0;
		for( i = 0; i<hours.list.length; i++){
			totalHours+=parseInt(hours.list[i].hours);
		}
		return(totalHours)
	};

	hours.addRecord = function(record){
		hours.list.push(record);
		record.id = hours.maxId
		hours.maxId++;
		hours.saveRecords();
	}

	hours.saveRecords = function(record){
		localStorage[hours.project] = JSON.stringify(hours.list)
		localStorage[hours.project+"_maxId"] = JSON.stringify(hours.maxId)
	}

	return hours;
});