const music = new Audio('./sonidos/error.wav');

const botones = document.querySelectorAll(".boton-teclado");
// Definir función y evitar definirla de manera anónima
const cuandoSeHaceClick = function (evento) {
	
	if (texto.textContent.length==1 && this.innerText=="C") {
	  	texto.textContent= texto.textContent+this.innerText;
		}
		else if (texto.textContent.length==1 && this.innerText !="C") {
			texto.textContent= texto.textContent+this.innerText;			
			music.play();
		} else if (texto.textContent.length==2 && this.innerText=="O") {
		texto.textContent= texto.textContent+this.innerText;
		}
	    else if (texto.textContent.length==2 && this.innerText !="O") {
	   	    texto.textContent= texto.textContent+this.innerText;			
			music.play();
		} else if (texto.textContent.length==3 && this.innerText=="C") {
			texto.textContent= texto.textContent+this.innerText;
			}
			else if (texto.textContent.length==3 && this.innerText !="C") {
				   texto.textContent= texto.textContent+this.innerText;			
				music.play();	
		} else if (texto.textContent.length==4 && this.innerText=="A") {
			texto.textContent= texto.textContent+this.innerText;
			const coca = new Audio('./sonidos/coca.ogg');
			coca.play();
			setTimeout(function(){
				const modal= document.getElementById('ganaste');
				const close = document.getElementById('close');
				const sonido = new Audio('./sonidos/ganaste.wav');

				//cambiar las estrellas

				function mostrar() {
					div = document.getElementById('estrella2');
					div.style.display = '';
				};
				function cerrar() {
					div = document.getElementById('estrella1');
					div.style.display = 'none';
				};
				cerrar();
				mostrar();
				
				
				function mostrar2() {
					div = document.getElementById('siguiente');
					div.style.display = '';
				};

				mostrar2();

				modal.setAttribute('open', 'true');
				sonido.play();
				close.addEventListener('click',() => { 
					modal.removeAttribute('open')})
					sonido.stop();
			},1000);		
		}
			else if (texto.textContent.length==4 && this.innerText !="A") {
				texto.textContent= texto.textContent+this.innerText;			
				music.play();
			}	
	}



function clicked(){
	var palabra;
	if (texto.textContent.length==1) {
		console.log(texto.textContent);
		texto.textContent="";	
		console.log("texto.textcontent "+ texto.textContent);	
	} else {
		texto.textContent = texto.textContent.substring(0, texto.textContent.length - 1);
		console.log(texto.textContent + "longitud "+ texto.textContent.length);
	}
}

// botones es un arreglo así que lo recorremos
botones.forEach(boton => {
	//Agregar listener
	boton.addEventListener("click", cuandoSeHaceClick);
});

//document.getElementById("texto").innerHTML = this.innerText;