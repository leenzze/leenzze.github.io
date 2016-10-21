leenzzeApp.controller('homeCtrl',function($scope, $location){
    $scope.aaa = 'hello my name is leenzze';
    console.log('gg');

    $scope.pageList = ['Profile','Skills','Portfolio','Experience'];

    $scope.goPage = function(name){
        var name = '/'+name;
        console.log(name);
        $location.path(name);
    };

});