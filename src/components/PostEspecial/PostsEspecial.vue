<template>
    <div id="PostsSectionContainer" class="agua">
        <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
            <section  id="loadingHero"></section>
        </transition>
        <section id="hero">
            <div id="heroContent">
                <a data-v-1848a3ca="" href="#" style="max-width: 40rem"><article data-v-1848a3ca=""><h1 data-v-1848a3ca="">Integran, Apoyan, Invierten</h1> <p data-v-1848a3ca="">
                    El Futuro está en el Monte moviliza, orienta y articula inversiones públicas y privadas, nacionales e internacionales, como así también los esfuerzos de Organizaciones de la Sociedad Civil, organizaciones de base (Asociaciones campesinas, comunidades indígenas), Instituciones (Universidades, Institutos de I+D), todos cooperando para que bosques y comunidades convivan y generen desarrollo en el Gran Chaco.
                </p> </article></a>


            </div>

            <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
                <img data-v-1848a3ca="" src="https://elfuturoestaenelmonte.org/wp/wp-content/uploads/2018/02/142-buttonu21929-fr3.png" class="heroCover">
            </transition>
        </section>
        <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
            <section id="categoryBrand">
                <img data-v-1848a3ca="" src="static/aguaNavBG.png">
            </section>
        </transition>

        <section id="posts" style="padding-top:3rem;">
            <div style="text-align: center; margin-bottom: 20px">
            <img src="https://elfuturoestaenelmonte.org/static/logos/FUNDACION-GRAN-CHACO.jpg" style="max-width: 150px; margin-left: 10px"/>
        <img src="https://elfuturoestaenelmonte.org/static/logos/ACDI.jpg"  style="max-width: 130px;margin-left: 10px"/>
        <img src="https://elfuturoestaenelmonte.org/static/logos/AVINA.jpg"  style="max-width: 100px;margin-left: 10px"/>
            <img src="https://elfuturoestaenelmonte.org/static/logos/comunidades.jpg"  style="max-width: 150px;margin-left: 10px"/>
            </div>
            <div style="text-align: center; margin-bottom: 4px">
            <img src="https://elfuturoestaenelmonte.org/static/logos/IAF.jpg"  style="max-width: 100px;margin-left: 10px"/>
            <img src="https://elfuturoestaenelmonte.org/static/logos/FOMIN.jpg" style="max-width: 140px;margin-left: 10px"/>
            <img src="static/logos/BID.jpg"  style="max-width: 160px;margin-left: 10px"/>
            <img src="https://elfuturoestaenelmonte.org/static/logos/CAF.jpg" style="max-width: 140px;margin-left: 10px"/>
            <img src="static/logos/SGP.jpg" style="max-width: 150px;margin-left: 10px"/>
            </div>
            <div style="text-align: center; margin-bottom: 4px">
            <img src="https://elfuturoestaenelmonte.org/static/logos/argentina.svg" style="max-width: 400px"/>
            </div>
            <div style="text-align: center; margin-bottom: 20px">
            <img src="https://elfuturoestaenelmonte.org/static/logos/FORMOSA.jpg" style="max-width: 100px"/>
            <img src="https://elfuturoestaenelmonte.org/static/logos/CHACO.jpg" style="max-width: 120px; margin-left: 20px"/>
            <img src="https://elfuturoestaenelmonte.org/static/logos/TUCUMAN.jpg" style="max-width: 100px"/>
            </div>
            <div style="text-align: center; margin-bottom: 40px">
            <img src="https://elfuturoestaenelmonte.org/static/logos/UNILEVER.jpg" style="max-width: 80px; margin-left: 20px"/>
            <img src="https://elfuturoestaenelmonte.org/static/logos/samsung.jpg" style="max-width: 150px; margin-left: 20px"/>
            <img src="https://elfuturoestaenelmonte.org/static/logos/FONCAP.jpg" style="max-width: 150px; margin-left: 20px"/>
            </div>
            <div>
                <iframe src="http://elfuturoestaenelmonte.solucionesypunto.com/" frameborder="0" width="98%" height="1000px" style="height: 1000px"></iframe>
            </div>

        </section>

        <footer id="appFooter">
            <div class="footerContent">
                <img src="static/logo1.png"/>
                <p>Movimiento que impulsa en la región del Gran Chaco modelos de negocios que promuevan un
                    desarrollo sustentable, competitivo e inclusivo, a través de la puesta en valor del capital natural
                    y cultural, combinando la innovación con los saberes locales.</p>
                <div class="clr"></div>
            </div>
        </footer>
    </div>
</template>

<script>
  // import {HTTP} from '../../http-common'
  // import config from '../../config.js'

  require('vue2-animate/dist/vue2-animate.min.css')
  require('sanitize-html')

  export default {
    name: 'PostsEspecial',
    data () {
      return {
        loading: {
          component: true,
          pageInfo: false,
          featuredPost: false,
          posts: false,
          relatedPosts: false
        },
        categoryBrand: {image: ''},
        category: {},
        pageInfo: {},
        posts: [],
        featuredPost: [],
        relatedPosts: []
      }
    },
    methods: {
      getPosts: function () {
        this.loading.posts = true
        /* HTTP.get(
          `posts?categories=${this.category.id}&sticky=false&per_page=10&_embed`
        )
          .then(response => {
            var vm = this
            this.posts = response.data

            this.posts.forEach(function (element, i) {
              let mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${
                vm.posts[i].acf.latitud
              },${vm.posts[i].acf.longitud}&zoom=${10}&size=400x400&markers=${
                vm.posts[i].acf.latitud
              },${vm.posts[i].acf.longitud}&key=${config.gmapsKey}`

              vm.$set(vm.posts[i], 'datetime', new Date(element.date))
              vm.$set(vm.posts[i], 'showMap', false)
              vm.$set(vm.posts[i], 'mapURL', mapURL)
            })
            console.log('posts!')
          })
          .then(() => {
            this.loading.posts = false
          })
          .catch(e => {
            console.log(e)
          })
      */
      },

      getFeaturedPost: function () {
        this.loading.featuredPost = true
        /* HTTP.get(
                `posts?categories=${this.category.id}&sticky=true&per_page=10&_embed`
              )
                .then(response => {
                  var vm = this
                  if (response.data.length !== 0) {
                    this.featuredPost = response.data[0]

                    let mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${
                      vm.featuredPost.acf.latitud
                    },${vm.featuredPost.acf.longitud}&zoom=${10}&size=700x600&markers=${
                      vm.featuredPost.acf.latitud
                    },${vm.featuredPost.acf.longitud}&key=${config.gmapsKey}`

                    // vm.featuredPost = Object.assign({}, vm.featuredPost, {
                    //  datetime: new Date(this.featuredPost.date),
                    //  showMap: false,
                    //  mapURL: mapURL
                    // })

                    vm.$set(
                      vm.featuredPost,
                      'datetime',
                      new Date(this.featuredPost.date)
                    )
                    vm.$set(vm.featuredPost, 'showMap', false)
                    vm.$set(vm.featuredPost, 'mapURL', mapURL)
                  } else {
                    this.featuredPost = {}
                  }
                  console.log('featured!')
                })
                .then(() => {
                  this.loading.featuredPost = false
                })
                .catch(e => {
                  this.errors.push(e)
                }) */
      },

      getPageInfo: function () {
        this.loading.pageInfo = true
        /*
              HTTP.get(`pages?slug=${this.category.slug}&_embed`)
                .then(response => {
                  var vm = this
                  if (response.data.length !== 0) {
                    this.pageInfo = response.data[0]

                    // vm.featuredPost = Object.assign({}, vm.featuredPost, {
                    //  datetime: new Date(this.featuredPost.date),
                    //  showMap: false,
                    //  mapURL: mapURL
                    // })

                    vm.$set(vm.pageInfo, 'datetime', new Date(this.pageInfo.date))
                    vm.$set(vm.pageInfo, 'showMap', false)
                    vm.$set(
                      vm.pageInfo,
                      'excerptSanitized',
                      this.pageInfo.excerpt.rendered
                        .split('<a')[0]
                        .replace(/(<([^>]+)>)/gi, '')
                    )
                  } else {
                    this.pageInfo = {}
                  }
                })
                .then(() => {
                  this.loading.pageInfo = false
                  this.loading.component = false
                })
                .catch(e => {
                  this.errors.push(e)
                }) */
      },

      getRelatedPosts: function () {
        this.loading.relatedPosts = true
        /*
              HTTP.get(`posts?categories_exclude=${this.category.id}&per_page=3&_embed`)
                .then(response => {
                  var vm = this
                  this.relatedPosts = response.data

                  this.relatedPosts.forEach(function (element, i) {
                    vm.$set(vm.relatedPosts[i], 'datetime', new Date(element.date))
                  })
                })
                .then(() => {
                  this.loading.relatedPosts = false
                })
                .catch(e => {
                  console.log(e)
                }) */
      },

      getData: function () {
        this.loading.component = true
        /*
              this.setCategoryBrandStyle(this.$route)
              HTTP.get(`categories?slug=${this.$route.params.category}`)
                .then(response => {
                  var vm = this
                  if (response.data.length !== 0) {
                    let catdata = response.data[0]
                    vm.category = Object.assign({}, vm.category, {
                      id: catdata.id,
                      slug: catdata.slug,
                      name: catdata.name
                    })
                  } else {
                    this.category = {}
                  }
                })
                .then(() => {
                  this.getPageInfo()
                  this.getFeaturedPost()
                  this.getPosts()
                  this.getRelatedPosts()
                })
                .catch(e => {
                  this.errors.push(e)
                }) */
      },

      setCategoryBrandStyle: function (route) {
        switch (route.params.category) {
          case null:
          case undefined:
            this.categoryBrand.image = `static/aguaNavBG.png`
            break
          default:
            this.categoryBrand.image = `static/aguaNavBG.png`
            break
        }
      }
    },
    created () {
      this.$nextTick(function () {
        this.getData()
      })
    }
  }
</script>

<style scoped>
    @import "PostsSection.min.css";
</style>
