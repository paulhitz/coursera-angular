(function () {
"use strict";

angular.module('public').controller('SubscribeController', SubscribeController);

SubscribeController.$inject = ['MenuService', 'UserService'];
function SubscribeController(MenuService, UserService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    MenuService.getMenuItem($ctrl.user.menuitem).then(
      function(success) {
        var details = {
          user: $ctrl.user,
          menuItem: success
        };
        UserService.setUserDetails(details);
        $ctrl.error = false;
      },
      function(error) {
        $ctrl.error = true;
      });
  };
}

})();
