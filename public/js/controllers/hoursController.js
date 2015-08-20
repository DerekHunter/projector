angular.module('app').controller('hoursController', function($scope, $location,  hours){
	var hoursList = this;
	
	hours.project = $location.path().split('/').pop()
	hours.loadProjects();

	$scope.hours = hours;
	$scope.hoursController = this

	$scope.$watch('hours.list',function(){
			hours.saveRecords();
		}, true);

	hoursList.totalHours = function(){
		return hours.totalHours();
	};

	hoursList.addRecord = function(){
		var record = {}
		record.date = new Date().getMonth()+1;
		record.date += "/" + new Date().getDate();
		record.hours = 0;
		hours.addRecord(record)
	};

			
});

