(function(){

    list = ["Rahul Khatav", "Mohd. Sameer", "Deep Antala", "Saakshi Patil", "Randeep Hooda", "Sharukh Khan", "Salman Rushdie", "Lebron James", "Zion Williamson", "Cristiano Ronaldo"];
    angular.module('searchApp', []).controller('ctrl', ctrlFun);
    ctrlFun.$inject = ['$scope'];
    function ctrlFun($scope){
        $scope.list = list;
    }
})()