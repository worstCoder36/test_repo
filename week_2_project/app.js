(function(){
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('toBuyController', ToBuyController)
  .controller('boughtController', BoughtController)
  .service('ShoppingListService', ShoppingListService);

  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService){
    var buyList = this;

    buyList.items = ShoppingListService.getItemsList();

    // list.addItem = function(){
    //   ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
    // }


    buyList.sendToOtherList = function (itemName, itemIndex) {
      ShoppingListService.buyItem(itemName, itemIndex);
    }
  }

  BoughtController.$inject = ['ShoppingListService'];
  function BoughtController(ShoppingListService){
    var boughtList = this;
    boughtList.items = ShoppingListService.getBoughtItemsList();
  }

  function ShoppingListService(){

    var service = this;

    var buyList = [
      {
        name: "Cookies",
        quantity: 10
      },
      {
        name: "Cold Drinks",
        quantity: 5
      },
      {
        name: "Chips",
        quantity: 20
      },
      {
        name: "Bananas",
        quantity: 12
      },
      {
        name: "Mars",
        quantity: 30
      },
      {
        name: "Muffins",
        quantity: 20
      }
    ];

    var boughtList = [];

    service.getItemsList = function () {
      return buyList;
    }

    service.getBoughtItemsList = function () {
      return boughtList;
    }

    service.buyItem = function (item, itemIndex) {
      buyList.splice(itemIndex,1);
      boughtList.push(item);
    };

    service.getItems = function () {
      return items;
    }

  }



})();
