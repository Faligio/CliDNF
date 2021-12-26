<template>
  <div class="menu">
    <About />
    <Testimonial />
    <Administration />
  </div>
</template>

<script>
// @ is an alias to /src
import About from "@/components/menuComponents/About.vue";
import Testimonial from "@/components/menuComponents/Testimonial.vue";
import Administration from "@/components/menuComponents/Administration.vue";

export default {
  name: "Menu",
  components: {
    About,
    Testimonial,
    Administration,
  },
};
</script>
