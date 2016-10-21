(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['$stateParams', 'MenuDataService'];
function ItemsController($stateParams, MenuDataService) {
  var items = this;

  var response = MenuDataService.getItemsForCategory($stateParams.itemId);
  response.then(function (result) {

    items = result.data.menu_items;
    console.log("item", items);
  });

  //var item = response.data;

/*
TODO

-The category code isn't being passed in. Only the index reference is.
-The items in this controller aren't being passed to the template

-you should use an items tag?? From the start figure out the flow of the app.   ******
  -what's calling what?

*/




//
//   console.log("$stateParams = ", $stateParams);
// console.log("$stateParams.itemId = ", $stateParams.itemId);
//   //console.log("items item detail ctrl = ", items);
//   var itemDetail = this;
//   //var item = items[$stateParams.itemId]; //TODO
// console.log("$stateParams.itemId = ", $stateParams.itemId);
//
//
//   // itemDetail.name = item.name;
//   // itemDetail.shortName = item.short_name;
//   // itemDetail.description = item.description;
//   console.log("itemDetail = ", itemDetail);
}

})();
