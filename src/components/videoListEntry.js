angular.module('video-player')

.controller('entryController', function($scope) {
console.log($scope);
})
.directive('videoListEntry', function() {
  return {
    // TODO

    controller: 'entryController', 
    controllerAs: 'ctrl',
    bindToController: true,
    
    scope: { 
      video: '<'
    }, 
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
