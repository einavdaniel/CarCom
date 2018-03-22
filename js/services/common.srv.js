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

    this.updateCounterFile = function (path) {
        var counter = 0;
        $http.get(path).then(
            function (result) {
                c = result.data;
                c.counter++;
                console.log(c.counter);
                $http.post(path,JSON.stringify(c)).then(
                    function(res){
                        console.log(res)
                    },
                    function(err){
                        console.log(err)
                    }
                )
            });
        
    }
});