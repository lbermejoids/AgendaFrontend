var agendaApp = {};
agendaApp.containerElemTarget = "container";

agendaApp.loadDataContactEventName = "onloadDataContactsEvent";
agendaApp.refreshDataContactEventName = "refreshDataContactsEvent";
agendaApp.deleteDataContactEventName = "deleteDataContactEvent";

agendaApp.loginAppEventName = "loginAppEvent";
agendaApp.loginMessageEventName = "loginMessageEvent";

agendaApp.registroContactoAppEventName = "registroContactoAppEvent";
agendaApp.registroContactoMessageEventName = "registroContactoMessageEvent";
agendaApp.registroContactoCleanEventName = "registroContactoCleanEvent";

agendaApp.searchContactAppEventName = "searchContactAppEvent";
agendaApp.updateSearchContactAppEventName = "updateSearchContactAppEvent";
agendaApp.searchContactoMessageEventName = "searchContactoMessageEvent";

agendaApp.registroUsuarioAppEventName = "registroUsuarioAppEvent";
agendaApp.registroUsuarioMessageEventName = "registroUsuarioMessageEvent";

function onloadApp(){
	console.log("index:onloadApp"); 
	if(agendaApp.usersession === undefined ){
    	console.log("index => load login ...");
        loadLogin();
    }else  {
        console.log("index => load welcome ...");
        loadWelcome();
    }
}

function getElemId(id){
	let containerElement = document.getElementById(id);
	console.log(`main:getElemId:containerElement: => ${containerElement} with id: ${id}`);	
	return containerElement;
}

function trimData(val){
		if (val === undefined || val === null || val === ''){
			return undefined;
		}
		return val.trim();
}

//Custom Elements... elemento global. regla - 
customElements.define('mi-submit-btn', class extends HTMLElement{
	constructor(){ 
		super();
		this.addEventListener('click', (e)=> {  //escucha de evento click
			console.log("click en componente mi-submit-btn");				
			//e.preventDefault();
			this.submit(); //referencia al propio elemento en el dom (instancia de la clase)
		});	
	}

	get eventFire(){
		//console.log( 'get eventFire method');
		if(this.hasAttribute('eventFire')){
			return this.getAttribute('eventFire');
		}else{
			return undefined;
		}
	}

	set eventFire(value){
		console.log( 'set eventFire' + value );
		if(value){
			this.setAttribute('eventFire', '');
		}else{
			this.removeAttribute('eventFire');
		}
	}

	submit(){
		const eventName = this.eventFire;	
		console.log( 'submit : this.eventFire : '+ eventName);	
		this.dispatchEvent( new CustomEvent(eventName, {bubbles:true} ));
	}
});

