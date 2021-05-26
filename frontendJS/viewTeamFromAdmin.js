
$('#viewTeamBtn').click( () => {
  let TeamId = $('#viewTeamId').val()
  console.log("clicked")
  console.log(TeamId)

  $.ajax({
      url: 'http://localhost:3000/api/Admin',
      type: 'GET',
      data: {
                 TeamId: TeamId,
             },
      success: () => {
        alert("Successfully fetched data")
            $('#viewTeamFromAdmin > tbody').append($(`  <tr>
                  <td>${0.teamID}</td>
                  <td>${0.teamName}</td>
                  <td>${0.teamEmail}</td>
                  <td>${0.teamPhone}</td>
              </tr>`));


      }
  })
})
0.teamPassword

//
//   $.get('http://localhost:3000/api/Admin',(allTeam) =>{
//     $('#viewTeamFromAdmin > tbody').append($(`  <tr>
//         <td>${teamID}</td>
//             <td>${teamName}</td>
//             <td>${teamEmail}</td>
//             <td>${teamPhone}</td>
//         </tr>`));
//     })
// })
