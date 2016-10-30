(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://still-bayou-22560.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
