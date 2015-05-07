angular.module('app').controller('hoursController', function(){
	var hoursList = this;
	hoursList.hours = [
		{projectName:'narwhal', date:'05/01', hours:5},
		{projectName:'narwhal', date:'05/02', hours:6},
		{projectName:'narwhal', date:'05/03', hours:7}];

	hoursList.totalHours = function(){
		var totalHours = 0;
		for( i = 0; i<hoursList.hours.length; i++){
			totalHours+=parseInt(hoursList.hours[i].hours);
		}
		return(totalHours)
	}		
});

