var app = angular.module('aery-app', ['ngSanitize']);
app.controller('aery-controller', function($scope, $http){



  
  $http({
    method: "GET",
    url: "https://spreadsheets.google.com/feeds/cells/1OEeWbiyc1T3oBtO8fKKhX6snO6wsm-6tLA0YIQ7vqsc/4/public/values?alt=json"
  }).then(function (response){
    $scope.progression = response.data;
    $scope.progression = JSON.parse($scope.progression["feed"]["entry"][0]["content"]["$t"]);
    /*console.log($scope.progression);*/
  },function (error){
  });

  $http({
    method: "GET",
    url: "https://spreadsheets.google.com/feeds/cells/1OEeWbiyc1T3oBtO8fKKhX6snO6wsm-6tLA0YIQ7vqsc/3/public/values?alt=json"
  }).then(function (response){
    $scope.recruitment = response.data;
    $scope.recruitment = JSON.parse($scope.recruitment["feed"]["entry"][0]["content"]["$t"]);
    /*console.log($scope.recruitment);*/
  },function (error){
  });




  $scope.$watch('recruitment', function(newValue, oldValue){
    if (newValue !== oldValue) {
    } 
  }, true)
})