<template>
  <Header />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <!-- <Hero /> -->
        <router-view />


  <Footer />
</template>

<script>



import Header from './components/HeaderComponent.vue'
// import Content from './components/ContentComponents.vue'
// import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/FooterComponents.vue'

export default {
  name: 'App',
  components: {
    Header,
    
    // Content,
    Footer
  }
}

 
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

 @import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css'; 
 @import './assets/styles.css'; 

</style>
