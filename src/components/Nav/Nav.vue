<template>
    <nav id="mainNav" v-bind:class="[nav.show ? 'show' : 'hide', nav.pin? 'pinned': '']">
      <!--<button id="closeMainNav" @click="toggleMenu()"><i class="mdi mdi-close"></i></button>-->
      <ul id="pagesLinks" class="no-padding">
        <li><router-link to="/"><div>Home</div></router-link></li>
        <li><a href="javascript:void(0)"><div>Cuida</div></a></li>
        <li><a href="javascript:void(0)"><div>Comparte</div></a></li>
        <li><a href="javascript:void(0)"><div>Aprende</div></a></li>
        <li><router-link to="/produce"><div>Produce</div></router-link></li>
        <li><a href="javascript:void(0)"><div>Agua</div></a></li>
      </ul>
      <ul id="socialLinks" class="no-margin">
        <li><a href="https://facebook.com/futurodelmonte" target="_blank"><i class="mdi mdi-facebook"></i></a></li>
        <li><a href="https://instagram.com/futurodelmonte" target="_blank"><i class="mdi mdi-instagram"></i></a></li>
        <li><a href="https://twitter.com/futurodelmonte" target="_blank"><i class="mdi mdi-twitter"></i></a></li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'main-nav',
  data () {
    return {}
  }
}
</script>

<style scoped>
@import "mainNav.min.css";
</style>
