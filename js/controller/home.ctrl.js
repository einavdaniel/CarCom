app.controller('homeCtrl', function ($scope, $http) {
    var data = null;
    $scope.saveFile = function () {
        data.counter++;
        console.log(JSON.stringify(data));
        $http.post("http://localhost:80/myData", JSON.stringify(data)).then(
            function (res) {
                console.log(res);
            },
            function (err) {
                console.log(err);
            }
        )
    }

    $scope.readFile = function () {
        $http.get("./database/comon/counter.json").then(
            function (res) {
                data = res.data;
                console.log(res.data);
            },
            function (err) {
                console.log(err);
            }
        )
    }

    $scope.test = "woirking"

});