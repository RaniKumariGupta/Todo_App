var myApp = angular.module("myList",[])
myApp.controller("myListController",function($scope){
    $scope.items = ["Hello","Goodmorning"];
    $scope.newItem = "";
    $scope.pushItem = function(){
        if($scope.newItem !=""){
            $scope.items.push($scope.newItem);
            $scope.newItem = "";

        }
    }
    $scope.delItem = function(index){
        $scope.items.splice(index,1);
    }
});