app.factory('droneService', droneService);

droneService.$inject = ['$http', '$q'];

function droneService($http, $q){
    return {
         getAllDrones : getAllDrones,
         deleteDrone : deleteDrone,
         updateDrone : updateDrone,
         insertDrone : insertDrone,
         findDroneById : findDroneById
    };

    function getAllDrones() {
        return $q(function(resolve, reject) {
            $http.get("/findDrone").then(function(a)
            {
                resolve(a.data);
            });
        });
    };

    function findDroneById(id) {
        return $q(function(resolve, reject) {
            $http.get("/drone/"+ id).then(function(a)
            {
                resolve(a.data);
            });
        });
    };

    function deleteDrone(data) {
        return $q(function(resolve, reject) {
            $http.delete("/deleteDrone/"+ data).then(function(a)
            {
                resolve(a.data);
            });
        });
    };

    function updateDrone(data) {
        return $q(function(resolve, reject) {
            $http.put("/updateDrone", {params: {'id_drone': data.id_drone, 'updated_object': data}}).then(function(a) {
                resolve(a.data);
            });
        });
    };

    function insertDrone(data) {
        return $q(function(resolve, reject) {      
            $http.post("/insertDrone", {params : {'insert_drone': data}}).then(function(a) {
                resolve(a.data);
            });
        });
    };
}