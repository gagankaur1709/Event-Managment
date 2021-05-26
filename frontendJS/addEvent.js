$('#eventBtn').click( () => {
  var name = $('#name').val()
  var description = $('#description').val()
  var venue = $('#venue').val()
  var date = $('#date').val()
   console.log(name)
  $.post('http://localhost:3000/api/Event', {
    name: name,
    description: description,
    venue: venue,
    date: date,
  })
})
