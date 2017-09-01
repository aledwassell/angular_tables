angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ui.grid.edit'])

    .config(function($routeProvider){
    
        $routeProvider
        
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainCtrl'
        })
        .when('/#%2Fusers', {
            templateUrl: 'pages/users.html',
            controller: 'usersCtrl'
        })
    })
    .controller('mainCtrl', ['$scope', function($scope){
        $scope.message = 'Home message'
    }])
    .controller('usersCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGrigConstants) {
        
        var paginationOptions = {
            pageNumber: 1,
            pageSize: 25,
            sort: null
        };
        
        $scope.gridOptions = {
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
            useExternalPagination: true,
            useExternalSorting: true,
            fastWatch: true,
            enableSorting: true,
            enableFiltering: true,
            enableColumnResizing: true,
            onRegisterApi: function (gridApi) {
                $scope.grid2Api = gridApi;
            },
            columnDefs: [
      // post id, id, name, email, body
                {
                    field: 'name',
                    dispalyName: 'Name',
                    enableCellEdit: false,
                    minWidth: '200',
                    width: '*',
                    filter: {
                        placeholder: 'Search'
                    },
                    headerTemplate:'<i class="glyphicon glyphicon-triangle-bottom" area-hidden="true"></i>'
        },
                {
                    field: 'email',
                    dispalyName: 'Email',
                    enableCellEdit: false,
                    filter: {
                        placeholder: 'Search'
                    },
                    headerCellClass: $scope.highlightFilteredHeader,
                    minWidth: '200',
                    width: '*'
        },
                {
                    field: 'body',
                    dispalyName: 'Description',
                    width: '*',
                    minWidth: '200',
                    enableCellEdit: true,
                    type: 'text',
                    filter: {
                        placeholder: 'Search'
                    }
        },
                {
                    field: 'actions',
                    displayName: 'Actions',
                    enableCellEdit: false,
                    width: '380',
                    enableSorting: false,
                    enableFiltering: false,
                    cellTemplate: '' +
                        '<div class="ui-grid-cell-actions"><audio controls controlslist="nodownload" style="height: 30px; width 20px;"></audio>' +
                            '<a class="download"></a><a class="save-floppy"></a>' +
                        '</div>'
        }
      ],
        }
        
        init();
        
        function init(){
            $scope.loading = true;
            
            $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/comments'
            })
            .then(function (data) {
                $scope.gridOptions.data = data.data;
            })
            .finally(function() {$scope.loading = false;})
        }
        
        
}]);
