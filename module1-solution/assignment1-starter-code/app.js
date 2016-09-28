(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  var TOO_MUCH_THRESHOLD = 3;

  $scope.updateMessage = function (items) {
    if (!items) {
      $scope.message = "Please enter data first";
    } else {
      $scope.message = determineMessage(items);
    }
  };

  /**
   * Determine the message to display based on the number of items provided.
   */
  function determineMessage(items) {
    var amount = items.split(",").length;
    var message = "Enjoy!";
    if (amount > TOO_MUCH_THRESHOLD) {
      message = "Too much!";
    }
    return message;
  }

}

})();
