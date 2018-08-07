window.onload = function () {
	var form = document.querySelector('#regis');

	var theInputs = form.elements;
	theInputs = Array.from(theInputs);
	theInputs.pop();

  var nombre = theInputs[1]
  var apellido = theInputs[2]
  var telefono = theInputs[3]
  var email = theInputs[4]
  var edad = theInputs[5]
  var barrio = theInputs[6]
  var pass = theInputs[8]
  var repass = theInputs[9]

	for (var input of theInputs) {
		input.addEventListener('blur', function () {
			if (this.value.trim() === '') {
				this.classList.add('is-invalid');
				this.parentNode.querySelector('div').classList.add('error');
				this.parentNode.querySelector('div').innerHTML = 'Este campo es <b>obligatorio</b>';
			} else {
				this.classList.remove('is-invalid');
				this.parentNode.querySelector('div').classList.remove('error');
				this.parentNode.querySelector('div').innerHTML = '';
			}
		});
	}


  var regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;



	email.addEventListener('blur', function () {
		if (!regexEmail.test(this.value)) {
			this.classList.add('is-invalid');
			this.parentNode.querySelector('div').classList.add('error');
			this.parentNode.querySelector('div').innerHTML = 'Ingresá un formato de <b>email valido</b>';
		} else {
			this.classList.remove('is-invalid');
			this.parentNode.querySelector('div').classList.remove('error');
			this.parentNode.querySelector('div').innerHTML = '';
		}
	});
     pass.addEventListener('blur', function() {
       var textLength = this.value.length;
         if(textLength < 6) {
          this.classList.add('is-invalid');
     			this.parentNode.querySelector('div').classList.add('error');
     			this.parentNode.querySelector('div').innerHTML = 'La password debe tener minimo <b>6 caracteres</b>';
        } else {
          this.classList.remove('is-invalid');
    			this.parentNode.querySelector('div').classList.remove('error');
    			this.parentNode.querySelector('div').innerHTML = '';
        }
});

function diferentPassword() {
  console.log(pass, repass)
    if (pass.value != repass.value) {
      console.log('pass distintos')
        pass.classList.add('is-invalid');
        pass.parentNode.querySelector('div').classList.add('error');
        pass.parentNode.querySelector('div').innerHTML = 'Las password deben coincidir';
        return true;
    } else {
      console.log('pass iguales')
      pass.classList.remove('is-invalid');
      pass.parentNode.querySelector('div').classList.remove('error');
      pass.parentNode.querySelector('div').innerHTML = '';
      return false;
     }
};

	form.onsubmit = function (ev) {
    ev.preventDefault();
		if (
			nombre.value.trim() != '' &&
      apellido.value.trim() != '' &&
      telefono.value.trim() != '' &&
      edad.value.trim() != '' &&
      email.value.trim() != '' &&
      barrio.value.trim() != '' &&
      pass.value.length >= 6 &&
			regexEmail.test(email.value) &&
      !diferentPassword()
		) {
			this.submit()
		} else {
      	window.alert('Algun campo esta incorrecto');
    }
	};


};
