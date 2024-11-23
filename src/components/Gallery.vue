<script setup>
import { ref } from 'vue'

import party_1 from "@/assets/images/party_1.jpg"
import party_2 from "@/assets/images/party_2.jpg"
import party_3 from "@/assets/images/party_3.jpg"
import party_4 from "@/assets/images/party_4.jpg"
import party_5 from "@/assets/images/party_5.jpg"

const images = [party_1, party_2, party_3, party_4, party_5]
const currentIndex = ref(2) // Partiamo dalla terza immagine (indice 2)

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
</script>

<template>
    <section id="gallery" class="py-14 lg:py-24 relative">
        <h2
        class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative text-center">
            Our Gallery
        </h2>
      <div id="animation-carousel" class="relative w-3/4 m-auto">
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden rounded-lg w-full md:h-96 h-56">
    
          <div v-for="(image, index) in images" :key="index" 
               :class="['absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2', 
                        index === currentIndex ? 'block' : 'hidden']">
            <img :src="image" class="w-full" alt="...">
          </div>
        </div>
    
        <!-- Slider controls -->
        <button type="button" @click="prevImage" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
    
        <button type="button" @click="nextImage" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </section>
   
</template>

