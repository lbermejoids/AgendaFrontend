
agendaApp.SearchContactsModel = class SearchContactsModel{
	
	constructor(endpoint, element){	
		this.endpoint = endpoint;
		this.element = element; //tabla
	}

	findContactModel(event,form){
		console.log('Model:SearchContactsModel:findContactModel:init');
		console.log(form.name.value);
		const nameData = form.name.value;
		

		if( trimData(nameData) === undefined ){
			
			this.element.dispatchEvent( 
				new CustomEvent(agendaApp.searchContactoMessageEventName, 
					{ detail: 'Complete el campo de nombre correctamente para la busqueda.', 
					bubbles:true} ));
			form.reset();

		}else{

			fetch(this.endpoint + nameData)
			.then(response => {
				if ( response.status != 200 ){ //no autorizado
					this.element.dispatchEvent( 
						new CustomEvent(agendaApp.searchContactoMessageEventName, 
							{ detail: 'Ocurrió un error en la busqueda de contactos.', bubbles:true} ));
				}else{
					return response.json();	
				}
			})
			.then( json => {					
				console.log('Model:SearchContactsModel:findContactModel:json: => ' );
				console.log( json );
				this.element.dispatchEvent( 
					new CustomEvent(agendaApp.updateSearchContactAppEventName, 
						{ detail: json, bubbles:true} ));
			})
			.catch(console.log)
		}		
		console.log('Model:SearchContactsModel:findContactModel:end');
	}
}

agendaApp.ContactoModel = class ContactoModel{
	constructor(endpoint, element){
		console.log('Model:ContactoModel:constructor');
		this.endpoint = endpoint;
		this.element = element;
	}

	registroContacto(){
		console.log(" ContactoModel:registroContacto:init");
		const aliasData = trimData(this.element.elements["alias"].value);
		const nameData = trimData(this.element.elements["name"].value);
		const appaternoData = trimData(this.element.elements["appaterno"].value);
		const apmaternoData = trimData(this.element.elements["apmaterno"].value);
		const edadData = trimData(this.element.elements["edad"].value);
		const sexoData = trimData(this.element.elements["sexo"].value);
		const emailData = trimData(this.element.elements["email"].value);
		const telefonoData = trimData(this.element.elements["telefono"].value);
		const direccionData = trimData(this.element.elements["direccion"].value);

		if( aliasData === undefined 
			|| nameData === undefined 
			|| appaternoData === undefined 
			|| apmaternoData === undefined 
			|| edadData === undefined 
			|| sexoData === undefined 
			|| emailData === undefined 
			|| telefonoData === undefined 
			|| direccionData === undefined ){
			
			this.element.dispatchEvent( 
				new CustomEvent( agendaApp.registroContactoMessageEventName, 
					{ detail: 'Complete los campos del contacto correctamente.', 
					bubbles:true} ));
		}else{

			fetch(this.endpoint,{
				method: "post",
				body: JSON.stringify({
					  "alias": aliasData,
					  "apMaterno": apmaternoData,
					  "apPaterno": appaternoData,
					  "direccion": direccionData,
					  "edad": Number(edadData),
					  "email": emailData,
					  "nombre": nameData,
					  "sexo": sexoData.charAt(0),
					  "telefono": telefonoData
					}),
				headers: {
				    "Content-Type": "application/json"
				}
			})
			.then(response => {
				console.log(response);
				if ( response.status === 200){ 	
					return response.json();	
				}else if( response.status === 409){ 
					this.element.dispatchEvent( 
					new CustomEvent(agendaApp.registroContactoMessageEventName, 
						{ detail: 'Contacto registrado previamente.', bubbles:true} ));
				}else{
					console.log(response);
					this.element.dispatchEvent( 
					new CustomEvent(agendaApp.registroContactoMessageEventName, 
						{ detail: 'Error al registrar un nuevo contacto.', bubbles:true} ));	
				}
			})
			.then( json => {					
				console.log('Model:LoginModel:login:json: => ' );
				console.log( json );

				//update tabla de contactos
				this.element.dispatchEvent( new CustomEvent(agendaApp.refreshDataContactEventName, {bubbles:true} ));
				//clean and close dialog
				this.element.dispatchEvent( new CustomEvent(agendaApp.registroContactoCleanEventName, {bubbles:true} ));
			})
			.catch(console.log)
		}
		console.log(" ContactoModel:registroContacto:init");
	}
}

agendaApp.LoginModel = class LoginModel{
	constructor(endpoint, element){
		console.log('Model:LoginModel:constructor');
		this.endpoint = endpoint;
		this.element = element;
	}

	login(){
		console.log(" LoginModel:login:init");
		const userData = this.element.elements["user"].value;
		const pawdData = this.element.elements["passwd"].value;
		
		if( trimData(userData) === undefined 
			|| trimData(pawdData) === undefined ){
			
			this.element.dispatchEvent( 
				new CustomEvent(agendaApp.loginMessageEventName, 
					{ detail: 'Complete los campos usuario/password correctamente.', 
					bubbles:true} ));
		}else{

			//let data = new FormData();
			//data.append('usuario',userData);
			//data.append('password',pawdData);
			//console.log(data);
			//console.log(JSON.stringify(data));

			fetch(this.endpoint,{
				method: "post",
				//body: JSON.stringify(data),
				body: JSON.stringify({
					  "password": pawdData,
					  "usuario": userData
					}),
				headers: {
				    "Content-Type": "application/json"
				}
			})
			.then(response => {
				console.log(response);
				if ( response.status === 401){ //no autorizado
					this.element.dispatchEvent( 
					new CustomEvent(agendaApp.loginMessageEventName, 
						{ detail: 'Usuario y/o password incorrectos.', 
						bubbles:true} ));
				}else{
					return response.json();	
				}
			})
			.then( json => {					
				console.log('Model:LoginModel:login:json: => ' );
				console.log( json );
				loadWelcome();
			})
			.catch(console.log)
		}
		console.log(" LoginModel:login:end");
	}	
}

agendaApp.ListContactsModel = class ListContactsModel{
	
	constructor(endpoint, element){	
		this.endpoint = endpoint;
		this.element = element;
		this.updateModel();
	}

	updateModel(){
		console.log('Model:ListContacts:updateModel:init');
				
		fetch(this.endpoint)
		.then(response => {
			return response.json();
		})
		.then( json => {					

			console.log('Model:ListContacts:updateModel:json: => ' );
			console.log( json );

			const onloadDataEvent = 
				new CustomEvent(agendaApp.loadDataContactEventName, { detail: json, bubbles:true} );
			this.element.dispatchEvent(onloadDataEvent);

		})
		.catch(console.log)

		console.log('Model:ListContacts:updateModel:end');
	}

	deleteContact(event){
		
		var r = confirm("¿Confirme que desea eliminar el registro?");
		if (r == true) {
			const url = "http://localhost:8080/api/contactos/";			  	
			fetch(url+event.detail ,{
				method: "delete",
				headers: {
				    "Content-Type": "application/json"
				}	
			}).then(response => {
				return response.status//response.json(); 
			})
			.then( status => {					

				 this.element.dispatchEvent( 
				 	new CustomEvent(agendaApp.refreshDataContactEventName, {bubbles:true} ));

			})
			.catch(console.log)


		} 
	}

}

agendaApp.UsuarioModel = class UsuarioModel{
	constructor(){

	}
}

