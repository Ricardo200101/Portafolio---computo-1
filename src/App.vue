<template>
<Navbar brandName="PORTAFOLIO" />
  <router-view />

  <img src="https://i.pinimg.com/originals/21/11/61/21116158daaeb1459b4ec0758505e1ad.gif" height="750" width="1200" > 

</template>


<script>
  import Navbar from '../src/components/Navbar/index.vue';

  export default({
    components: {
      Navbar
    }
  })
</script>