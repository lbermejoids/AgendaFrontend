

agendaApp.ListContactView = class ListContactView{

	constructor(elementId){
		console.log('View:Contacts:ListContactView:constructor:init');
		this.elementId = elementId;
		console.log("View:Contacts:ListContactView:constructor:elementId: " + this.elementId);
		console.log('View:Contacts:ListContactView:constructor:end');
	}

	updateView(datos){

		console.log('View:Contacts:ListContactView:updateView:datos: =>');			
		console.log(datos);

		this.element = document.getElementById(this.elementId);
		console.log('View:Contacts:ListContactView:updateView:this.element => ');
		console.log( this.element );
		this.element.tBodies.innerHTML="";

		for ( let key in datos){
			
			let row = this.element.insertRow(key);
			let fields = Object.keys(datos[key]);

			console.log(fields);
			
			fields.forEach( field => {
				//console.log("field => ");
				//console.log(field);
				if (field != 'id') {
					let cell = row.insertCell();
					//console.log("cell =>");
					//console.log(cell);

					//console.log("datos[key][field] ");
					//console.log( datos[key][field] );

					let value = datos[key][field];
					if ( typeof value === 'string' ){
						cell.innerHTML = datos[key][field].toUpperCase();	
					}else{
						cell.innerHTML = datos[key][field];
					} 
					
				}
			});
		}
	/*

			var iframe = document.getElementsByTagName('iframe')[0];
			iframe.addEventListener('load', function(event){ console.log("iframe Loaded", event); })
				
			let nodefields = document.querySelectorAll(`[name='${key}']`);

			if( nodefields === null || nodefields === undefined ){
				console.log(`${key}  ${nodefields}`);	
				continue;
			}

		    if (nodefields.length == 1 ) {
				//console.log(nodefields);
				nodefields[0].value = datos[key];
			}	

			else if (nodefields.length > 1) {
				//conversion a array de javascript para usar el metodo find
				const afields = Array.from(nodefields);

				//recorremos los elementos hasta encontrar el que buscamos. 
				//segun el valor en las propiedades del objeto persona
				//find regresa el primer elemento que encuentra
				const correctfield = afields.find( element => {
					return element.value === datos[key];
				});

				correctfield.checked=true;
			}		
		}*/
	}
}




agendaApp.LoginView = class LoginView{
	constructor(elemId){
		this.elem = document.getElementById(elemId);
		console.log('Users.LoginView:constructor');
	}

	loginAppMet(data){

	}
}

agendaApp.RegistroUserView = class RegistroUserView{
	constructor(elemId){
		this.elem = document.getElementById(elemId);
		console.log('Users.RegistroUserView:constructor');
	}

	metodoX(data){

	}

}

agendaApp.RegistroContactView = class RegistroContactView{
	constructor(elemId){
		this.elem = document.getElementById(elemId);
		console.log('Contacts.RegistroContactView:constructor');
	}

	metodoX(data){

	}
}
