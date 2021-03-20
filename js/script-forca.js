	
	var frutas = ['manga', 'goiaba', 'jaca', 'acerola','laranja', 'morango','banana'];
	var animais = ['elefante','gato','cachorro', 'cavalo', 'peixe', 'macaco', 'rinoceronte', 'lagartixa'];
	var objetos = ['tesoura', 'cadeira' ,'espingarda', 'ampulheta', 'vassoura','escada'];
	var esportes =['futebol', 'basquete', 'capoeira', 'corrida', 'escalada','xadrez', 'atleta'];
	var flores = ['rosa', 'margarida', 'girassol'];
	var paises = ['brasil', 'inglaterra', 'alemanha', 'argentina', 'china', 'holanda', 'equador', 'chile',
	 'marrocos','portugal'];
	var categoriaPalavras = [frutas, animais, objetos, esportes, flores, paises];
	var listaPalavras = categoriaPalavras[getRndInteger(0,categoriaPalavras.length-1)];
	var palavra = listaPalavras[getRndInteger(0,listaPalavras.length-1)];		
			
	function getRndInteger(min,max){
		return Math.floor(Math.random()*(max - min + 1)) + min;
	}
	
	document.getElementById("letra-digitada").focus();
	for(i = 0; i < palavra.length; i++){
		var container = document.getElementById("container-palavra");
		var traco = document.createElement('div');
		traco.className = "traco";
		traco.id = "traco"+(i+1);
		container.append(traco);
		var letra_palavra = document.createElement("p");
		letra_palavra.className = "letra_palavra";
		letra_palavra.id = "p"+(i+1);				
		document.getElementById("traco"+(i+1)).append(letra_palavra);				
	}
	const form = document.getElementById("form1");
	form.addEventListener('submit', function(event){
		event.preventDefault();
	})

	var contaAcertos = 0;
	var erros = 0;
	function insere(){
		var x = document.getElementById("letra-digitada").value;
		for(i = 0; i < palavra.length; i++){
			if(palavra.charAt(i) == x && document.getElementById("p"+(i+1)).innerHTML == ''){
				document.getElementById("p"+(i+1)).innerHTML = palavra[i];
				contaAcertos += 1;										
			}
		}

		if(contaAcertos == palavra.length){
			setTimeout(function(){
				document.getElementById("modal").style.display = "flex";
				document.getElementById("playAgain").style.display = "block";				
			}, 550);			
			document.getElementById("msgFinal1").innerHTML = "Você acertou!";
			document.getElementById("msgFinal2").innerHTML = " Parabéns!";
			document.getElementById("form").style.display = "none";			
		}
				
		var er = palavra.indexOf(x);				 
		if(er == -1){					
			document.getElementById("letras-erradas").append(x);			
			erros += 1;					
		}
		
		const campo = document.getElementById("letra-digitada");
		campo.value = '';
			
		document.getElementById("img").src ="img/"+erros+".png";

		if(erros == 6){
			setTimeout(function(){
			for(i = 0; i < palavra.length; i++){			
				document.getElementById("p"+(i+1)).innerHTML = palavra[i];
				document.getElementById("p"+(i+1)).style.color = "#f00";										
			}
			},500);
			setTimeout(function(){
				document.getElementById("modal").style.display = "flex";
				
			}, 450);		
			
			document.getElementById("msgFinal1").innerHTML = "Você perdeu!";
			document.getElementById("msgFinal2").innerHTML = " A palavra era: \""+palavra.toUpperCase()+"\"";
			document.getElementById("form").style.display = "none";
			document.getElementById("playAgain").style.display = "block";
		}					
	}

	function fechaModal(){
		document.getElementById("modal").style.display = "none";
	}

	