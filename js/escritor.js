//Clase que permite obtener objetos para escribir de manera automatica cualquier tipo de texto simulando una maquina de escribir
class Escritor{
    constructor(parrafo, etiqueta, tiempo){
        this.texto=parrafo;
        this.index=0;
        this.tiempo=tiempo
        this.escribir= function(){
            var arrayTexto = this.texto.split(''),
            i=this.index,
            temporizador=this.tiempo,
            contador = setInterval( function(){
                        etiqueta.innerHTML= etiqueta.textContent + arrayTexto[i];
                        i++;
                        if(i == arrayTexto.length){
                            clearInterval(contador);
                            };
                    },temporizador);
        }
    }                            
}

   

