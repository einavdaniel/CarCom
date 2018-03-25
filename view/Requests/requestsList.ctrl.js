app.controller('requestListCtrl', function ($scope, $http, $q, commSrv) {

    $scope.allRequests = [];
    $scope.idAlreadyExist = false;
    $scope.showRemoveError = false;
    $scope.selectedRequest = null;

    $scope.loadRequests = function () {
        commSrv.getAllRequests().then(
            function (res) {
                $scope.allRequests = res.data;
            },
            function (err) {
                console.log(err);
            }
        )
    };

    $scope.saveAllRequests = function () {

        $http({
            url: "http://localhost:80/saveAllRequests",
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            data: $scope.allRequests
        }).then(function (data, status, headers, config) {
            $scope.loadRequests();
            $scope.clearNewRequest();
            $scope.removeRequestID = "";
        }, function (data, status, headers, config) {

        });
        // $q.when($http.post("http://localhost:80/saveAllRequests", JSON.stringify($scope.allRequests))).then(
        //     function () {
        //         $scope.loadRequests();
        //     }
        // )


    };

    $scope.selectRequest = function (req) {
        $scope.selectedRequest = req;
    };

    $scope.clearNewRequest = function () {
        if ($scope.newRequest) {
            $scope.newRequest.id = "";
            $scope.newRequest.firstName = "";
            $scope.newRequest.lastName = "";
            $scope.newRequest.age = "";
            $scope.newRequest.branch = "";
            $scope.newRequest.reason = "";
            $scope.newRequest.destination = "";
            $scope.newRequest.comments = "";
            $scope.newRequest.dates = "";
            $scope.newRequest.phoneNumber = "";
        }
    };

    $scope.idExists = function (idToCheck) {

        $scope.idAlreadyExist = false;
        $scope.allRequests.forEach(req => {
            if (req.id == idToCheck) {
                $scope.idAlreadyExist = true;
            };
        });
    };

    $scope.removeRequest = function (id) {
        $scope.idExists(id);

        if ($scope.idAlreadyExist) {
            var index = -1;
            $scope.allRequests.forEach(req => {
                if (req.id == id) {
                    index = $scope.allRequests.indexOf(req);
                };
            });

            if (!(index == -1) && $scope.selectedRequest.id == id) {
                $scope.allRequests.splice(index, 1);
                $scope.saveAllRequests();
                $scope.showRemoveError = false;
                $scope.removeRequestID = "";
            }
            else {
                $scope.showRemoveError = true;
            }
        }
        else {
            $scope.showRemoveError = true;
        }

        $scope.allowRemoval = false;
    };

    $scope.saveRequest = function () {

        if (!$scope.idAlreadyExist) {
            $scope.allRequests.push($scope.newRequest);
            $scope.saveAllRequests();
        }
    };

    $scope.loadRequests();
});