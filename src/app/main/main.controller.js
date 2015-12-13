(function() {
  'use strict';

  angular
    .module('itunes')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(searchService) {
    var vm = this;

    function validate(){
      vm.isLoading = true;
      searchService.searchMusic(vm.query).then(function(datas){
        vm.songs = datas ;
        vm.errorMsg = '';
        vm.isLoading = false;
      },
      function(msg){
        vm.errorMsg = msg;
        vm.isLoading = false;

      });
    }
    function init() {
      vm.validate = validate;
      vm.errorMsg = '';
      vm.songs = {resultCount:0}
    }
    init();
  }
})();
