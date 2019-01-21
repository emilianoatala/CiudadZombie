/*Decalracion del objeto que toma parametros de fecha para mostrarlos en pantalla */ 
var date = new Date(),
    fecha={
        tituloFecha: document.getElementById("fecha"),
        dia: date.getDate(),
        meses: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        mes: date.getMonth(),
        mostrarFecha:function(){
            this.tituloFecha.innerHTML= this.dia + " de " + this.meses[this.mes];
        }
    }
    
fecha.mostrarFecha();