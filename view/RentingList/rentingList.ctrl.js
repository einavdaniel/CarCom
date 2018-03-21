app.controller('rentingListCtrl', function ($scope, commSrv) {
    $scope.adsList = null;

    $scope.loadPublishers = function (publisherID) {
        $scope.adsList.forEach(advert => {
            commSrv.getPublisher(advert.publisherID).then(
                function (res) {
                    advert.publisher = res.data;
                },
                function (err) {
                    console.log(err);
                }
            )
        });
    };

    $scope.loadAds = function () {
        $scope.adsList = commSrv.getAllAds().then(
            function (res) {
                $scope.adsList = res.data;
                $scope.loadPublishers();
            },
            function (err) {
                console.log(err);
            });
    };

    $scope.bookCar = function(advert){
      $scope.selectedAdvert = advert;
    };

    $scope.loadAds();
});