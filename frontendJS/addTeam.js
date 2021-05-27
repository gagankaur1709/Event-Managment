$('#TeamBtn').click( () => {
  // var password = $('#tPassword').val()
  var name = $('#tName').val()
  var email = $('#tEmail').val()
  var phone = $('#tPhone').val()
   console.log(name)
  $.post('http://localhost:3000/api/Team', {
    // password: password,
    name: name,
    email: email,
    phone: phone,
  })
})
