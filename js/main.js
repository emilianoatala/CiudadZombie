 
 //Declaracion de variables del DOM
 var  tituloSeleccion= document.getElementById("tituloSelector"),
      boxIncial= document.getElementById("boxInicial"),
      banner = document.getElementById("banner"),
      bannerDescripcion = document.getElementById("bannerDescripcion"),
      bannerImg = document.getElementById("bannerImg"),
      bannerTitulo = document.getElementById("bannerTitulo"),
      cerrarBanner = document.getElementById("cerrar"),
      pantallaJuego = Dibujante.canvas,
      head = document.getElementById("cabecera"),
      botonCargar= document.getElementById("botonIniciar"),
      boxPresentacion = document.getElementById("presentacion"),
      pDescripcion=document.getElementById("introduccion"),
      nota = '"La ciudad de Cordoba continúa tomada por los zombies,debo encontrar la manera de salir de aqui..."',
      //Generacion del objeto que escribe la descripcion en pantalla
      Descriptor = new Escritor(nota, pDescripcion, 85),
      
      //Declaracion del objeto que controla la totalidad e la aplicacion
      Ejecutor={
            indexJuego:0,
        
            describir: function(objeto){
                  objeto.escribir();
            },

            aparecer: function(elemento, tiempo){
                  setTimeout(function(){
                  elemento.style.opacity= 1;
                  elemento.style.cursor="pointer"
                  },tiempo);
            },

            cerrar:function(boton, box){
                  boton.addEventListener("click", function(){
                        box.style.display="none" 
                  })
            },
            //Carga el elemento banner según el vehiculo elegido
            cargarBanner:function(indice){
                  this.indexJuego=parseInt(indice);
                  switch(this.indexJuego){
                  
                        case 1:
                              banner.style.display="flex";
                              bannerTitulo.innerHTML="TANQUE DE GUERRA"
                              bannerImg.src= "imagenes/tanque.png"
                              bannerDescripcion.innerHTML="Es un vehículo blindado de combate altamente resistente. Encontramos este mounstro estacionado en la Avenida General Paz al frente del correo, tal parece que su dueño recorria la zona cuando fue atacado por un Zombie. Lamentablemente este tanque de guerra tiene averiado su sistema de ataque. <br><br> Resistencia: 10"
                        break;
            
                        
                        case 2:     
                              banner.style.display="flex";
                              bannerTitulo.innerHTML="AUTOMOVIL"
                              bannerImg.src= "imagenes/auto.png"
                              bannerDescripcion.innerHTML="Un autentico sedan, el automovil clasico para toda la familia, ideal para viajes largos y comodos. No es muy resistente a los choques aunque como punto positivo dispone de airbag de proteccion. En esta ocacion conseguimos uno en color rojo, al parecer era del vecino del frente, espero que no sea un Zombie y me persiga reclamando su auto... <br><br> Resistencia: 5"   
                        break;
                  
                        case 3:
                              banner.style.display="flex";
                              bannerTitulo.innerHTML="MOTOCICLETA"
                              bannerImg.src= "imagenes/moto.png"
                              bannerDescripcion.innerHTML="Tremenda Harley-Davidson ensamblada en Traslasierra, cerca de Mina Clavero, una Bestia de 2 ruedas con un rugido tenebroso. La tengo a mano en la cochera, la unica macana es que no me ofrece mucha proteccion contra los Zombies, aunque podria ser toda una aventura <br><br> Resistencia: 3"    
                        break;
                        default:
                  }    
            },
            //inicia los recursos del juego segun el vehiculo elegido
            inicioJuego: function(pantalla, objeto, jugador, imagen, ancho, alto, Vidas){
                  head.style.display="none";
                  presentacion.style.display="none";
                  banner.style.display="none";
                  pantalla.style.display="block";
                  jugador.sprite= imagen;
                  jugador.ancho= ancho;
                  jugador.alto= alto;
                  jugador.vidas= Vidas;
                  Juego.vidasInicial= jugador.vidas;
                  objeto.iniciarRecursos();
                  // Activa las lecturas del teclado al presionar teclas
                  document.addEventListener('keydown', function(e) {
                        var allowedKeys = {
                          37: 'izq',
                          38: 'arriba',
                          39: 'der',
                          40: 'abajo'
                        };
                  Juego.capturarMovimiento(allowedKeys[e.keyCode]);
                  });
                  
                  
            },
            //carga el juego
            cargarJuego: function(){
                  switch(this.indexJuego){
                        case 1:
                             this.inicioJuego(pantallaJuego, Juego, Juego.jugador, "imagenes/tanque_abajo.png", 15,30, 10); 
                        break
            
                        case 2:
                              this.inicioJuego(pantallaJuego, Juego, Juego.jugador,"imagenes/auto_rojo_abajo.png", 15,30, 5);
                        break
            
                        case 3: 
                              this.inicioJuego(pantallaJuego, Juego, Juego.jugador,"imagenes/moto_abajo.png", 10,20, 3);
                        break
                        default:
                  }    
            },
      };

Ejecutor.describir(Descriptor);
Ejecutor.aparecer(tituloSeleccion, 8415);
Ejecutor.aparecer(boxIncial, 8585);
Ejecutor.cerrar(cerrarBanner, banner)
botonIniciar.addEventListener("click", function(){
     Ejecutor.cargarJuego() 
});




