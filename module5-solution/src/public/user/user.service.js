(function () {
"use strict";

angular.module('common').service('UserService', UserService);

function UserService() {
  var service = this;
  var userDetails= {};

  service.setUserDetails = function (details) {
    userDetails = details;
  };

  service.getUserDetails = function () {
    return userDetails;
  };
}

})();
