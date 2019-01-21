/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 120,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 1,

  mover:function(movX,movY){
    this.x= this.x + movX;
    this.y= this.y + movY;

  },
  perderVidas:function(cantVidas){
    this.vidas= this.vidas-cantVidas;
  },
}
