 var carro = {
	marca: "Ford",
	modelo: "Mustang",
    color: "rojo",
	encender: function() {
		alert("prendió")
    },
   apagar: function(){
       alert("apagó")
   },
   desplazamiento: function(){
       alert("se ha desplazado 630km en los últimos 7 meses")
   },
   mover: function(dir) {
       alert(dir);
   },
   partes: function(ventana, parte2, parte3){
       alert("se abrió la" + " " + ventana);
       alert("después del choque, se arruinó" + " " + parte2);
       alert("hay que encender" +" " + parte3 + " "+"porque llueve")
   }
};

carro.marca
carro.modelo
carro.color
carro.encender()
carro.apagar()
carro.desplazamiento()
carro.mover(derecha)
carro.partes("Ventana derecha", "la puerta", "los parabrisas")



