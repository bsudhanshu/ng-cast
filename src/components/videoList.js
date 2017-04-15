angular.module('video-player')

.directive('videoList', function() {

  return {
    // TODO
    scope: {
    	videos: '<',
    	onClick: '<'
    },
    controller: function () {
      this.videos= 'exampleVideoData';
    },
    controllerAs: 'ctrl',
    videos: {{ctrl}}.exampleVideoData,
    bindToController: true,
    template: 'src/templates/videoList.html',    
  };
});
