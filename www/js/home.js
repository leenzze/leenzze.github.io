leenzzeApp.controller('homeCtrl',function($scope, $location, $ionicSlideBoxDelegate){
    $scope.aaa = 'hello my name is leenzze';
    console.log('gg');

    $scope.pageList = ['Profile','Skills','Portfolio','Experience'];

    $scope.goPage = function(name){
        var name = '/'+name;
        console.log(name);
        $location.path(name);
    };

    $scope.options = {
        autoplay: 1000,
        // width: 124,
        speed: 1000
    }

    $scope.data = {};

    $scope.$watch('data.slider', function(nv, ov) {
        console.log(nv,ov);
        $scope.slider = $scope.data.slider;
        //console.log($scope.slider);
    });
    
    // $scope.$watch('slider.on.slideChangeStart', function() {
    //     console.log('slide change start go!');
    // });
    
    // $scope.$watch('slider.on.setTransition', function() {
    //     console.log('set transition go!');
    // });
    
    // $scope.$watch('slider.on.activeIndex', function() {
    //     console.log('activeIndex change!');
    // });

});