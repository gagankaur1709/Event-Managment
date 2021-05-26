


$('#deleteEvent').click( () => {
   let eCode = $('#deleteEventCode').val()
   console.log(eCode)

   $.ajax({           
    type: "DELETE",
    url: "http://localhost:3000/api/Event",
    data: {
        "eCode": eCode
    }
}).done(function( msg ) {
        alert( "Row Deleted: " + msg );
    });

 
})

// $.delete('http://localhost:3000/api/Event', {
//   eCode: eCode,
//
// })
