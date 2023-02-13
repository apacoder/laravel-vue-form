<script setup>
import { ref } from 'vue'
const 
    count = ref(23),
    nombre = ref('hola'),
    mostrar = ref(false)

const aumentar = () => {
    count.value++
}

</script>

<template>
    <div class="bg-emerald-100">
    <input class="form-input" type="text" v-model="nombre"> <br>
    {{ nombre }} <br>
    About counter: <button type="button" @click="aumentar">count is {{ count }}</button>
    <br> <input type="checkbox" v-model="mostrar">
    <h1 v-if="mostrar" class="text-3xl bg-emerald-200 text-emerald-800 p-10 shadow-lg">
        About page
    </h1>
    </div>
</template>