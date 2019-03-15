agendaApp.ListContactController = class ListContactController{
	constructor(props) {
		console.log('ListContactController:constructor:init');
		//escucha de eventos
		this.eventHandler();
	
		this.model = new props.model(props.endpoint,props.contentElememt);
		this.view = new props.view(props.contentElememt);

		console.log('ListContactController:constructor:end');
	}

	eventHandler(){
		document.body.addEventListener('onloadData', (event) => {
			console.log(`ListContactController:constructor:eventHandler ${event}`);
			this.view.updateView(event.detail);
		});
	}	
}








//listen for Form submit
//document.getElementById('login_form').addEventListener('submit', loginApp);
agendaApp.LoginController = class LoginController{
	constructor(props) {

		//document.querySelector('#contact_form')
		
	}

	eventHandler(){
	}	

	login(){

	}
}


agendaApp.RegistroUserController = class RegistroUserController{
	constructor(props) {
		
	}

	eventHandler(){
	}	

	registraUsuario(){

	}
}


agendaApp.RegistroContactController = class RegistroContactController{
	constructor(props) {

	}

	eventHandler(){
	}	

	registraContacto(){

	}
}




/*
miVariableGlobal.Controller = class Controller {
	constructor(props) {
		//que escuche los eventos primero antes de crear el model que es el que envia la petición
		this.eventHandler();

		this.model = new props.model(props.endpoint,props.contentElememt);
		this.view = new props.view(props.contentElememt);
	}

	eventHandler(){
		document.body.addEventListener('onloadData', (event) => {
			this.view.updateView(event.detail);
		});
	}

	// TODO: Este metodo debe guardar la informacion enviado del formulario y agregarlo al objeto envios en la propiedad people
	savePerson () {

	}
}*/