(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-menuapp.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'src/menuapp/templates/items.template.html',
    controller: 'ItemsController as items',
    params: {
      itemId: null
      // items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
      //   console.log("resolving item params");
      //   //$stateParams.itemId
      //   console.log("sp test", $stateParams);
      //   console.log("sp itemID", $stateParams.itemId);
      //   return MenuDataService.getItemsForCategory($stateParams.itemId);
      //   //console.log("testing");
      //   //console.log("******* item ID  = " + itemId);
      //   //return {'name':'my name'};
      // }]
    }
  });

}

})();
