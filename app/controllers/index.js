import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		sendEmail(){
			window.swal({
			  title: 'Escribe tu correo para enviarte información',
			  input: 'email',
			  showCancelButton: true,
			  confirmButtonText: 'Enviar',
			  showLoaderOnConfirm: true,
			  preConfirm: (email) => {
			  	return this.store.createRecord('usuario', {
			  		correo: email
			  	}).save()
			  },
			  allowOutsideClick: () => !swal.isLoading()
			}).then((result) => {
				window.swal({
			      type: 'success',
			      title: 'Espera nuestra información pronto',
			      html: 'Correo enviado.'
			    })
			})
		}
	}
});
