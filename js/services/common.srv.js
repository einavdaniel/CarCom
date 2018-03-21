var commonServices = angular.module('commonServices', []);

commonServices.service('commSrv', function ($http) {

    this.getData = function () {
        $http.get('./database/adverts/adsList.json').then(
            function (result) {
                console.log("success");
                console.log(result.data);
            });
    };

    this.getAllAds = function () {
        return $http.get('./database/adverts/adsList.json');
    }

    this.getPublisher = function (id) {
        return $http.get('./database/publisher/' + id + ".json");
    }
});