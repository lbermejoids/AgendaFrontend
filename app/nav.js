
function loadWelcome(){
	console.log('nav:loadWelcome:init');
	console.log('nav:agendaApp.usersession: '+ agendaApp.usersession);

	loadPageFile("./app/welcome.html",agendaApp.containerElemTarget);	

	agendaApp.listContactControllerInst = new agendaApp.ListContactController({
		model: agendaApp.ListContactsModel,
		view: agendaApp.ListContactView, 
		endpoint: 'http://localhost:8080/api/contactos', 
		contentElememt: getElemId('tbody_contact_table')
	});	

	var hrefElement = document.getElementById("contact_href");
	hrefElement.addEventListener( 'click', function(e) {
		e.preventDefault(); //stop redirect browser //console.log( e);
	    this.dispatchEvent( new CustomEvent(agendaApp.refreshDataContactEventName, {bubbles:true} ));
	});
	
	registroContactoHandler();
	busquedaContactoHandler();

	console.log('nav:loadWelcome:end');
}

function loadLogin(){
	console.log("nav:loadLogin:init");	
	loadPageFile("./app/login.html",agendaApp.containerElemTarget);	
	console.log('nav:agendaApp.usersession: '+ agendaApp.usersession);

	agendaApp.loginControllerInst = new agendaApp.LoginController({
		model: agendaApp.LoginModel,
		view: agendaApp.LoginView, 
		endpoint: 'http://localhost:8080/api/usuarios/login', 
		contentElememt: getElemId("login_form") 
	});	

	console.log("nav:loadLogin:end");	
}


function registroContactoHandler(){
	console.log("callback:loadRegistroContacto:init");
	
	agendaApp.registroContactControllerInst = new agendaApp.RegistroContactController({
		model: agendaApp.ContactoModel,
		view: agendaApp.RegistroContactView, 
		endpoint: 'http://localhost:8080/api/contactos', 
		contentElememt: getElemId("add_contact_form")
	});

	console.log("callback:loadRegistroContacto:end");	
}

function busquedaContactoHandler(){
	console.log("callback:loadRegistroContacto:init");
	
	agendaApp.searchContactControllerInst = new agendaApp.SearchContactController({
		model: agendaApp.SearchContactsModel,
		view: agendaApp.SearchContactView, 
		endpoint: 'http://localhost:8080/api/contactos/find/', 
		//contentElememt: getElemId("search_contact_form")
		contentElememt: getElemId("tbody_contact_table"),
		paramElememt: getElemId("search_contact_form")
	});

	console.log("callback:loadRegistroContacto:end");	
}

function loadPageFile(url,targetId){
	let pageFileRequest = new XMLHttpRequest();
	pageFileRequest.open("GET", url, false);	//async: true (asynchronous) or false (synchronous)
	pageFileRequest.onreadystatechange = function() {
		if (pageFileRequest.readyState === 4) {  	// Makes sure the document is ready to parse.
													// request finished and response is ready
    		if (pageFileRequest.status === 200) {   // Makes sure it's found the file.
    												//200: "OK"
				let containerElement = document.getElementById(targetId);
				containerElement.innerHTML="";
				var fragment = document.createDocumentFragment();
				//[TODO] usar document fragment
				let contentElement = document.createElement('main');
				contentElement.innerHTML = pageFileRequest.responseText;
				//contentElement.textContent = pageFileRequest.responseText;
				//containerElement.appendChild(contentElement);	
				fragment.appendChild(contentElement);
				containerElement.appendChild(fragment);
				
    		}
  		}
	}	
	pageFileRequest.send(null);
}


function throwDeleteEvent(element, detail ){
	element.dispatchEvent(new CustomEvent(agendaApp.deleteDataContactEventName, { detail: detail, bubbles:true} ) );
} 

function loadUserRegistry(){
	console.log('nav:loadUserRegistry');
	loadPageFile("./app/usuarios/registro.html",agendaApp.containerElemTarget);	
	console.log('nav:agendaApp.usersession: '+agendaApp.usersession);
}


/*
function loadRegistroUsuario(){
	console.log("callback:loadRegistroUsuario:init");
	new agendaApp.RegistroUserController({
		model: agendaApp.Usuario,
		view: agendaApp.RegistroUserView, 
		endpoint: 'http://localhost:8080/api/usuarios', 
		contentElememt: '#contact_form'
	});	
	console.log("callback:loadRegistroUsuario:end");	
}
*/


//=========================================================================================================

/*
function loginApp(){
	console.log('nav:loginApp');
	//e.preventDefault();
	agendaApp.usersession= true;

	console.log('nav:agendaApp.usersession: '+agendaApp.usersession);
	onloadApp();
}
*/

