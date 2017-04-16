angular.module('video-player')

.controller('playerController', function($scope) {
  this.videoUrl = () => {
    return this.video ? `https://www.youtube.com/embed/${this.video.id.videoId}` : '';
  }
})
.directive('videoPlayer', function() {
  return {

    restrict: 'E',
    controller: 'playerController',
    controllerAs: 'ctrl',
    bindToController: true, 
   
    scope: {
      video: '<'
    },

    templateUrl: 'src/templates/videoPlayer.html'
  };
});
