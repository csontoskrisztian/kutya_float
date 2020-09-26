const fileUrl = "Texts\\cards.txt" // provide file location

fetch(fileUrl)
   .then( r => r.text() )
   .then( t => console.log(t) )