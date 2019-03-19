
agendaApp.SearchContactView = class SearchContactView{

	constructor(elem){
		this.element = elem;
		console.log('View:Contacts:SearchContactView:constructor');
	}

	showMessageView(data){
		alert(data.detail);
	}

	updateView(datos){	

		//limpiar tabla
		var arrOldElem = Array.from(this.element.getElementsByTagName('tr') ); //HTMLCollection let arry = [...htmlCollection] 
		arrOldElem.forEach(function(e){e.remove()});

		//[TODO] Ordenear alfabeticamente.
		for ( let key in datos.detail ){
			
			let row = this.element.insertRow(key);
			let fields = Object.keys(datos.detail[key]);
			
			let idElem;
			fields.forEach( field => {
				//console.log("field => ");
				//console.log(field);
				if (field != 'id') {
					let cell = row.insertCell();
					//console.log("cell =>");
					//console.log(cell);

					//console.log("datos[key][field] ");
					//console.log( datos[key][field] );

					let value = datos.detail[key][field];
					if ( typeof value === 'string' ){
						cell.innerHTML = value.toUpperCase();	
					}else{
						cell.innerHTML = value;
					} 	
				}else{
					idElem = datos.detail[key][field];
				}
			});

			let cellEliminar = row.insertCell();
			cellEliminar.innerHTML = `<a href='#' onclick=\"throwDeleteEvent(this, ${idElem})\">Eliminar</a>`;

		}
		
	}

}

agendaApp.RegistroContactView = class RegistroContactView{
	constructor(elem){
		this.elem = elem;
		console.log('View:Contacts:RegistroContactView:constructor');
	}
	showMessageView(data){
		alert(data.detail);
	}

	cleanForm(){
		//console.log('clean and close dialog');
		this.elem.reset();
		document.getElementById('dialog-1').removeAttribute('open');
	}
}

agendaApp.LoginView = class LoginView{
	constructor(elem){
		this.elem = elem;
		console.log('View:LoginView:constructor');
	}
	showMessageView(data){
		alert(data.detail);
	}
}

agendaApp.ListContactView = class ListContactView{
	constructor(element){
		console.log('View:Contacts:ListContactView:constructor:init');
		this.element = element;
		console.log('View:Contacts:ListContactView:constructor:end');
	}

	updateView(datos){

		//console.log('View:Contacts:ListContactView:updateView:datos: =>');			
		//console.log(datos);

		//limpiar tabla
		var arrOldElem = Array.from(this.element.getElementsByTagName('tr') ); //HTMLCollection let arry = [...htmlCollection] 
		arrOldElem.forEach(function(e){e.remove()});

		//[TODO] Ordenear alfabeticamente.
		for ( let key in datos){
			
			let row = this.element.insertRow(key);
			let fields = Object.keys(datos[key]);
			//console.log(fields);
			let idElem;
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
						cell.innerHTML = value.toUpperCase();	
					}else{
						cell.innerHTML = value;
					} 	
				}else{
					idElem = datos[key][field];
				}
			});

			let cellEliminar = row.insertCell();
			cellEliminar.innerHTML = `<a href='#' onclick=\"throwDeleteEvent(this, ${idElem})\">Eliminar</a>`;
		}				
						
		this.cleanForm();
	}

	cleanForm(){		
		document.getElementById('search_contact_form').reset();
	}
}


agendaApp.RegistroUserView = class RegistroUserView{
	constructor(elem){
		this.elem = elem;
		console.log('Users.RegistroUserView:constructor');
	}
	showMessageView(data){
		alert(data.detail);
	}
}


