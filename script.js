angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.pagination', 'ui.grid.resizeColumns', 'ui.grid.edit'])
    .controller('mainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGrigConstants) {
        $scope.gridOptions = {
            paginationPageSizes: [5, 10, 15],
            paginationPageSize: 5,
            useExternalSorting: true,
            footerTemplate: '<h1>Hello world</h1>',
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
                    enableSorting: true,
                    enableCellEdit: false,
                    minWidth: '200',
                    width: '*',
                    filter: {
                        placeholder: 'Search'
                    },
                    headerTemplate:'<i class="glyphicon glyphicon-triangle-bottom"i area-hidden="true"></i>'
        },
                {
                    field: 'email',
                    dispalyName: 'Email',
                    enableSorting: true,
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
                        '<div class="ui-grid-cell-actions">' +
                            '<audio controls controlslist="nodownload"></audio>' +
                            '<a class="fa fa-cloud-download fa-2x">' +
                            '</a><a class="fa fa-save fa-2x"></a>' +
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
        
        
}])
.controller('secondCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGrigConstants) {
        $scope.gridOptions02 = {
            paginationPageSizes: [5, 10, 15],
            paginationPageSize: 5,
            useExternalSorting: true,
            enableSorting: true,
            enableColumnResizing: true,
            onRegisterApi: function (gridApi) {
                $scope.grid2Api = gridApi;
            },
             columnDefs: [
                {
                    field: 'call_start',
                    displayName: 'Start',
                    minWidth: '100',
                    width: '*'
                }, {
                    field: 'call_end',
                    displayName: 'End',
                    minWidth: '100',
                    width: '*'
                }, {
                    field: 'call_target_type',
                    displayName: 'In to',
                    minWidth: '100',
                    width: '*'
                }, {
                    field: 'call_out_type',
                    displayName: 'Out to',
                    minWidth: '100',
                    width: '*'
                }, {
                    field: 'call_caller_id',
                    displayName: 'Caller number',
                    minWidth: '100',
                    width: '*'
                }, {
                    field: 'ivr_dnis',
                    displayName: 'Called number',
                    minWidth: '100',
                    width: '*'
                }, {
                    field: 'ivr_number_type',
                    displayName: 'Called number type',
                    minWidth: '100',
                    width: '*'
                }, {
                    field: 'call_recording_internal',
                    displayName: 'In system recorded',
                    minWidth: '100',
                    width: '*'
                }, {
                    field: 'call_recording_external',
                    displayName: 'Outbound call recorded',
                    minWidth: '100',
                    width: '*'
                }, {
                    field: 'call_billusec',
                    displayName: "Duration HH:MM:SS:ss",
                    minWidth: '100',
                    width: '*'
                }
            ],
        }
        
        init();
        
        function init(){
            $scope.loading = true;
            
            $http({
                method: 'GET',
                url: 'data.json'
            })
            .then(function (data) {
                $scope.gridOptions02.data = data.data;
            })
            .finally(function() {$scope.loading = false;})
        }
        
        
}]);

