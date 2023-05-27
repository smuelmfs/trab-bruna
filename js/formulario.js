function whatsapp() {
	Swal.fire({
		html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Whatsapp</h1><br/><h4 class="holder" style="color:black;"><a href="#" target="_blank">+55 (31) 9 8765-4321</a></h4>',
		imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
		imageWidth: 211,
		imageHeight: 194,
		imageAlt: 'Aviso',
		showClass: {
			popup: 'animated rubberBand slower'
		}
	});
}
function envia() {
	document.subscribe_form2.submit();
}
function enviaContato() {
	document.appointment_form2.submit();
}
function especialNomeVirgula(e) {
	var t = (window.event) ? event.keyCode : e.which;
	var tecla = new Array(33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126, 162, 163, 167, 168, 170, 172, 176, 178, 179, 180, 185, 186, 8354);
	var flag = 0;
	for (var i = 0; i < tecla.length; i++) {
		if (t == tecla[i]) {
			flag = 1;
		}
	}
	if (flag == 1) {
		return false;
	} else {
		return true;
	}
}
function valida(form) {
	var campoNome = $('#subscribe_name').val();
	var campoEmail = $('#subscribe_email').val();
	var usuario = null;
	var dominio = null;
	var finalEmail = null;

	usuario = campoEmail.substring(0, campoEmail.indexOf("@"));
	dominio = campoEmail.substring(campoEmail.indexOf("@") + 1, campoEmail.length);
	if ((usuario.length >= 1) &&
		(dominio.length >= 3) &&
		(usuario.search("@") == -1) &&
		(dominio.search("@") == -1) &&
		(usuario.search(" ") == -1) &&
		(dominio.search(" ") == -1) &&
		(dominio.search(".") != -1) &&
		(dominio.indexOf(".") >= 1) &&
		(dominio.lastIndexOf(".") < dominio.length - 1)) {
		finalEmail = 2;
	} else {
		finalEmail = 1;
	}

	if (campoNome == "" || campoNome == 0) {
		Swal.fire({
			html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Campo Nome Vazio!</h1><br/><h4 class="holder" style="color:black;">Favor, Preenche-lo para Prosseguir!</h4>',
			imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
			imageWidth: 211,
			imageHeight: 194,
			imageAlt: 'Aviso',
			showClass: {
				popup: 'animated rubberBand slower'
			}
		});
		return false;
	} else {//primeiro else
		if (campoEmail == "" || campoEmail == 0) {
			Swal.fire({
				html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Campo Email Vazio!</h1><br/><h4 class="holder" style="color:black;">Favor, Preenche-lo para Prosseguir!</h4>',
				imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
				imageWidth: 211,
				imageHeight: 194,
				imageAlt: 'Aviso',
				showClass: {
					popup: 'animated rubberBand slower'
				}
			});
			return false;
		} else {//segundo else
			if (finalEmail == 1) {
				Swal.fire({
					html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Email InvÃ¡lido</h1><br/><h4 class="holder" style="color:black;">Favor Preenche-lo Corretamente!</h4>',
					imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
					imageWidth: 211,
					imageHeight: 194,
					imageAlt: 'Aviso',
					showClass: {
						popup: 'animated rubberBand slower'
					}
				});
				return false;
			} else {
				Swal.fire({
					html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Deseja Confirmar os Dados?</h1><br/><h4 class="holder" style="color:black;"><b>Nome(s):</b> ' + campoNome + '<br/><b>Email:</b> ' + campoEmail + '</h4>',
					imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
					imageWidth: 211,
					imageHeight: 194,
					showCancelButton: true,
					confirmButtonColor: '#03BB85',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Confirmar',
					cancelButtonText: 'Cancelar'
				}).then((result) => {

					if (result.value) {
						envia();
					}
				})
				return false;
			}
		}//fim segundo else
	}//fim primeiro else
}
function contato(form) {
	var campoNome = $('#form-nome').val();
	var campoEmail = $('#form-email').val();
	var campoTelefone = $('#form-telefone').val();
	var campoTipo = $('#form-tipo').val();
	var campoMsg = $('#form-texto').val();
	var usuario = null;
	var dominio = null;
	var finalEmail = null;

	usuario = campoEmail.substring(0, campoEmail.indexOf("@"));
	dominio = campoEmail.substring(campoEmail.indexOf("@") + 1, campoEmail.length);
	if ((usuario.length >= 1) &&
		(dominio.length >= 3) &&
		(usuario.search("@") == -1) &&
		(dominio.search("@") == -1) &&
		(usuario.search(" ") == -1) &&
		(dominio.search(" ") == -1) &&
		(dominio.search(".") != -1) &&
		(dominio.indexOf(".") >= 1) &&
		(dominio.lastIndexOf(".") < dominio.length - 1)) {
		finalEmail = 2;
	} else {
		finalEmail = 1;
	}

	if (campoNome == "" || campoNome == 0) {
		Swal.fire({
			html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Campo Nome Vazio!</h1><br/><h4 class="holder" style="color:black;">Favor, Preenche-lo para Prosseguir!</h4>',
			imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
			imageWidth: 211,
			imageHeight: 194,
			imageAlt: 'Aviso',
			showClass: {
				popup: 'animated rubberBand slower'
			}
		});
		return false;
	} else {//primeiro else
		if (campoEmail == "" || campoEmail == 0) {
			Swal.fire({
				html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Campo Email Vazio!</h1><br/><h4 class="holder" style="color:black;">Favor, Preenche-lo para Prosseguir!</h4>',
				imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
				imageWidth: 211,
				imageHeight: 194,
				imageAlt: 'Aviso',
				showClass: {
					popup: 'animated rubberBand slower'
				}
			});
			return false;
		} else {//segundo else
			if (finalEmail == 1) {
				Swal.fire({
					html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Email InvÃ¡lido</h1><br/><h4 class="holder" style="color:black;">Favor Preenche-lo Corretamente!</h4>',
					imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
					imageWidth: 211,
					imageHeight: 194,
					imageAlt: 'Aviso',
					showClass: {
						popup: 'animated rubberBand slower'
					}
				});
				return false;
			} else {
				if (campoTelefone == "" || campoTelefone == 0) {
					Swal.fire({
						html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Campo Telefone Vazio!</h1><br/><h4 class="holder" style="color:black;">Favor, Preenche-lo para Prosseguir!</h4>',
						imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
						imageWidth: 211,
						imageHeight: 194,
						imageAlt: 'Aviso',
						showClass: {
							popup: 'animated rubberBand slower'
						}
					});
					return false;
				} else {
					if (campoTipo == "" || campoTipo == 0) {
						Swal.fire({
							html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Campo Tipo não Selecionado!</h1><br/><h4 class="holder" style="color:black;">Selecione uma opção para Prosseguir!</h4>',
							imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
							imageWidth: 211,
							imageHeight: 194,
							imageAlt: 'Aviso',
							showClass: {
								popup: 'animated rubberBand slower'
							}
						});
						return false;
					} else {
						if (campoMsg == "" || campoMsg == 0) {
							Swal.fire({
								html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Campo Mensagem Vazio!</h1><br/><h4 class="holder" style="color:black;">Favor, Preenche-lo para Prosseguir!</h4>',
								imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
								imageWidth: 211,
								imageHeight: 194,
								imageAlt: 'Aviso',
								showClass: {
									popup: 'animated rubberBand slower'
								}
							});
							return false;
						} else {
							Swal.fire({
								html: '<h1 style="color:black;font-size:30px;font-weight: bolder;">Deseja Confirmar os Dados?</h1><br/><h4 class="holder" style="color:black;"><b>Nome(s):</b> ' + campoNome + '<br/><b>Email:</b> ' + campoEmail + '<br/><b>Telefone:</b> ' + campoTelefone + '<br/><b>Tipo:</b> ' + campoTipo + '<br/><b>Mensagem:<br/></b> ' + campoMsg + '</h4>',
								imageUrl: 'http://phgsaude.com.br/images/phg-alert.png',
								imageWidth: 211,
								imageHeight: 194,
								showCancelButton: true,
								confirmButtonColor: '#03BB85',
								cancelButtonColor: '#d33',
								confirmButtonText: 'Confirmar',
								cancelButtonText: 'Cancelar'
							}).then((result) => {

								if (result.value) {
									enviaContato();
								}
							})
							return false;
						}
					}
				}
			}
		}//fim segundo else
	}//fim primeiro else
}