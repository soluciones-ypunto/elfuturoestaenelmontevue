<template>
  <div id="app">
    <audio loop id="sonidosDelChaco" ref="sonidosDelChaco">
      <source src="static/sonidosdelchaco.min.mp3" type="audio/mpeg">
    </audio>
    <header id="appHeader">
      <button id="openMainNav" v-bind:class="['float-left', hamburguer.classByRoute]" @click="toggleNav()"><i class="mdi mdi-menu"></i></button>
      <router-link to="/" id="mainBrand" class="float-left" >
        <img class="hide-mobile-small" src="static/iso.png" />
        <span>El Futuro está en el Monte</span>
        <div class="clr"></div>
      </router-link>
      <router-link to="/documental" id="viewDocumental" class="float-right hide-mobile-small"><i class="mdi mdi-youtube"></i><span class="hide-mobile-medium">Mirá el documental</span></router-link>
      <div class="clr"></div>
    </header>
    <nav id="mainNav" v-bind:class="[nav.show ? 'show' : 'hide', nav.pin? 'pinned': '', nav.classByRoute]">
      <!--<button id="closeMainNav" @click="toggleMenu()"><i class="mdi mdi-close"></i></button>-->
      <div id="menu">
        <ul id="pagesLinks" class="no-padding">
          <li><router-link to="/"><div>Home</div></router-link></li>
          <li><router-link to="/documental"><div>Documental</div></router-link></li>
          <li><router-link :to="{name: 'Category', params: {category: 'cuida'}}"><div>Cuida</div></router-link></li>
          <li><router-link :to="{name: 'Category', params: {category: 'comparte'}}"><div>Comparte</div></router-link></li>
          <li><router-link :to="{name: 'Category', params: {category: 'aprende'}}"><div>Aprende</div></router-link></li>
          <li><router-link :to="{name: 'Category', params: {category: 'produce'}}"><div>Produce</div></router-link></li>
          <li><router-link :to="{name: 'Category', params: {category: 'agua'}}"><div>Agua</div></router-link></li>

        </ul>
        <ul id="socialLinks" class="no-margin socialLinks">
          <li><a href="https://facebook.com/futurodelmonte" target="_blank"><i class="mdi mdi-facebook"></i></a></li>
          <li><a href="https://instagram.com/futurodelmonte" target="_blank"><i class="mdi mdi-instagram"></i></a></li>
          <li><a href="https://twitter.com/futurodelmonte" target="_blank"><i class="mdi mdi-twitter"></i></a></li>
        </ul>
        <button id="sonidosDelChacoPlay" v-on:click="playMusic()"> <i v-bind:class="['mdi', audio.isPlaying ? 'mdi-pause' : 'mdi-play']"></i>&nbsp;<span>Sonidos del Chaco</span></button>
      </div>
      <div id="navImage" v-bind:class="nav.image == '' ? 'hide' : ''">
        <img v-bind:src="nav.image !== '' ? nav.image : ''" />
      </div>
    </nav>
    <div id="navOverlay" v-bind:class="[nav.show ? 'show' : 'hide', nav.pin? 'pinned': '', nav.classByRoute]" @click="toggleNav(false)"></div>
    <main>
      <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
// import MainNav from './components/Nav/Nav'

export default {
  name: 'app',
  data () {
    return {
      audio: {
        isPlaying: false
      },
      nav: {
        show: false,
        pin: false,
        classByRoute: 'home',
        image: ''
      },
      hamburguer: {
        classByRoute: 'home'
      }
    }
  },
  components: {
    //  'main-nav': MainNav
  },
  created () {
    this.setNavBarStyle(this.$route)
    this.setHamburgerStyle(this.$route)
    this.$watch('$route', this.setNavBarStyle)
    this.$watch('$route', this.setHamburgerStyle)
  },
  mounted () {
    this.playMusic(true)
  },
  watch: {
    $route: 'changeRoute'
  },
  methods: {
    toggleNav: function (t) {
      switch (t) {
        case true:
          this.nav.show = true
          break
        case false:
          this.nav.show = false
          break
        default:
          this.nav.show = !this.nav.show
          break
      }
    },
    pinNav: function (t) {
      this.nav.pin = !this.nav.pin
    },
    setNavBarStyle: function (route) {
      console.log('route: ', route)
      switch (route.params.category) {
        case null:
        case undefined:
          this.nav.classByRoute = 'home'
          this.nav.image = ''
          break
        default:
          this.nav.classByRoute = route.params.category
          this.nav.image = `static/${route.params.category}NavBG.png`
          break
      }
    },
    setHamburgerStyle: function (route) {
      switch (route.params.category) {
        case null:
        case undefined:
          this.hamburguer.classByRoute = 'home'
          break
        default:
          this.hamburguer.classByRoute = route.params.category
          break
      }
    },
    changeRoute: function () {
      const t = this
      setTimeout(function () {
        t.toggleNav(false)
      }, 500)
    },
    playMusic: function (v) {
      let t = this
      t.$refs.sonidosDelChaco.play()
      switch (v) {
        case true:
          t.$refs.sonidosDelChaco.play()
          t.audio.isPlaying = true
          break
        case false:
          t.$refs.sonidosDelChaco.pause()
          t.audio.isPlaying = false
          break
        default:
          this.playMusic(!t.audio.isPlaying)
          break
      }
    }
  }
}
</script>

<style>
@import "../src/libs/normalize/normalize.min.css";
/* @import "../src/fonts/material-design/css/materialdesignicons.min.css"; */
@import "../src/css/common.min.css";
@import "../src/css/ui.min.css";
</style>
