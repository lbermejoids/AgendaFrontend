function loadWelcome(callback){
	
	console.log('nav:loadWelcome');

	let pageFileRequest = new XMLHttpRequest();
	pageFileRequest.open("GET", "./app/welcome.html", true);
	pageFileRequest.onreadystatechange = function() {
		if (pageFileRequest.readyState === 4) {  	// Makes sure the document is ready to parse.
    		if (pageFileRequest.status === 200) {   // Makes sure it's found the file.
      			//allText = pageFileRequest.responseText; 
      			//lines = pageFileRequest.responseText.split("\n"); // Will separate each line into an array
				//containerElement.innerHTML = pageFileRequest.responseText;
				//containerElement.insertAdjacentHTML('afterbegin', pageFileRequest.responseText);
				let containerElement = document.getElementById('container');
				containerElement.innerHTML="";
				let contentElement = document.createElement('main');
				contentElement.innerHTML = pageFileRequest.responseText;
				containerElement.appendChild(contentElement);
    		}
  		}
	}	
	pageFileRequest.send(null);
	console.log('nav:agendaApp.usersession: '+ agendaApp.usersession);
	callback(); //callback sincrono
}




function loadLogin(){
	console.log("nav:loadLogin");	

	let txtFile = new XMLHttpRequest();
	txtFile.open("GET", "./app/login.html", true);
	txtFile.onreadystatechange = function() {
		if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    		if (txtFile.status === 200) {  // Makes sure it's found the file.
      			allText = txtFile.responseText; 
      			//lines = txtFile.responseText.split("\n"); // Will separate each line into an array
      			var customTextElement = document.getElementById('container');
				customTextElement.innerHTML = txtFile.responseText;
    		}
  		}
	}	
	txtFile.send(null);

	console.log('nav:agendaApp.usersession: '+agendaApp.usersession);

}


function loadUserRegistry(){

	console.log('nav:loadUserRegistry');

	let txtFile = new XMLHttpRequest();
	txtFile.open("GET", "./app/usuarios/registro.html", true);
	txtFile.onreadystatechange = function() {
		if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
    		if (txtFile.status === 200) {  // Makes sure it's found the file.
      			allText = txtFile.responseText; 
      			//lines = txtFile.responseText.split("\n"); // Will separate each line into an array
      			var customTextElement = document.getElementById('container');
				customTextElement.innerHTML = txtFile.responseText;
    		}
  		}
	}	
	txtFile.send(null);
	
	console.log('nav:agendaApp.usersession: '+agendaApp.usersession);
}

function loginApp(){
	console.log('nav:loginApp');
	//e.preventDefault();
	agendaApp.usersession="ok";

	console.log('nav:agendaApp.usersession: '+agendaApp.usersession);
	onloadApp();
}


