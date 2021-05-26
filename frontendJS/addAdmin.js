$('#AdminBtn').click( () => {
  var password = $('#password').val()
  var name = $('#name').val()
  var email = $('#email').val()
  var phone = $('#phone').val()
   console.log(name)
  $.post('http://localhost:3000/api/Admin', {
    password: password,
    name: name,
    email: email,
    phone: phone,
  })
})
