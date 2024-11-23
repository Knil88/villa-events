<script setup>
import video from "@/assets/videos/video_hero.mp4"
import { onMounted } from "vue";
import Typed from "typed.js";

onMounted(() => {
  const options1 = {
    strings: ["For A Wedding","For A Birthday","For your special moments"], // Frase da digitare
    typeSpeed: 80, // Velocità di digitazione
    backSpeed: 60, // Velocità di cancellazione
    loop: true,    // Ripetizione
    showCursor:false
  };

  new Typed("#typed-1", options1);

});
</script>

<template>
    <!-- forked from: https://codepen.io/cuonoj/pen/JjPmMaB -->

<section class="relative h-screen flex flex-col items-center justify-center text-center text-white ">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover"
            :src="video"
            type="video/mp4" autoplay muted loop></video>
    </div>
    <div class="video-content space-y-2 z-10">
        <h1  class="font-light text-6xl ">Villa Events</h1>
        <h3 id="typed-1" class="font-light text-3xl"></h3>
    </div>
</section>


</template>

<style>
    .video-docker video {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .video-docker::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }
</style>