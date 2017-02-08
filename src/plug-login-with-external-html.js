angular.module('plug-login', [])
  .directive("loginForm",function ($compile) {
      return {
        restrict: 'A',
        scope: {},
        template: '',
        link: function(scope, element, attrs) {
            angular.element(document.getElementById(attrs.divId)).append(
            		$compile('<div ng-include="\'' + attrs.htmlNameWithPath + '\'"></div>')(scope)
            );
        },
        replace: 'true',
        controller: ['$scope', '$http', '$window',
          function($scope, $http, $window) {
            $scope.loginError = false;
            $scope.login = function () {
            $scope.loginError = false;
            $scope.login = function () {
              $scope.loginError = false;
              $http.post('/auth/login', {username: $scope.username, password: $scope.password})
                .success(function (response) {
                  $window.location='/';
                })
                .error(function (err, status) {
                  $scope.username = '';
                  $scope.password = '';
                  $scope.loginError = true;
                })
              }
            }
          }
        ]
          
      }
    });
