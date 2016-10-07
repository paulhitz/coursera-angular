(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

/**
 * Display a list of items to buy and allow the user to buy them.
 */
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;
  buyList.items = ShoppingListCheckOffService.getBuyItems();

  buyList.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };
}

/**
 * Simple controller used to display a list of bought items.
 */
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}

/**
 * Handle multiple lists and provide operations to retrieve and modify them.
 */
function ShoppingListCheckOffService() {
  var service = this;

  var buyItems = [
    { name: "cookies", quantity: 10 },
    { name: "soft drinks", quantity: 2 },
    { name: "pizzas", quantity: 2 },
    { name: "ice-creams", quantity: 1 },
    { name: "mints", quantity: 100 }
  ];
  var boughtItems = [];

  service.getBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.buyItem = function (index) {
    var item = buyItems.splice(index, 1);
    boughtItems.push(item[0]);
  };
}

})();
