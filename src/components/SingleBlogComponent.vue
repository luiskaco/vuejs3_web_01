<template>
    <div class="card-body p-4">
        <div class="d-flex"> 
            <!-- <div class="flex-shrink-0"><i class="bi bi-chat-right-quote-fill text-primary fs-1"></i></div> -->
            <div>   <!-- CONDICIONANDO CLASES -->
                <span class="text-white fs-5" v-bind:class="{
                    yearGreen: movie.year > years,
                    yearRed: movie.year < years,
                }">
                    {{movie.year}}
                </span>
            
            <strong>{{movie.title}}</strong><img :src="movie.url" :alt="movie.title" class="img-size"/></div>
            
            <div class="ms-4">
                <p class="mb-1">{{movie.description}}</p>
                <input type="text" value="Favorita" class="card-link btn btn-success"  @click="margarFavorito(movie)"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Individual",
    props:["years", "movie"],
    
    mounted(){
        // console.log(this.movie)
    },
    methods:{
        margarFavorito(movie){
            //  console.log(movie)

            // Enviar al padre
            this.$emit('favorita', movie) // metodo para enviar al padre
        }
    }
}
</script>
