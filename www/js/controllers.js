angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal,$cordovaNativeAudio,$ionicPlatform, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $ionicPlatform.ready(function(){
        //ANIMALES
      $cordovaNativeAudio
        .preloadSimple('cat', 'mp3/animales/cat.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('dog', 'mp3/animales/dog.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('duck', 'mp3/animales/duck.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('horse', 'mp3/animales/horse.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('sheep', 'mp3/animales/sheep.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('turkey', 'mp3/animales/turkey.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });

        //BANDA
      $cordovaNativeAudio
        .preloadSimple('drum', 'mp3/banda/drum.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('flute', 'mp3/banda/flute.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('guitar', 'mp3/banda/guitar.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('trumpet', 'mp3/banda/trumpet.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('violin', 'mp3/banda/violin.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('xylo', 'mp3/banda/xylo.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });

        //COMIC
      $cordovaNativeAudio
        .preloadSimple('appear', 'mp3/comic/appear.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('arrow', 'mp3/comic/arrow.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('cuckoo', 'mp3/comic/cuckoo.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('flee', 'mp3/comic/flee.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('jump', 'mp3/comic/jump.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
      $cordovaNativeAudio
        .preloadSimple('slip', 'mp3/comic/slip.mp3')
        .then(function (msg) {
          console.log(msg);
        }, function (error) {
          alert(error);
        });
  });

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

.controller('PianoCtrl', function($scope, $stateParams,$timeout,$cordovaVibration,$cordovaNativeAudio,$cordovaDevice,$ionicSideMenuDelegate) {
  $ionicSideMenuDelegate.canDragContent(false);

  $scope.TocarPiano=function(carpeta,sonido){
      console.log("/android_asset/www/mp3/"+carpeta+"/"+sonido+".mp3");
    //var src = "";
      $cordovaVibration.vibrate(500);
      $cordovaNativeAudio.play(sonido);
      // src = "/android_asset/www/mp3/"+carpeta+"/"+sonido+".mp3";
      // var media = $cordovaMedia.newMedia(src);
      // media.setVolume(1);
      // media.play();

      // $timeout(function(){
      //   media.release();
      // },1000);
  };
});
