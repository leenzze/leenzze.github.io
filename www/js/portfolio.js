leenzzeApp.controller('portfolioCtrl',function($timeout, $scope, $ionicPosition, $location, $anchorScroll, $document, $ionicScrollDelegate){
console.log($ionicScrollDelegate);

    $scope.scrollTop = function(id) {
        var p2 = document.querySelector('#'+id);
        $scope.quotePosition = $ionicPosition.position(angular.element(p2)).top;
        console.log($scope.quotePosition);
        var scrollView = $ionicScrollDelegate.$getByHandle('mainScroll');
        // var topValue = scrollView.getScrollPosition(id);
        console.log(scrollView);
        // scrollView.scrollTo(0,$scope.quotePosition.top, true);
        // scrollView.scrollTop(true);
        // console.log(scrollView.scrollTo(0,550, true));
        $location.hash(id); 
    };

});