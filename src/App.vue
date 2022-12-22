<template>
  <div id="app">
    <NavBar />
    <HeaderPart/>
    <AboutPart/>
    <CtaPart/>
    <CtaPart2/>
    <ServicesPart/>
    <PricingPart/>
    <OurTeam/>
    <BlogPart/>
    <ConactUs/>
    <FooterPart/>
  </div>
</template>

<script>
import NavBar from './components/NavPart.vue';
import HeaderPart from './components/HeaderPart.vue';
import AboutPart from './components/AboutPart.vue';
import CtaPart from './components/CtaPart.vue';
import CtaPart2 from './components/CtaPart2.vue';
import ServicesPart from './components/ServicesPart.vue';
import PricingPart from './components/PricingPart.vue';
import OurTeam from './components/OurTeam.vue';
import BlogPart from './components/BlogPart.vue';
import ConactUs from './components/ConactUs.vue';
import FooterPart from './components/FooterPart.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    HeaderPart,
    AboutPart,
    CtaPart,
    CtaPart2,
    ServicesPart,
    PricingPart,
    OurTeam,
    BlogPart,
    ConactUs,
    FooterPart

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
@import './assets/bootstrap/css/bootstrap.min.css';
@import './assets/css/index.css';
</style>
