app.directive('materialTable', function() {
    return {
        restrict: 'E',
        scope: {
            eventHandler: '&ngClick',
            columnNames: '=',
            presentData: '=',
            delete: '=',
            update: '=', 
            openCard: '=',            
            class: '@',
            skipProps: '@'
        },
        link: function(scope, element, attrs) {
            scope.addPadding = "addPadding" in attrs;
            if (scope.skipProps) {
                scope.skipProps = scope.skipProps.split(',');
            } else {
                scope.skipProps = [];
            }            
        },
        templateUrl: '/view/directive/material-table.directive.html'
    };
});