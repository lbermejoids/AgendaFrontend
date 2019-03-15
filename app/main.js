//
function loadListContact(){
	console.log("callback:loadListContact:init");

	let controller = new agendaApp.ListContactController({
		model: agendaApp.ListContacts,
		view: agendaApp.ListContactView, 
		endpoint: 'http://localhost:8080/api/contactos', 
		contentElememt: 'tbody_contact_table'
	});

	console.log('callback:loadListContact:controller => ');
	console.log(controller);

	controller.model.updateModel();

	console.log("callback:loadListContact:end");	
}









function loadLogin(){
	console.log("callback:loadLogin:init");
	new agendaApp.LoginController({
		model: agendaApp.Login,
		view: agendaApp.LoginView, 
		endpoint: 'http://localhost:8080/api/usuarios/login', 
		contentElememtSelector: '' 
	});	
	
	console.log("callback:loadLogin:end");		
}

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


function loadRegistroContacto(){
	console.log("callback:loadRegistroContacto:init");
	
	new agendaApp.RegistroContactController({
		model: agendaApp.Contacto,
		view: agendaApp.RegistroContactView, 
		endpoint: 'http://localhost:8080/api/contactos', 
		contentElememt: '#contact_form'
	
	});

	console.log("callback:loadRegistroContacto:end");	
}

