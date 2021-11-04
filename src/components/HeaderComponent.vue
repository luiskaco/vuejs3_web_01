<template>
    <div>
            <!-- Responsive navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container px-5">
            <a class="navbar-brand" href="#!">  <img alt="Vue logo" src="../assets/logo.png" class="img-response">VueJs 3.0</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link active-class="active" to="/" class="nav-link">Inicio</router-link>
                    </li>
                     <li class="nav-item">
                        <router-link active-class="active" to="/pagina" class="nav-link">Pagina</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" to="/blog" class="nav-link">Blog</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" to="/form" class="nav-link">Formulario</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" to="/ciclo/239" class="nav-link">Ciclos Vue</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link active-class="active" to="/directiva" class="nav-link">Directiva</router-link>
                    </li>
                
                </ul>
            </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
  .img-response{
      width: 25px;
      margin-right: 10px;
  }
</style>