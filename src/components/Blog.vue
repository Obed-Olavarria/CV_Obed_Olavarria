<template>
    <section class="container-section">
      <div class="ancho">
        <div class="container-title-seccion">
          <h1>Projects</h1>
        </div>
      </div>
    </section>
  
    <section class="container-section">
      <div class="ancho">
        <div>
          <div class="gallery">
            <a
              v-for="(image, index) in images"
              :key="index"
              class="gallery-item"
              :href="image.src"
              :data-title="image.title"
              :data-description="image.description"
            >
              <img :src="image.thumbnail" alt="" class="rounded shadow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import GLightbox from "glightbox";
  import "glightbox/dist/css/glightbox.css";
  
  export default {
    data() {
      return {
        images: [
          {
            src: new URL("../assets/Depo1.jpg", import.meta.url).href,
            thumbnail: new URL("../assets/Depo1.jpg", import.meta.url).href,
          },
          {
            src: new URL("../assets/Depos2.jpg", import.meta.url).href,
            thumbnail: new URL("../assets/Depos2.jpg", import.meta.url).href,
          },
          {
            src: new URL("../assets/Depo3.jpg", import.meta.url).href,
            thumbnail: new URL("../assets/Depo3.jpg", import.meta.url).href,
          },
          {
            src: new URL("../assets/Depo4.jpg", import.meta.url).href,
            thumbnail: new URL("../assets/Depo4.jpg", import.meta.url).href,
          },
          {
            src: new URL("../assets/Depo5.jpg", import.meta.url).href,
            thumbnail: new URL("../assets/Depo5.jpg", import.meta.url).href,
          },
          {
            src: new URL("../assets/Depo6.jpg", import.meta.url).href,
            thumbnail: new URL("../assets/Depo6.jpg", import.meta.url).href,
          },
          {
            src: new URL("../assets/Depo7.jpg", import.meta.url).href,
            thumbnail: new URL("../assets/Depo7.jpg", import.meta.url).href,
          },
          {
            src: new URL("../assets/Depo8.jpg", import.meta.url).href,
            thumbnail: new URL("../assets/Depo8.jpg", import.meta.url).href,
          },
        ],
      };
    },
    mounted() {
      console.log(this.images);  // Verifica que 'images' esté disponible
      this.lightbox = GLightbox({
        selector: ".gallery-item",
      });
    },
    beforeDestroy() {
      if (this.lightbox) {
        this.lightbox.destroy();
      }
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





    /* Contenedor de la galería */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Estilo de los elementos de la galería */
.gallery-item {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

/* Efecto hover en las imágenes */
.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.gallery-item:hover img {
  transform: scale(1.1);
}

/* Contenedor del título y la descripción */
.text-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* Fondo oscuro semi-transparente */
  display: flex;
  justify-content: flex-start; /* Alinear el contenido al lado izquierdo */
  align-items: center;
  padding: 0 1rem;
  border-radius: 10px;
  opacity: 0; /* Iniciar invisible */
  transition: opacity 0.3s ease;
  color: #fff;
}

.gallery-item:hover .text-overlay {
  opacity: 1; /* Mostrar cuando se hace hover */
}

.text-overlay .title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 1rem; /* Espacio entre título y descripción */
}

.text-overlay .description {
  font-size: 1rem;
  max-width: 250px;
  line-height: 1.4;
  text-align: left;
}

/* Estilo del enlace */
.gallery-item a {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}

@media (min-width: 768px) and (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en tabletas */
  }

  .container-title-seccion h1 {
    font-size: 2.5rem; /* Reducir ligeramente el tamaño del título en tabletas */
  }
}




/* Media Queries para dispositivos móviles */
@media (max-width: 768px) {
  .gallery {
    grid-template-columns: 1fr; /* 1 columna en móviles */
  }

  .container-title-seccion h1 {
    font-size: 2rem; /* Reducir el tamaño del título en móviles */
  }

  .text-overlay .title {
    font-size: 1.2rem; /* Reducir el tamaño del título de la superposición */
  }

  .text-overlay .description {
    font-size: 0.9rem; /* Reducir tamaño de la descripción */
  }

  /* Estilos para el ícono de cierre */
  .gallery-item .text-overlay .close-icon {
    font-size: 2rem; /* Aumentar el tamaño del ícono en móviles */
    color: #fff; /* Asegurarse de que el ícono tenga buen contraste */
    position: absolute;
    top: 20px; /* Bajar el ícono */
    right: 20px; /* Mover el ícono un poco a la derecha */
    z-index: 10; /* Asegurarse de que esté sobre las otras capas */
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  /* Efecto de hover para el ícono de cierre */
  .gallery-item .text-overlay .close-icon:hover {
    transform: scale(1.2); /* Aumenta ligeramente el tamaño del ícono al hacer hover */
  }
}

  </style>

