var app = angular.module('CarComApp', [
    // 'xeditable', 
    'ngRoute', 
    // 'ui.materialize',
    'commonServices'
]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/view/home.html",
            controller: "homeCtrl"
        })
        .when("/rentCar",{
            templateUrl: "/view/RentingList/rentingList.html",
            controller: "rentingListCtrl"
        })
        .when("/requestCar",{
            templateUrl: "/view/Requests/requestsList.html",
            controller: "requestListCtrl"
        })
        .when("/aboutUs",{
            templateUrl: "/view/About/about.html",
        })
        .otherwise({
            redirectTo: "/"
        });
    // $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix("");
});



// $(document).ready(function(){
//     // Initialize collapse button
//     $('.modal').modal({ opacity: 0 });
//});
