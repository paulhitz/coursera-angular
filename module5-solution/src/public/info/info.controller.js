(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['userDetails', 'ApiPath'];
function InfoController(userDetails, ApiPath) {
  var $ctrl = this;
  $ctrl.userDetails = userDetails;
  $ctrl.ApiPath = ApiPath;
}


})();
