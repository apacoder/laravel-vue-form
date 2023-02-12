<script>
export default {
    data() {
        return {
            info: 'hola',
        }
    },

    methods: {
    },

    mounted() {
    },
}
</script>

<template>
    <form action="POST" class="card  rounded-none sm:rounded-md xl:rounded-xl m-0 sm:m-8 md:m-10 lg:m-20 xl:m-36 xl:mx-72 bg-white">
        <div class="form-grid">
            <div>
                <label class="input-label" for="nombre">Nombres</label>
                <input class="input-text" type="text" id="nombre" name="nombre" value="" placeholder="Nombres">
            </div>

            <div>
                <label class="input-label" for="apellidos">Apellidos</label>
                <input class="input-text" type="text" id="apellidos" name="apellidos" value="" placeholder="Apellidos">
            </div>

            <div>
                <label class="input-label" for="nombre">Nombres</label>
                <input class="input-text" type="text" id="nombre" name="nombre" value="" placeholder="Nombres">
            </div>

            <div>
                <label class="input-label" for="apellidos">Apellidos</label>
                <input class="input-text" type="text" id="apellidos" name="apellidos" value="" placeholder="Apellidos">
            </div>

            <div>
                <label class="input-label" for="apellidos">Apellidos</label>
                <input class="input-text" type="text" id="apellidos" name="apellidos" value="" placeholder="Apellidos">
            </div>
        </div>

        <div class="btn-row mt-5">
            <div class="btn-info">Regresar</div>
            <a class="btn-success" :href="'/'">Enviar</a>
        </div>
    </form>

</template> 
