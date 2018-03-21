app.directive('missionInfo', function() {
    return {
        restrict: 'E',
        controller: 'missionCtrl',
        templateUrl: '/view/directive/mission-info.directive.html'
    };
});