<template>
    <section class="career-section">
      <div class="career-container">
        <h2 class="career-title">My Career</h2>
        <div class="career-items">
          <div class="career-item" v-for="(career, index) in careers" :key="index">
            <h3>{{ career.title }}</h3>
            <p>{{ career.description }}</p>
            <span class="career-date">{{ career.date }}</span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "CareerSection",
    data() {
      return {
        careers: [
          {
            title: "Web Developer",
            description: "Developed modern web applications using Vue.js and Node.js.",
            date: "2020 - Present",
          },
          {
            title: "Software Engineer",
            description: "Worked on enterprise solutions for various industries.",
            date: "2018 - 2020",
          },
          {
            title: "IT Technician",
            description: "Provided technical support for hardware and software issues.",
            date: "2015 - 2018",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .career-section {
    padding: 2rem 1rem;
    background-color: #f9f9f9;
  }
  
  .career-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }
  
  .career-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
  
  .career-item {
    background: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }
  
  .career-item:hover {
    transform: translateY(-5px);
  }
  
  .career-item h3 {
    margin: 0;
    color: var(--secondary-color);
    font-size: 1.5rem;
  }
  
  .career-item p {
    margin: 0.5rem 0;
    color: var(--neutral1);
  }
  
  .career-date {
    font-size: 0.9rem;
    color: var(--neutral2);
  }
  </style>
  