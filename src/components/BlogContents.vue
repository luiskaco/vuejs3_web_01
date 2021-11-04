<template>
        <div>

        <Hero :title='title_route' :showBtnBlog="false" :showBtnMovie="true"/>

        <!-- Testimonials section-->
        <section class="py-5 border-bottom">
            <div class="container px-5 my-5 px-5">
                <div class="text-center mb-5">
                    <h2 class="fw-bolder">Listados de Producto</h2>
                    <p v-if="myDetail">{{myDetail}}</p>
                    <p class="lead mb-0">Our customers love working with us</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="container" v-if="favorita">
                                    <h3>Tu pelicula favorita es: {{favorita.title}}</h3>
                              </div>
                        <!-- Testimonial 1-->
                        <div class="card mb-4" v-for="movie in peliculasMayuscula" :key="movie.id">
                              
                            <Single 
                                 :movie=movie
                                 :years=yeartDown 

                                 @favorita="favortiaSelecionada" 
                                  
                            />

                               <!-- v-on:favorita="favortiaSelecionada"    -->
                        </div>

                        <h3>Haciendo uso de filtros </h3>
                         <!-- nota: los filtro se declaron en propiedades computadas -->
                        {{mayu}}

                        <!-- Nota: el pai web | mayu no funciona con vue 3 -->

                    </div>
                </div>
            </div>
            

        </section>
        <!-- Contact section-->
        </div>
</template>
<script>
import Hero from './HeroComponents.vue'
import Single from './SingleBlogComponent.vue'

export default {
    name: "Blog", 
    components:{
         Hero,
         Single
    },
    // FILTROS - para realizar alguna funioconalidad
    // filters:{
    //     mayu(values){
    //         return value.toUpperCase(values);
    //     },
        
    // },
    /**
     *  Nota: Ha sido removido en la version 3.0
     */

    // PROPIEDADES COMPUTADAS
    computed:{
        peliculasMayuscula(){
             const movieMod = this.movies;
                
            for(let i = 0; i < this.movies.length; i++ ){
                movieMod[i].title =  movieMod[i].title.toUpperCase();
            }

          return movieMod;
           
        },
        mayu(){
            return this.web.toUpperCase();
        },

        myDetail(){
            return `Mi nombre: ${this.name} ${this.last} y sitio ${this.web}` 
        }
    },
    /**
     *  Nota: Las propiedades computada, sirven para modifcar las propiedades
     */

     data(){
      return {
            name:'Luis',
            last:'Gomez',
            web:'lgomez.com',
            title_route: "Pagina de "+this.$route.name,
            favorita:null,
            yeartDown: 2016,
            movies:
            [{ 
               id:1,  
               title:'Batman', 
               description:'Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
               year:2018, 
               url:'https://i.blogs.es/4ae6b2/michael-keaton-batman/840_560.jpeg'},
            {  id:2,
               title:'Fast and Furius', 
               description:'Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
               year:2015, 
               url:'https://phantom-marca.unidadeditorial.es/2ef6eac8623093255d9e639470fdd57a/crop/0x0/990x556/resize/660/f/webp/assets/multimedia/imagenes/2021/08/23/16297018838782.jpg'},
            { 
               id:3, 
               title:'Hitman', 
               description:'Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
               year:2014, 
               url:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/01/hitman-3-2202145.jpg?itok=4AaGDTxi'},   
               { 
               id:4, 
               title:'Hitman', 
               description:'Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
               year:2021, 
               url:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/01/hitman-3-2202145.jpg?itok=4AaGDTxi'},   
            ]
        }
    },
    methods:{
        favortiaSelecionada(movie){
            // console.log(movie)
            this.favorita=movie;
        }   
    }
      
}
</script>

<style>
   .yearGreen{
       background-color: aquamarine;
       color:#fff;
   }
   .yearRed{
       background-color:blueviolet;
       color:#fff;
   }
   .img-size{
       width: 200px;
   }
</style>