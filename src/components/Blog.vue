<template>
    <section class="container-section">
      <div class="ancho">
        <div class="container-title-seccion">
          <h1>Blog</h1>
        </div>
      </div>
    </section>
    <section class="container-section">
      <div class="ancho">
        <div class="testimonial-carousel">
          <h1 class="carousel-title">Testimonials</h1>
          <swiper
            :modules="modules"
            :slides-per-view="1"
            :autoplay="{ delay: 5000, disableOnInteraction: false }"
            :loop="true"
            navigation
            class="swiper-container"
          >
            <!-- Testimonio 1 -->
            <swiper-slide class="testimonial-slide">
              <div class="testimonial-content">
                <img
                  src="../assets/caru1.jpg"
                  alt="Person 1"
                  class="testimonial-image"
                />
                <p class="testimonial-comment">
                  "AccuMOVE exceeded my expectations! The team was professional,
                  and my move was seamless."
                </p>
                <h3 class="testimonial-name">John Doe</h3>
              </div>
            </swiper-slide>
  
            <!-- Testimonio 2 -->
            <swiper-slide class="testimonial-slide">
              <div class="testimonial-content">
                <img
                  src="../assets/caru2.jpg"
                  alt="Person 2"
                  class="testimonial-image"
                />
                <p class="testimonial-comment">
                  "Amazing service! Highly recommend AccuMOVE for their dedication
                  and efficiency."
                </p>
                <h3 class="testimonial-name">Jane Smith</h3>
              </div>
            </swiper-slide>
  
            <!-- Testimonio 3 -->
            <swiper-slide class="testimonial-slide">
              <div class="testimonial-content">
                <img
                  src="../assets/caru3.jpg"
                  alt="Person 3"
                  class="testimonial-image"
                />
                <p class="testimonial-comment">
                  "The best moving experience I've ever had. Thank you, AccuMOVE!"
                </p>
                <h3 class="testimonial-name">Michael Brown</h3>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { Autoplay, Navigation } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import "swiper/css";
  import "swiper/css/navigation";
  
  
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Navigation],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilo global para las secciones */
  .container-section {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  
  .ancho {
    max-width: 1200px; /* Limita el ancho máximo a 1200px */
    width: 100%; /* Ocupa todo el ancho del contenedor padre */
    margin: 0 auto; /* Centra horizontalmente */
    box-sizing: border-box; /* Incluye padding en el cálculo del ancho */
  }
  
  .container-title-seccion {
    text-align: center; /* Centrar el texto */
    margin-bottom: 1.5rem; /* Espaciado debajo del título */
  }
  
  .container-title-seccion h1 {
    font-family: "Gloock", sans-serif; /* Aplicar Gursa a los encabezados */
    font-size: 3rem; /* Tamaño grande para el título */
    font-weight: 600; /* Peso de la fuente para mayor énfasis */
    color: #333; /* Color oscuro para el título */
    text-transform: uppercase; /* Convertir el texto a mayúsculas */
    letter-spacing: 2px; /* Espaciado entre las letras */
    margin: 0; /* Eliminar márgenes predeterminados */
  }
  
  /* Añadir estilos de hover para mejorar la interacción */
  .container-title-seccion h1:hover {
    color: #007bff; /* Cambiar el color al hacer hover */
    transition: color 0.3s ease; /* Suavizar el cambio de color */
  }
  * {
    box-sizing: border-box; /* Esto asegura que el padding y el borde no afecten el ancho total */
  }
  
  /* Contenedor principal */
  .testimonial-carousel {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9fafb;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  /* Título del carrusel */
  .carousel-title {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
  
  /* Estilo de cada slide */
  .testimonial-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .testimonial-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  /* Imagen del testimonio */
  .testimonial-image {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  }
  
  /* Comentario */
  .testimonial-comment {
    font-size: 1rem;
    font-style: italic;
    color: #666;
    margin: 10px 0;
    line-height: 1.5;
    width: 80%; /* Limita el ancho del comentario al 80% */
    margin-left: auto; /* Centra el párrafo */
    margin-right: auto; /* Centra el párrafo */
  }
  
  
  /* Nombre del testimonio */
  .testimonial-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
  }
  
  /* Responsividad */
  @media (max-width: 768px) {
    .testimonial-carousel {
      padding: 10px;
    }
  
    .carousel-title {
      font-size: 1.5rem;
    }
  
    .testimonial-image {
      width: 60px;
      height: 60px;
    }
  
    .testimonial-comment {
      font-size: 0.9rem;
    }
  
    .testimonial-name {
      font-size: 1rem;
    }
  }
  
  .swiper-button-next,
  .swiper-button-prev {
    color: #00b0f0; /* Color de las flechas */
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.2); /* Fondo semitransparente */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
  }
  
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background-color: rgba(0, 0, 0, 0.4); /* Fondo más oscuro al pasar el mouse */
  }
  
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 1.2rem; /* Tamaño del icono */
  }
  
  .swiper-button-disabled {
    opacity: 0.5; /* Reducir opacidad cuando están deshabilitadas */
    pointer-events: none; /* Deshabilitar clics */
  }
  
  </style>
  