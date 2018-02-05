
(function(){

      var app =
angular.module("foodLimiter",[]).controller("foodController",
function($scope, $filter){
        $scope.stringOfFood = '';
        $scope.message = 'Yo';
        $scope.listOfFood = '';
        $scope.numberOfFoodItems = 0;
        $scope.colorOfContainer = "yellow";

        $scope.goAheadOrNot = function(){

          $scope.listOfFood =
$scope.stringOfFood.split(",").filter((i)=>i.length);
          console.log($scope.stringOfFood);
          console.log($scope.listOfFood);
          $scope.numberOfFoodItems = $scope.listOfFood.length;
          console.log($scope.numberOfFoodItems);
            if($scope.numberOfFoodItems <=3){
              $scope.colorOfContainer = "green";
              $scope.message = "Yo go ahead";
            }
            else{
              $scope.colorOfContainer = "red";
              $scope.message = "No, don't go ahead";
            }
        }
      });

})();
