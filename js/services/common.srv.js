var commonServices = angular.module('commonServices', []);

commonServices.service('commSrv', function ($http) {

    this.getData = function () {
        $http.get('./database/adverts/adsList.json').then(
            function (result) {
            });
    };

    this.getAllAds = function () {
        return $http.get('./database/adverts/adsList.json');
    }

    this.getPublisher = function (id) {
        return $http.get('./database/publisher/' + id + ".json");
    }

    this.getAllRequests = function(){
        return $http.get('./database/requests/allRequests.json');
    }
});