$(document).ready(function(){
	$("#externo").text("Texto desde javascript externo")
})

$(document).ready(function(){
		$("#boton").click(function(){
			// alert("hoyga");
			$("#lienzo").fadeToggle("slow");
		})
	})

// function sal(){
// alert("saludo")
//}