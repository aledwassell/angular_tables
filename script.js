angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid', 'ui.grid.pagination'])
    .controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGrigConstants) {

        $scope.gridOptions = {
            fastWatch: true,
            enableSorting: true,
            enableFiltering: true,
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
                    width: '200',
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
                    width: '200'
        },
                {
                    field: 'body',
                    dispalyName: 'Body',
                    width: '200',
                    filter: {
                        placeholder: 'Search'
                    }
        },
                {
                    field: 'play',
                    displayName: 'Play Sound File',
                    width: '300',
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
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
        }

        $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/comments'
            })
            .then(function (data) {
                $scope.gridOptions.data = data.data;
            });
}]);
