<template>
       <!-- Header-->
        <header class="bg-dark py-5">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                        <div class="text-center my-5">
                            <h1 class="display-5 fw-bolder text-white mb-2">{{titulo}}</h1>
                            <p class="lead text-white-50 mb-4"> {{subtitulo}}</p>
                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center">

                                 <router-link  to="/blog" class="btn btn-primary btn-lg px-4 me-sm-3" v-if="showBtnBlog">Vamos al blog
                                 </router-link>

                                 <router-link to="/pagina" v-if="showBtnMovie" class="btn btn-outline-light btn-lg px-4"> 
                                 Ver Pelicula
                                 </router-link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    name: "Hero",
    props:['title','showBtnBlog','showBtnMovie' ],
    data(){
        return {
            titulo:this.title,
            subtitulo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non quidem quae soluta explicabo doloribus asperiores perferendis inventore accusamus.'
        }
    }
}
</script>