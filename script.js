angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.pagination', 'ui.grid.resizeColumns'])
    .controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGrigConstants) {

        $scope.gridOptions = {
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
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
                    field: 'postId',
                    dispalyName: 'Post Id',
                    width: '120',
                    filter: {
                        placeholder: 'Search'
                    },
        },
                {
                    field: 'id',
                    dispalyName: 'Id',
                    width: '120',
                    filter: {
                        placeholder: 'Search'
                    }
        },
                {
                    field: 'name',
                    dispalyName: 'Name',
                    minWidth: '200',
                    width: '*',
                    filter: {
                        placeholder: 'Search'
                    }
        },
                {
                    field: 'email',
                    dispalyName: 'Email',
                    filter: {
                        placeholder: 'Search'
                    },
                    headerCellClass: $scope.highlightFilteredHeader,
                    minWidth: '200',
                    width: '*'
        },
                {
                    field: 'body',
                    dispalyName: 'Body',
                    width: '*',
                    minWidth: '200',
                    filter: {
                        placeholder: 'Search'
                    }
        },
                {
                    field: 'play',
                    displayName: 'Play Sound File',
                    minWidth: '300',
                    enableSorting: false,
                    enableFiltering: false,
                    cellTemplate: '' +
                        '<div style="height: 30px;"><audio controls controlslist="nodownload" style="height: 30px; width 20px;"></audio></div>'
        },
                {
                    field: 'actions',
                    displayName: 'Actions',
                    width: '80',
                    enableSorting: false,
                    enableFiltering: false,
                    cellTemplate: '<a class="download"></a><a class="save-floppy"></a>'

        }
      ],
        }

        $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/comments'
            })
            .then(function (data) {
                $scope.gridOptions.data = data.data;
            });
}]);
