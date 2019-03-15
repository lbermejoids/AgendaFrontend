//
agendaApp.ListContacts = class ListContacts{
	
	constructor(endpoint, elementId){	
		this.endpoint = endpoint;
		this.elementId = elementId;
		console.log('Model:ListContacts:constructor: getting object since constructor: ' 
			+ document.getElementById(this.elementId) );
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

			if (this.element === undefined){
				this.element = document.getElementById(this.elementId);
				console.log('Model:ListContacts:updateModel:this.element => ');
				console.log( this.element );
			}

			const onloadData = new CustomEvent("onloadData", { detail: json, bubbles:true} );
			this.element.dispatchEvent(onloadData);

		})
		.catch(console.log)
		console.log('Model:ListContacts:updateModel:end');
	}
}








agendaApp.Login = class Login{
	constructor(){
		console.log('Model:Login:constructor');

	}
}



agendaApp.Contacto = class Contacto{
	constructor(){

	}
}

/*
	private Long id;
	private String nombre;
	private String alias;
	private String apPaterno;
	private String apMaterno;
	private Integer edad;
	private char sexo;	
	private String email;
	private String telefono;
	private String direccion;

*/

agendaApp.Usuario = class Usuario{
	constructor(){

	}
}

/*
	private Long id;
	private String usuario;
	private String nombre;
	private String password;		
	private String email;
*/
