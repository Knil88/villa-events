<script setup>
import service from "@/assets/images/services.jpg"
</script>

<template>
    <section id="service" class="py-14 lg:py-24 relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-9">
               
                <div class="lg:pl-[100px] flex items-center">
                    <div class="data w-full">
                        <h2
                            class="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center relative">
                        Our Services    
                        </h2>
                        <p class="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                            At Villa Events, we specialize in creating unforgettable experiences through a wide range of premium services.
                             From event planning and tailored catering to elegant decorations and professional entertainment,
                              we ensure every detail is carefully curated to match your vision. Our team takes pride in delivering exceptional service, 
                              including seamless venue setup and cleanup, as well as capturing memorable moments with professional photography and videography.
                               Whether you're hosting a wedding, birthday, corporate event, or any special celebration, Villa Events is dedicated to transforming your occasion into an extraordinary and stress-free experience.
                        </p>
                    </div>
                </div>
                <div class="img-box">
                    <img :src="service" alt="Service image"
                        class="max-lg:mx-auto object-cover">
                </div>
            </div>
           
        </div>
    </section>
</template>