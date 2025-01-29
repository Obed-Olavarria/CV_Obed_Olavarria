<template>
  <section class="home">
    <div class="home-container">
      <div class="ancho">
        <div class="home-presentation">
          <div class="developer">
            <img src="../assets/images/lap.svg" alt="Laptop Icon" class="svg-adjust" />
            <h1>Developer web and mobile <br /> & <br /> Systems engineer</h1>

            <div class="developer-info"></div>
          </div>
          <div class="technician">
            <h1>Electronic technician <br /> & <br /> Computer support</h1>
            <div class="technician-info"></div>
          </div>
        </div>
        <HeroSection/>
        <CareerSection/>


      </div>
    </div>
  </section>



</template>

<script>
// Importando el componente CareerSection desde la ruta relativa
import CareerSection from '../sections/Home/CareerSection.vue';
import HeroSection from '../sections/Home/HeroSection.vue';

export default {
  name: 'Home',
  components: {
    CareerSection, 
    HeroSection// Asegurándose de registrar el componente
  }
};
</script>

<style scoped>
.home {
  /* No es necesario cambiar nada aquí */
}

.home-container {
  /* No es necesario cambiar nada aquí */

}

.home-presentation {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  text-align: center;
  transition: all 0.5s ease;
  width: 100%;
  background-color: aqua;
}

.svg-adjust {
  position: absolute;
  top: 18rem;
  left: auto;
  width: 35rem; /* Ajusta el ancho del SVG */
  height: auto; /* Mantén la proporción del SVG */
  transition: transform 0.3s ease;
  object-fit: cover;
  z-index: 0;
}

.svg-adjust:hover {
  transform: scale(1.1); /* Efecto de zoom al hacer hover */
}

.developer:hover .svg-adjust,
.technician:hover .svg-adjust {
  display: none; /* La imagen desaparece por completo */
}

.developer {
  display: flex;
  justify-content: center;
  height: 52rem;
  padding: 20px;
  /*border: 2px solid #ff5733;*/
  align-items: center;

  overflow: hidden;
  transition: transform 0.5s ease, z-index 0.5s ease;
  background-size: cover;
  /* Asegura que la imagen ocupe todo el espacio */
  background-position: center;
  /* Centra la imagen */
  background-image: none;
  /* No hay imagen de fondo por defecto */
  position: relative;
  z-index: 1;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}


.technician {
  display: flex;
  justify-content: center;
  height: 52rem;
  padding: 20px;
  /*border: 2px solid #ff5733;*/
  align-items: center;
  overflow: hidden;
  transition: transform 0.5s ease, z-index 0.5s ease;
  background-size: cover;
  /* Asegura que la imagen ocupe todo el espacio */
  background-position: center;
  /* Centra la imagen */
  background-image: none;
  /* No hay imagen de fondo por defecto */
  position: relative;
  z-index: 1;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

}

/* Al hacer hover en los divs, mostramos la imagen */
.developer:hover {
  background-image: url('../assets/images/pru.jpg');
  /* Imagen de Developer */
  background-size: cover;
  background-position: center;
}

.technician:hover {
  background-image: url('../assets/images/p1.jpg');
  /* Imagen de Technician */
  background-size: cover;
  background-position: center;
}

.developer h1,
.technician h1 {
  font-size: 1.5rem;
  color: #000000;
  /* Cambié el color del texto a blanco para que contraste con el fondo */
  line-height: 1.5;
  transition: transform 0.5s ease;

}

.developer:hover h1,
.technician:hover h1 {
  transform: translateY(-15%);
  color: #ffffff
}

.developer:hover,
.technician:hover {
  align-items: flex-start;

}

/* Cambio de z-index al hacer hover */
.developer:hover {
  z-index: 1;
  /* Eleva el div de Developer */
}

.technician:hover {
  z-index: 1;
  /* Eleva el div de Technician */
}

.developer::before,
.technician::before {
  content: '';
  /* Pseudoelemento vacío */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  /* Sin oscurecimiento por defecto */
  transition: background-color 0.5s ease;
  /* Transición suave */
  z-index: 0;
  /* Asegura que el pseudoelemento esté detrás del contenido */
}

/* Al hacer hover, oscurece el contenedor */
.developer:hover::before,
.technician:hover::before {
  background-color: rgba(0, 0, 0, 0.5);
  /* Oscurece con una capa negra semitransparente */
}

/* Sección para las imágenes de info */
.developer-info,
.technician-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
  text-align: center;
  color: #333;
  z-index: -1;
}

/* Media Queries */
@media (max-width: 768px) {
  .home-presentation {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .developer h1,
  .technician h1 {
    font-size: 1.2rem;
  }
}
</style>
