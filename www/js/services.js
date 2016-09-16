angular.module('starter.services', [])

.factory('BlankFactory', [function(){

}])

.factory('UsuarioSecuencia', [function(){
	var userName = '';
	var secuencia = [];

	return{
		login:function(user){
			userName = user;
		},
		setSequence:function(sequence){
			if(secuencia.length < 6){
				secuencia.push(sequence);
			}else{
				for (var i = 0; i < secuencia.length; i++) {
					if((i+1) < secuencia.length){
						secuencia[i] = secuencia[i+1];
					}else{
						secuencia[i] = sequence;
					}
				};
			}
		},
		removeSequence:function(index){
			if(index < secuencia.length){
				secuencia.splice(index,1);
			}
		},
		getName:function(){
			return userName;
		},
		getSecuencia:function(){
			return secuencia;
		},
		getSecuenciaString:function(){
			var resString = "";
			for (var i = 0; i < secuencia.length; i++) {
				resString = resString + secuencia[i];
				if((i+1) < secuencia.length){
					resString = resString + "-";
				}
			};
			return resString;
		}
	};
}])

.service('BlankService', [function(){

}]);