
agendaApp.SearchContactController = class SearchContactController{

	constructor(props) {

		this.searchContactEventHandler();
		this.updateDataContactsEventHandler();
		this.messagesearchContactEventHandler();

		this.formParamElement = props.paramElememt;
		this.model = new props.model(props.endpoint,props.contentElememt);
		this.view = new props.view(props.contentElememt);
		
	}

	searchContactEventHandler(){
		document.body.addEventListener( agendaApp.searchContactAppEventName , (event) => {
			console.log(`SearchContactController:searchContactEventHandler ${event}`);
			this.model.findContactModel(event,this.formParamElement);
		});	
	}

	updateDataContactsEventHandler(){
		document.body.addEventListener( agendaApp.updateSearchContactAppEventName , (event) => {
			console.log(`SearchContactController:updateDataContactsEventHandler ${event}`);
			this.view.updateView(event);
		});	
	}

	messagesearchContactEventHandler(){
		document.body.addEventListener( agendaApp.searchContactoMessageEventName , (event) => {
			console.log(`SearchContactController:messagesearchContactEventHandler ${event}`);
			this.view.showMessageView(event);
		});	
	}
}

agendaApp.RegistroContactController = class RegistroContactController{
	constructor(props) {
		console.log('RegistroContactController:constructor:init');
		//escucha de eventos
		this.messageRegistroEventHandler();
		this.registraContactoEventHandler();
		this.cleanAndCloseContactoEventHandler()
		this.model = new props.model(props.endpoint,props.contentElememt);
		this.view = new props.view(props.contentElememt);
		console.log('RegistroContactController:constructor:end');
	}

	messageRegistroEventHandler(){
		document.body.addEventListener( agendaApp.registroContactoMessageEventName , (event) => {
			console.log(`LoginController:messageRegistroEventHandler ${event}`);
			this.view.showMessageView(event);
		});	
	}

	registraContactoEventHandler(){
		document.body.addEventListener( agendaApp.registroContactoAppEventName , (event) => {
			console.log(`LoginController:registraContactoEventHandler ${event}`);
			this.model.registroContacto();
		});
	}

	cleanAndCloseContactoEventHandler(){
		document.body.addEventListener( agendaApp.registroContactoCleanEventName , (event) => {
			console.log(`LoginController:cleanAndCloseContactoEventHandler ${event}`);
			this.view.cleanForm();
		});
	}
}

agendaApp.ListContactController = class ListContactController{
	constructor(props) {
		console.log('ListContactController:constructor:init');
		//escucha de eventos
		this.loadEventHandler();
		this.refreshEventHandler();
		this.deleteContactEventHandler();
		this.model = new props.model(props.endpoint,props.contentElememt);
		this.view = new props.view(props.contentElememt);
		console.log('ListContactController:constructor:end');
	}

	loadEventHandler(){
		document.body.addEventListener( agendaApp.loadDataContactEventName , (event) => {
			console.log(`ListContactController:loadEventHandler ${event}`);
			this.view.updateView(event.detail);
		});
	}

	refreshEventHandler(){
		document.body.addEventListener( agendaApp.refreshDataContactEventName , (event) => {
			console.log(`ListContactController:refreshEventHandler ${event}`);
			this.model.updateModel();
		});
	}

	deleteContactEventHandler(){
		document.body.addEventListener( agendaApp.deleteDataContactEventName , (event) => {
			console.log(`ListContactController:deleteContactEventHandler ${event}`);
			this.model.deleteContact(event);
		});
	}

}

agendaApp.LoginController = class LoginController{
	constructor(props) {
		console.log('LoginController:constructor:init');
		
		this.loginEventHandler();
		this.messageLoginEventHandler();
		this.model = new props.model(props.endpoint,props.contentElememt);
		this.view = new props.view(props.contentElememt);

		console.log('LoginController:constructor:end');
	}

	loginEventHandler(){
		document.body.addEventListener( agendaApp.loginAppEventName , (event) => {
			console.log(`LoginController:loginEventHandler ${event}`);
			this.model.login();
		});
	}

	messageLoginEventHandler(){
		document.body.addEventListener( agendaApp.loginMessageEventName , (event) => {
			console.log(`LoginController:messageLoginEventHandler ${event}`);
			this.view.showMessageView(event);
		});	
	}
}

//=========================================================================================================

agendaApp.RegistroUserController = class RegistroUserController{
	constructor(props) {
		
	}

	eventHandler(){
	}	

	registraUsuario(){

	}
}



