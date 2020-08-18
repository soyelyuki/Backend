var bicicleta = {
    color:'rojo',
    modelo:'BMX',
    Frenos:'De Disco',
    VelocidadMaxima: '60km',
    cambiarColor: function(nuevo_color){
        this.color = nuevo_color;
        console.log(this);
    }
};

bicicleta.cambiarColor("azul");
