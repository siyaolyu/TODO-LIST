angular.module('todoList',[]).controller('todoController',function($scope){
	$scope.viewStatus="";
	$scope.viewAll=function(){
		$scope.viewStatus="";
	};
	$scope.viewActive=function(){
		$scope.viewStatus="active";
	};
	$scope.viewCompleted=function(){
		$scope.viewStatus="completed";
	};
	$scope.show=function(index){
		if($scope.viewStatus==""||$scope.tasks[index].status==$scope.viewStatus){
			return true;
		}else{
			return false;
		}
	};
	$scope.done=function(index){
		$scope.tasks[index].status="completed";
	};
	$scope.delete=function(index){
		$scope.tasks.splice(index,1);
	};
	$scope.add=function(param){
		$scope.tasks.push({name:param,status:'active'});
	};
});
