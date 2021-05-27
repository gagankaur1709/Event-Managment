
$('#TeamAdminView').click( () => {
  console.log("clicked")
  $.get('http://localhost:3000/api/Admin',(allTeams) =>{
    for (let e of allTeams)
    {
      $('#viewTeamAdmin> tbody').append($(`  <tr>
        <td>${e.teamID}</td>
            <td>${e.teamName}</td>
            <td>${e.teamEmail}</td>
            <td>${e.teamPhone}</td>
        </tr>`));
    }
  })
})
