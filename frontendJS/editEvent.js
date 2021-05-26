$( ()=>{
  $.get('http://localhost:3000/api/Event',(allEvents) =>{
    for (let e of allEvents)
    {
      $('#editEvent > tbody').append($(`  <tr>
        <td>${e.eCode}</td>
            <td>${e.eName}</td>
            <td>${e.eDescription}</td>
            <td>${e.eVenue}</td>
            <td>${e.eDate}</td>
            <td><button id="editBtn" type="button" class="btn btn-primary btn-block btn-lg" name="Submit">Edit</button></td>
        </tr>`));
        $('#editBtn').click(()=>{
          console.log(e.eCode)
        })
    }
  })


})
