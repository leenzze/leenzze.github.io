leenzzeApp.controller('indexCtrl',function($scope, $location){
    $scope.menu = [
        {icon: 'ion-ios-home', name: 'Home'},
        {icon: 'ion-person', name: 'Profile'},
        {icon: 'ion-mouse', name: 'Skills'},
        {icon: 'ion-filing', name: 'Portfolio'},
        {icon: 'ion-ios-list', name: 'Experience'}
    ];

    $scope.goPage = function(name){
        var name = '/'+name;
        console.log(name);
        $location.path(name);
    };
});