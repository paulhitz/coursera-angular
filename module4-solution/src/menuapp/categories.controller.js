(function () {
'use strict';

angular.module('MenuApp').controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['allCategories'];
function CategoriesController(allCategories) {
  var categories = this;
  categories.allCategories = allCategories.data;
}

})();
