<script setup>
import { ref } from 'vue'
const message = ref('')

</script>

<template>
    <input class="form-input m-1 bg-slate-100" placeholder="Escribe algo" v-model="message">

    <div class="grid grid-cols-12 gap-1 p-1">
        <div v-for="m in message.split('')" class="bg-slate-700 text-slate-200 text-center text-4xl shadow-md">{{ m }}</div>
    </div>

    <div class="grid grid-cols-6 gap-1 p-1">
        <div v-for="m in message.split('')" class="bg-slate-700 text-slate-200 text-center text-4xl shadow-md">{{ m }}</div>
    </div>

    <div class="grid grid-cols-3 gap-1 p-1">
        <div v-for="m in message.split('')" class="bg-slate-700 text-slate-200 text-center text-4xl shadow-md">{{ m }}</div>
    </div>

    <div class="m-1 p-20 bg-slate-700 text-slate-200 text-9xl text-center">{{ message.length }}</div>
</template>