angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal,$ionicPopup,$cordovaNativeAudio,$ionicPlatform, $timeout, UsuarioSecuencia) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $ionicPlatform.ready(function(){
        //ANIMALES
       // if($ionicPlatform.isAndroid){
      // $cordovaNativeAudio
      //   .preloadSimple('cat', 'mp3/animales/cat.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('dog', 'mp3/animales/dog.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('duck', 'mp3/animales/duck.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('horse', 'mp3/animales/horse.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('sheep', 'mp3/animales/sheep.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('turkey', 'mp3/animales/turkey.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });

      //   //BANDA
      // $cordovaNativeAudio
      //   .preloadSimple('drum', 'mp3/banda/drum.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('flute', 'mp3/banda/flute.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('guitar', 'mp3/banda/guitar.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('trumpet', 'mp3/banda/trumpet.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('violin', 'mp3/banda/violin.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('xylo', 'mp3/banda/xylo.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });

      //   //COMIC
      // $cordovaNativeAudio
      //   .preloadSimple('appear', 'mp3/comic/appear.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('arrow', 'mp3/comic/arrow.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('cuckoo', 'mp3/comic/cuckoo.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('flee', 'mp3/comic/flee.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('jump', 'mp3/comic/jump.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      // $cordovaNativeAudio
      //   .preloadSimple('slip', 'mp3/comic/slip.mp3')
      //   .then(function (msg) {
      //     console.log(msg);
      //   }, function (error) {
      //     alert(error);
      //   });
      //}
  });

$scope.UsuarioSecuencia = UsuarioSecuencia;

$ionicPlatform.registerBackButtonAction(function (event) {
    // $cordovaNativeAudio.unload('cat');
    // $cordovaNativeAudio.unload('dog');
    // $cordovaNativeAudio.unload('duck');
    // $cordovaNativeAudio.unload('horse');
    // $cordovaNativeAudio.unload('sheep');
    // $cordovaNativeAudio.unload('turkey');
    // $cordovaNativeAudio.unload('drum');
    // $cordovaNativeAudio.unload('flute');
    // $cordovaNativeAudio.unload('guitar');
    // $cordovaNativeAudio.unload('trumpet');
    // $cordovaNativeAudio.unload('violin');
    // $cordovaNativeAudio.unload('xylo');
    // $cordovaNativeAudio.unload('appear');
    // $cordovaNativeAudio.unload('arrow');
    // $cordovaNativeAudio.unload('cuckoo');
    // $cordovaNativeAudio.unload('flee');
    // $cordovaNativeAudio.unload('jump');
    // $cordovaNativeAudio.unload('slip');
    navigator.app.exitApp(); //<-- remove this line to disable the exit
  }, 100);

  // Form data for the login modal
  $scope.loginData = {};
  $scope.registerData = {};
  $scope.isLogged = false;
  $scope.modalState = 'Login';

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
    $scope.modalState = 'Login';
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    firebase.auth().signInWithEmailAndPassword($scope.loginData.username, $scope.loginData.password)
      .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.info("ERROR " + errorCode, errorMessage);
      // ...
    }).then(function(success){
      console.info("SUCCESS",success);
      $timeout(function(){
        if(success){
          if(firebase.auth().currentUser.emailVerified){
            $scope.isLogged = true;
          }else{
            firebase.auth().currentUser.sendEmailVerification().then(function(){
               var alertPopup = $ionicPopup.alert({
                 title: 'Verificacion de Email',
                 template: 'Se ha enviado un mail para verificar la direccion del usuario'
               });

               alertPopup.then(function(res) {
                 console.log('Alert de Verificacion cerrado');
               });
            },function(error){
              console.info("Verification error",error);
            });
            
          }
        }else{
          $scope.isLogged = false;
        }
      },100);
    });

    console.log('Doing login', $scope.loginData);
    UsuarioSecuencia.login($scope.loginData.username);
  };

  $scope.doRegister = function(){
      firebase.auth().createUserWithEmailAndPassword($scope.registerData.username, $scope.registerData.password)
      .then(function(respuesta) {
        console.info("Success Register",respuesta);
        console.log(firebase.auth().currentUser);
        if(!respuesta.emailVerified){
          firebase.auth().currentUser.sendEmailVerification().then(function(){
               var alertPopup = $ionicPopup.alert({
                 title: 'Verificacion de Email',
                 template: 'Se ha enviado un mail para verificar la direccion del usuario'
               });

               alertPopup.then(function(res) {
                 console.log('Alert de Verificacion cerrado');
               });
            },function(error){
              console.info("Verification error",error);
            });
        }
      }, function(error) {
        console.info("Error Register",error);
        var alertPopup = $ionicPopup.alert({
           title: 'Register Error',
           template: error.message
         });
      });
  }

  $scope.resetPassword = function(){
      firebase.auth().sendPasswordResetEmail($scope.loginData.username).then(function(respuesta) {
        // Email sent.
        console.info("Success Reset",respuesta);
      }, function(error) {
        // An error happened.
        console.info("Error Reset",error);
      });
  };

  $scope.goToRegister = function(){
    $timeout(function(){
      $scope.modalState = 'Register';
    },100);
  };

  $scope.goToLogin = function(){
    $timeout(function(){
      $scope.modalState = 'Login';
    },100);
  };

  $scope.doLogout = function(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("LOG OUT SUCCESS");
      $timeout(function(){
          $scope.isLogged = false;
      },100);
    }, function(error) {
      console.info("ERROR LOGOUT",error);
    });
  };
})

.controller('AutorCtrl', function($scope, $stateParams,$cordovaInAppBrowser) {
  var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };

  $scope.OpenGitHub=function(){
    $cordovaInAppBrowser.open('https://github.com/marcosmurcia92/', '_self', options)
      .then(function(event) {
        // success
      })
      .catch(function(event) {
        // error
      });
  };
})

.controller('PianoCtrl', function($scope, $stateParams,$timeout,$ionicPlatform,$cordovaVibration,$cordovaNativeAudio,$cordovaDevice,$ionicSideMenuDelegate,UsuarioSecuencia,$interval,$ionicPopup,$cordovaFile) {
  $ionicSideMenuDelegate.canDragContent(false);

  $scope.UsuarioSecuencia = UsuarioSecuencia;

  $scope.TocarPiano=function(carpeta,sonido){
      console.log("/android_asset/www/mp3/"+carpeta+"/"+sonido+".mp3");
    //var src = "";
      UsuarioSecuencia.setSequence(sonido);
      //if($ionicPlatform.isAndroid){
        $cordovaVibration.vibrate(500);
        $cordovaNativeAudio.play(sonido);
      //}
      // src = "/android_asset/www/mp3/"+carpeta+"/"+sonido+".mp3";
      // var media = $cordovaMedia.newMedia(src);
      // media.setVolume(1);
      // media.play();

      // $timeout(function(){
      //   media.release();
      // },1000);
  };

  $scope.BorrarSecuencia=function(idx){
      UsuarioSecuencia.removeSequence(idx);
  };

  $scope.Reproducir=function(cargar){
      var idx = 0;
      UsuarioSecuencia.setPlaying(true);
      if(cargar){
        $cordovaFile.checkDir(cordova.file.externalApplicationStorageDirectory, "files/"+UsuarioSecuencia.getName())
          .then(function (success) {
            console.info("SUCCESS CHECK DIR",success);
            $cordovaFile.checkFile(cordova.file.externalApplicationStorageDirectory, "files/"+UsuarioSecuencia.getName()+"/Secuencia.txt")
              .then(function (success) {
                console.info("SUCCESS CHECK FILE",success);
                $cordovaFile.readAsText(cordova.file.externalApplicationStorageDirectory, "files/"+UsuarioSecuencia.getName()+"/Secuencia.txt")
                  .then(function (success) {
                      console.info("SUCCESS READ FILE",success);
                      var usuarioJson = JSON.parse(success);
                      var splitArray = usuarioJson.secuencia.split("-");
                      for (var i = 0; i < splitArray.length; i++) {
                        UsuarioSecuencia.setSequence(splitArray[i]);
                      };
                  }, function (error) {
                      console.info("ERROR READ FILE",error);
                  });
              }, function (error) {
                console.info("ERROR CHECK FILE",error);
              });
          }, function (error) {
            console.info("ERROR CHECK DIR",error);
          });
      }

      $interval(function(){
        $cordovaNativeAudio.play(UsuarioSecuencia.getSecuencia()[idx]);
        idx++;
        if(idx == 6){
          UsuarioSecuencia.setPlaying(false);
        }
      },1000,6);
  };

  $scope.Grabar=function(){
      console.log(UsuarioSecuencia.getSecuenciaString());
      //if($ionicPlatform.isAndroid){
          $cordovaFile.checkDir(cordova.file.externalApplicationStorageDirectory, "files/"+UsuarioSecuencia.getName())
          .then(function (success) {

            console.info("SUCCESS CHECK",success);
            $cordovaFile.writeFile(cordova.file.externalApplicationStorageDirectory, "files/"+UsuarioSecuencia.getName()+"/Secuencia.txt", UsuarioSecuencia.getSecuenciaString(), true)
              .then(function (success) {

                console.info("SUCCESS WRITE",success);
                $cordovaFile.readAsText(cordova.file.externalApplicationStorageDirectory, "files/"+UsuarioSecuencia.getName()+"/Secuencia.txt")
                  .then(function (success) {
                      console.info("SUCCESS READ FILE",success);
                     var alertPopup = $ionicPopup.alert({
                       title: 'Objeto JSON Guardado!',
                       template: success
                     });
                  }, function (error) {
                      console.info("ERROR READ FILE",error);
                      var alertPopup = $ionicPopup.alert({
                       title: 'Error al Guardar JSON',
                       template: error
                     });
                  });
              }, function (error) {

                console.info("ERROR WRITE",error);

              });

          }, function (error) {

            console.info("ERROR CHECK",error);
            $cordovaFile.createDir(cordova.file.externalApplicationStorageDirectory, "files/"+UsuarioSecuencia.getName(), false)
            .then(function (success) {

              console.info("SUCCESS CREATE",success);
              $cordovaFile.writeFile(cordova.file.externalApplicationStorageDirectory, "files/"+UsuarioSecuencia.getName()+"/Secuencia.txt", UsuarioSecuencia.getSecuenciaString(), true)
              .then(function (success) {

                console.info("SUCCESS WRITE",success);
                $cordovaFile.readAsText(cordova.file.externalApplicationStorageDirectory, "files/"+UsuarioSecuencia.getName()+"/Secuencia.txt")
                  .then(function (success) {
                      console.info("SUCCESS READ FILE",success);
                     var alertPopup = $ionicPopup.alert({
                       title: 'Objeto JSON Guardado!',
                       template: success
                     });
                  }, function (error) {
                      console.info("ERROR READ FILE",error);
                      var alertPopup = $ionicPopup.alert({
                       title: 'Error de JSON',
                       template: error
                     });
                  });
              }, function (error) {

                console.info("ERROR WRITE",error);

              });

            }, function (error) {

              console.info("ERROR CREATE",error);

            });

          });
      //}
  };
});
