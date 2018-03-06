(function(){

  angular.module("NarrowItDownApp",[])
  .controller("NarrowItDownController",NarrowItDownController)
  .service("MenuSearchService",MenuSearchService)
  .directive("foundItems",FoundItemsDirective);


  function FoundItemsDirective() {
    var ddo = {
      templateUrl :  "foundItems.html",
      scope:{
        x: '<',
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'found',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    var found = this;

  }

  NarrowItDownController.$inject = ["MenuSearchService","$scope"];
  function NarrowItDownController(MenuSearchService,$scope) {
    var narrow = this;
    narrow.x = "";
    narrow.getMatchedItems = function (searchTerm) {
        narrow.found = MenuSearchService.getMatchedMenuItems(searchTerm);

        narrow.found.then(function (response) {
          narrow.items = response;
          //console.log(narrow.items);
        })
        .catch(function (error) {
          console.log("Something went wrong");
        })
    }

    narrow.removeItem = function (index) {
      narrow.items.splice(index,1);
    }

  }

MenuSearchService.$inject = ["$http"];
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm){
      var goodArray = [];
      var flag = 0;
      return $http({
        method: 'GET',
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json')
      }).then(function(result){
        //console.log(result.data.menu_items);
        //console.log(result.data.menu_items.length);
        for(var i=0;i<result.data.menu_items.length;i++){
          //console.log(result.data.menu_items[i].description);
        //  console.log(searchTerm);
          if(result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm) != -1){
            flag = 1;
            goodArray.push(result.data.menu_items[i]);
          //  console.log(result.data.menu_items[i]);
          //  console.log(result.data.menu_items[i]);
          }
        }
        //console.log(goodArray);
        if(searchTerm == "" || flag == 0){
          goodArray = [];
        }
        return goodArray;
      });
    }
  }

})();
