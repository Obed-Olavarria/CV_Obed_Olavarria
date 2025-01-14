<template>
    <section class="container-section">
      <div class="ancho">
        <div class="container-title-seccion">
          <h1>Contact Us</h1>
        </div>
      </div>
    </section>
    <section class="container-section">
      <div class="ancho">
          <div class="container-forms">
              <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              :class="{ 'input-error': errors.name }"
              required
            />
            <span v-if="errors.name" class="error-message">{{
              errors.name
            }}</span>
          </div>
  
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              :class="{ 'input-error': errors.email }"
              required
            />
            <span v-if="errors.email" class="error-message">{{
              errors.email
            }}</span>
          </div>
  
          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              :class="{ 'input-error': errors.message }"
              required
            ></textarea>
            <span v-if="errors.message" class="error-message">{{
              errors.message
            }}</span>
          </div>
  
          <button type="submit" class="submit-button">Send Message</button>
        </form>
          </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: "",
          email: "",
          message: "",
        },
        errors: {},
      };
    },
    methods: {
      validateForm() {
        this.errors = {}; // Reset errors
        let valid = true;
  
        // Validate Name
        if (!this.form.name) {
          this.errors.name = "Name is required.";
          valid = false;
        }
  
        // Validate Email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!this.form.email) {
          this.errors.email = "Email is required.";
          valid = false;
        } else if (!emailPattern.test(this.form.email)) {
          this.errors.email = "Please enter a valid email address.";
          valid = false;
        }
  
        // Validate Message
        if (!this.form.message) {
          this.errors.message = "Message cannot be empty.";
          valid = false;
        }
  
        return valid;
      },
      handleSubmit() {
        if (this.validateForm()) {
          // Form is valid, handle the form submission (e.g., send to server)
          alert("Message sent successfully!");
          // Reset the form after successful submission
          this.form.name = "";
          this.form.email = "";
          this.form.message = "";
        } else {
          alert("Please fill out all fields correctly.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para el formulario */
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
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
  
  .container-title-seccion {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  
  .container-title-seccion h1 {
    font-family: "Gloock", sans-serif;
    font-size: 3rem;
    font-weight: 600;
    color: #333;
  }
  
  .container-forms {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .contact-form {
    width: 100%;
    max-width: 600px;
    padding: 20px;
    background-color: #f9fafb;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    max-width: 90%
  }
  
  input[type="text"],
  input[type="email"],
  textarea {
    height: 40px;
  }
  
  textarea {
    height: 100px;
  }
  
  .submit-button {
  width: auto; /* Cambiar el ancho del botón */
  padding: 12px 30px; /* Ajustar el padding */
  font-size: 1.2rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 auto; /* Centrar el botón */
  display: block; /* Asegurar que el botón sea un bloque */
}

.submit-button:hover {
  background-color: #0056b3;
}

  
  /* Estilos para mensajes de error */
  .input-error {
    border-color: red;
  }
  
  .error-message {
    color: red;
    font-size: 0.875rem;
    margin-top: 5px;
  }
  @media (min-width: 768px) and (max-width: 1024px){
  .container-title-seccion h1 {
    font-size: 2.5rem; /* Reducir el tamaño del título */
  }

  .contact-form {
    padding: 15px; /* Reducir el padding del formulario */
    max-width: 500px; /* Reducir el ancho máximo del formulario */
  }

  input,
  textarea {
    font-size: 0.95rem; /* Reducir el tamaño de fuente */
  }

  .submit-button {
    font-size: 1.1rem; /* Reducir el tamaño del botón */
    padding: 10px 25px; /* Ajustar el padding del botón */
  }
}

  @media (max-width: 768px) {
  /* Para móviles */
  .container-title-seccion h1 {
    font-size: 2rem; /* Reducir el tamaño del título aún más */
    margin-bottom: 1rem; /* Reducir el margen inferior */
  }

  .contact-form {
    padding: 10px; /* Reducir el padding del formulario */
    max-width: 90%; /* Ajustar el ancho máximo del formulario */
  }

  input,
  textarea {
    font-size: 0.9rem; /* Reducir el tamaño de la fuente */
    padding: 8px; /* Reducir el padding de los campos */
  }

  .submit-button {
    font-size: 1rem; /* Reducir el tamaño del botón */
    padding: 10px 20px; /* Ajustar el padding del botón */
  }
}

  </style>
  