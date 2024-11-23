<script setup>
import Footer from './Footer.vue';
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
    <section id="contact" class="py-14 lg:py-24 relative ">
        <h2
        class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative text-center" data-aos="zoom-in">
            Our Contacts
        </h2>
        <div style="width: 90% ; margin: auto;">
            <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                <a href="https://www.gps.ie/">gps tracker sport</a>
            </iframe>
        </div>
    </section>
 
    <Footer/>
</template>