<template>
  <div id="HomeContainer">
    <div id="videoOverlay"></div>
    <video poster="static/fondovideo.jpg" id="homeVideo" playsinline autoplay muted loop>
        <source src="static/treeBg.mp4" type="video/mp4">
    </video>
    <article id="homeAdvice">
        <h1 class="text-transform-uppercase">
          <vue-typer v-if="mainTitle.line1" text='El Futuro' :repeat='0' :type-delay='100' @typed='typeNextLine("line2")'></vue-typer><br>
          <vue-typer v-if="mainTitle.line2" text='está en el' :repeat='0' :type-delay='100' @typed='typeNextLine("line3")'></vue-typer><br>
          <vue-typer v-if="mainTitle.line3" text='monte' :repeat='0' :type-delay='100' @typed='typeNextLine("mainParagraph")'></vue-typer>
        </h1>
        <transition name="fade">
          <p v-if="mainParagraph">Movimiento que impulsa en la región del Gran Chaco modelos de negocios que promuevan un desarrollo sustentable, competitivo e inclusivo, a través de la puesta en valor del capital natural y cultural, combinando la innovación con los saberes locales.</p>
        </transition>
        
        
    </article>
    <transition name="fade">
      <div id="bottomBar" v-if="mainParagraph">
        <router-link to="/treehome"><p v-if="mainParagraph" id="enterSite">INGRESAR</p></router-link>
        <transition name="fade">
        <ul v-if="mainParagraph" class="socialLinks no-margin">
          <li><a href="https://facebook.com/futurodelmonte" target="_blank"><i class="mdi mdi-facebook"></i></a></li>
          <li><a href="https://instagram.com/futurodelmonte" target="_blank"><i class="mdi mdi-instagram"></i></a></li>
          <li><a href="https://twitter.com/futurodelmonte" target="_blank"><i class="mdi mdi-twitter"></i></a></li>
        </ul>
        </transition>
        <div class="clr"></div>
      </div>
    </transition>
</div>
</template>

<script>
import { VueTyper } from 'vue-typer'
require('vue2-animate/dist/vue2-animate.min.css')
export default {
  name: 'Home',
  components: {
    VueTyper
  },
  data () {
    return {
      mainTitle: {
        line1: false,
        line2: false,
        line3: false
      },
      mainParagraph: false,
      bottomBar: false,
      enter: false,
      social: false,
      windowWidth: 0,
      windowHeight: 0
    }
  },
  created () {
    let t = this
    setTimeout(function () {
      t.typeNextLine('line1')
    }, 2000)
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)

      // Init
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },
  methods: {
    typeNextLine: function (whatLine) {
      let t = this
      switch (whatLine) {
        case 'line1':
          t.mainTitle.line1 = true
          break
        case 'line2':
          t.mainTitle.line2 = true
          break
        case 'line3':
          t.mainTitle.line3 = true
          break
        case 'mainParagraph':
          t.mainParagraph = true
          break
        case 'bottomBar':
          t.bottomBar = true
          break
        case 'enter':
          t.enter = true
          break
        case 'social':
          t.social = true
          break
      }
    },
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
      console.log(this.windowWidth)
    },

    getWindowHeight (event) {
      this.windowHeight = document.documentElement.clientHeight
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
    window.removeEventListener('resize', this.getWindowHeight)
  }
}
</script>

<style scoped>
@import "home.min.css";
</style>
