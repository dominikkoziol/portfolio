  $( function() {
    $( "#window" ).resizable({
		maxHeight: 800,
      	maxWidth: 800,
		minHeight: 100,
		minWidth: 100,
		containment: "#protect"
    });
  } );