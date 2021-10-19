var forms = document.querySelectorAll('#newUser')

console.dir(forms);

forms[0].addEventListener('submit', function (event) {

    event.preventDefault()
    event.stopPropagation()

    
    //form.classList.add('was-validated')
})
//pendiente hacer el checkeo aca y enviar mensajes mas detallados