angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal,$ionicPlatform, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope,
    backdropClickToClose: false
  }).then(function(modal) {
    $scope.modal = modal;
    $scope.login();
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 500);
  };
})

.controller('AutorCtrl', function($scope, $stateParams) {

})

.controller('PianoCtrl', function($scope, $stateParams,$cordovaVibration,$cordovaMedia,$cordovaDevice,$ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.canDragContent(false);


  $scope.TocarPiano=function(carpeta,sonido){
      console.log("/android_asset/www/mp3/"+carpeta+"/"+sonido+".mp3");
    var src = "";
      $cordovaVibration.vibrate(500);
      src = "/android_asset/www/mp3/"+carpeta+"/"+sonido+".mp3";
      var media = $cordovaMedia.newMedia(src);
      media.setVolume(1);
      media.play();

      $timeout(function(){
        media.release();
      },1000);
  };
});
