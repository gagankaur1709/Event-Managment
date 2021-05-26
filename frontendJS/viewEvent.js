
$('#eventView').click( () => {
  console.log("clicked")
  $.get('http://localhost:3000/api/Event',(allEvents) =>{
    for (let e of allEvents)
    {
      $('#viewEvent > tbody').append($(`  <tr>
        <td>${e.eCode}</td>
            <td>${e.eName}</td>
            <td>${e.eDescription}</td>
            <td>${e.eVenue}</td>
            <td>${e.eDate}</td>
        </tr>`));
    }
  })
})
