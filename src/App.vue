<script setup>
import {ref,onMounted} from 'vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Gallery from './components/Gallery.vue';
import Contact from './components/Contact.vue';
import Loading from './components/Loading.vue';

const isLoading = ref(true);

onMounted(()=>{
    setTimeout(() => {
        isLoading.value=false
    }, 2500);
})


</script>

<template>
    <div v-if="isLoading">
        <Loading/>
    </div>
    <div v-if="!isLoading" class="animate__animated animate__fadeIn">
        <Navbar/>
    <HeroSection/>
    <About/>
    <Services/>
    <Gallery/>
    <Contact/>
    </div>
</template>

<style scoped>

</style>
