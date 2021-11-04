<template>
  <div> 
      <Hero title="Practicando el Binding de vueJs" :showBtnBlog="true" :showBtnMovie="true"/>
      <section class="bg-light py-5">
            <div class="container px-5 my-5 px-5">
             

           
                <h3 class="pb-4 mb-4 fst-italic border-bottom">
                Mi componente
                </h3>
                <div id="miComponente">
                    <h1>Mi componente</h1>
                    <h2>{{subtitulo}}</h2>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" >Reactividad</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" v-model="nombre">
                        <span>{{nombre}}</span>
                </div>

                <!-- Ver el state -->
                <pre>
                    {{$data}}
                </pre>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" >Directivas condicionales</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" v-model="edad">
                        <span>{{edad}}</span>
                </div>
                <div class="alert alert-success" v-if="edad > 12 && edad <=18">
                    <p class="" style="padding:0;">Estas en el rango permitido de edad</p>
                </div>
                    <div class="alert alert-warning" v-else-if="edad => 19">
                    <p class="" style="padding:0;">Te excediste de edad</p>
                </div>
                    <div class="alert alert-danger" v-else>
                    <p class="" style="padding:0;">No estas en el rango permitido</p>
                </div>

                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" >Directivas Bucles</label>
                    <ol>
                        <li v-for='pelicula in peliculas' :key='pelicula' > {{pelicula}}</li>
                    </ol>
                </div>
          
    
          </div>
        </section>
    </div>
</template>

<script>
import Hero from './HeroComponents.vue'

export default {
    name:"Micomponente",
    components:{
        Hero
    },
  
    data(){
        return {
            nombre:"",
            edad:18 ,
            subtitulo: 'Soy el Subtitulo de mi componente' ,
            peliculas: ['Batman','Aquaman','Wonderman','Piolin']
        }
    }
}
    

</script>
