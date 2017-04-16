angular.module('video-player')

.controller('listController', function($scope) {

})
.directive('videoList', function() {

  return {
    // TODO
    
    controller: 'listController', 
    controllerAs: 'ctrl',
    bindToController: true,
    
    scope: { 
      videos: '<',
      onClick: '<'
    }, 
    templateUrl: 'src/templates/videoList.html'  
  };
});
