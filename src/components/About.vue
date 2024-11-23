<script setup>
import residence from "@/assets/images/residence.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted } from 'vue';

onMounted(() => {
  AOS.init({
    duration: 1000, // Personalizza la durata dell'animazione
    easing: 'ease-in-out',
   once:false
  });
});
</script>

<template>
    <section id="about" class="py-14 lg:py-24 relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
                <div class="img-box" data-aos="fade-right">
                    <img :src="residence" alt="Residence image"
                        class="max-lg:mx-auto object-cover">
                </div>
                <div class="lg:pl-[100px] flex items-center" data-aos="fade-left">
                    <div class="data w-full">
                        <h2
                            class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                            About
                            Us </h2>
                        <p class="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                            Villa Events is an elegant and versatile venue designed to host a wide variety of events and celebrations. Surrounded by lush gardens and offering breathtaking views, it combines sophistication with comfort, making it an ideal location for weddings, corporate gatherings, birthday parties, and other special occasions.
                            The villa features spacious indoor and outdoor areas, allowing for customizable setups to suit your specific needs. With modern amenities, dedicated event staff, and an ambiance that exudes charm, Villa Events ensures a seamless and memorable experience for you and your guests.
                            Whether you envision a grand celebration or an intimate gathering, Villa Events provides the perfect backdrop to create unforgettable moments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>