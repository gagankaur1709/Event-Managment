$('#UserBtn').click( () => {
  var password = $('#uPassword').val()
  var name = $('#uName').val()
  var address = $('#uAddress').val()
  var email = $('#uMail').val()
  var phone = $('#uPhone').val()
   console.log(name)
  $.post('http://localhost:3000/api/Participant', {
    password: password,
    name: name,
    address: address,
    email: email,
    phone: phone,
  })
})
