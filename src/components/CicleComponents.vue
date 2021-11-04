<template>
    <div>
        <Hero title="Practicando el Binding de vueJs" :showBtnBlog="true" :showBtnMovie="true"/>
       

             <!-- Contact section-->
        <section class="bg-light py-5">
            <div class="container px-5 my-5 px-5">
                <div class="text-center mb-5">
                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div>
                    <h2 class="fw-bolder"> Cicle por props {{id}}</h2>
                    <p class="lead mb-0">Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh.</p>
                </div>
                <div class="row gx-5 justify-content-center">
                    <div class="col-lg-6">
                         <button @click="actualizarNombre()" type="button" name="boton"> ACTUALIZAR </button>
                        <button @click="redirigir()" type="button" name="boton"> REDIRIGIR </button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Hero from './HeroComponents.vue'

export default {
    name:"Cicle",
     props: ["id"],
     components:{
         Hero
     },
        data(){
        return {
                data_id:null,
                nombre:"Luis Gomez"
        }
        
        },
         // Después de que se inicializa la instancia, se llama al observador de datos y al evento / observador antes de la configuración del evento
		beforeCreate(){
					console.log("Antes de beforeCreate");
        },
        // Se crea pero no estaa montada
        created(){
            console.log("componente creado")
        },
         // Llamado antes del inicio del montaje: la función de render relacionada se llama por primera vez.
		beforeMount(){
			console.log("beforeMount");
        },
        // Se cagar apenas termine de cargar el componente
        mounted(){
            console.log(this.$route.params.id);
            console.log('Componente montado')
            
        },
        /* 
        Se llama cuando se actualizan los datos, antes de que se parchee el DOM virtual. Esto es adecuado para acceder al DOM existente antes de la actualización, como eliminar manualmente el detector de eventos agregado.
        Este gancho no se llama durante la renderización del lado del servidor, porque solo la primera renderización se realizará en el lado del servidor. 
        */
        beforeUpdate(){
            console.log("beforeUpdate");
        },
        /* 
        El DOM virtual se vuelve a renderizar y se parchea debido a cambios en los datos, después de lo cual se llamará al gancho.
        Cuando se llama a este gancho, el componente DOM se ha actualizado, por lo que ahora puede realizar operaciones que dependen del DOM.
        Sin embargo, en la mayoría de los casos, debe evitar cambiar el estado durante este período. Si desea cambiar el estado en consecuencia, generalmente es mejor usar atributos calculados o observadores.
        Tenga en cuenta que actualizado no promete que todos los componentes secundarios se volverán a dibujar juntos.
        Si de */
        updated(){
            console.log("componente actualizado")
        },
        // Ejecuta cuando el componente se elimina
        // destroyed() {
        //     console.log("componente se elimina")
        // },
        // Funciones
        methods:{
            actualizarNombre(){
                console.log("actualizar")
                this.nombre = "Desarrollador";
            },
            redirigir(){
                console.log("redireccion")

                // REdirigir a otro sio
                this.$router.push('/blog')

                
                // this.$router.push({ name: 'pagina', params: { id: '123' } })
                //    this.$router.push({ path: '/pagina', params: { id: '123' } })
            },
            beforeDestroy(){
					console.log("beforeDestroy");
			},
            /* 
            Se llama después de que se destruye la instancia de Vue. Después de la llamada, todo lo que indique la instancia de Vue se desvinculará, se eliminarán todos los detectores de eventos y se destruirán todas las instancias secundarias.
            Este gancho no se llama durante la renderización del lado del servidor.
            */
            destroyed(){
                console.log("destroyed");
            }

  }
}
</script>
