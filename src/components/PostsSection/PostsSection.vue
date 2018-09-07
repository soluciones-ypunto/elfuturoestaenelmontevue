<template>
    <div id="PostsSectionContainer" :class="$route.params.category">
        <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
            <section v-if="loading.component" id="loadingHero"></section>
        </transition>
        <section id="hero">
          <div id="heroContent" >

            <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
              <router-link v-if="!loading.pageInfo" :to="{name: 'Post', params: {category: $route.params.category, type: 'page', year: pageInfo.datetime.getFullYear(), month: (pageInfo.datetime.getMonth()+1), slug: pageInfo.slug}}">
                <article >
                  <h1>{{pageInfo.title.rendered}}</h1>
                  <p v-html="pageInfo.excerptSanitized"></p>
                  <div class="readMore">Leer +</div>
                </article>
              </router-link>
            </transition>

            <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
                <article id="loadingPageInfo" v-if="loading.pageInfo" class="loading-box animated-background">
                    <div class="top"></div>
                    <div class="middle"></div>
                    <div class="bottom"></div><div class="left"></div>
                    <div class="right"></div>
                    <div class="right2"></div>
                </article>
            </transition>
          </div>

            <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
                <img class="heroCover" :src="pageInfo._embedded['wp:featuredmedia'][0].source_url" v-if="!loading.pageInfo">
            </transition>
        </section>
        <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
            <section id="categoryBrand" v-if="!loading.pageInfo">
                <img :src="categoryBrand.image"/>
            </section>
        </transition>

        <section id="posts">
            <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
                <article id="loadingFeatured" v-if="loading.featuredPost" class="loading-box">
                    <div class="background animated-background"></div>
                    <div class="top"></div>
                    <div class="middle"></div>
                    <div class="bottom"></div><div class="left"></div>
                    <div class="right"></div>
                    <div class="right2"></div>
                </article>
            </transition>
            <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
                <article id="featured" class="post" v-if="!loading.featuredPost">
                    <button class="showMap" v-on:click="featuredPost.showMap = !featuredPost.showMap"><i class="mdi mdi-map-marker"></i></button>
                    <router-link :to="{name: 'Post', params: {category: $route.params.category, type: 'post', year: featuredPost.datetime.getFullYear(), month: (featuredPost.datetime.getMonth()+1), slug: featuredPost.slug}}">
                    <!--<a :href="'#/'+featuredPost.datetime.getFullYear()+'/'+(featuredPost.datetime.getMonth()+1)+'/'+featuredPost.slug">-->
                        <div class="postCover">
                            <div class="postOverlay"></div>
                            <img  class="" :src="featuredPost._embedded['wp:featuredmedia'][0].source_url"/>
                            <transition name="fadeUp" enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
                                <img  class="" :src="featuredPost.mapURL" v-if="featuredPost.showMap" />
                            </transition>
                        </div>
                        <header>
                            <h1>{{featuredPost.title.rendered}}</h1>
                            <h2 v-if="featuredPost.tags.length > 0">{{featuredPost._embedded['wp:term'][1][0].name}}</h2>
                        </header>
                    <!--</a>-->
                    </router-link>
                </article>
            </transition>

            <div class="postsList">
                <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
                <article v-if="loading.posts" class="commonPostLoading loading-box">
                    <div class="background animated-background"></div>
                    <div class="top"></div>
                    <div class="middle"></div>
                    <div class="bottom"></div><div class="left"></div>
                    <div class="right"></div>
                    <div class="right2"></div>
                </article>
                </transition>
                <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
                    <article v-if="loading.posts" class="commonPostLoading loading-box">
                        <div class="background animated-background"></div>
                        <div class="top"></div>
                        <div class="middle"></div>
                        <div class="bottom"></div><div class="left"></div>
                        <div class="right"></div>
                        <div class="right2"></div>
                    </article>
                </transition>
                <transition-group name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut" tag="article">
                    <article class="post" v-for="post of posts" v-if="!loading.posts" v-bind:key="post">
                        <button class="showMap" v-on:click="post.showMap = !post.showMap"><i class="mdi mdi-map-marker"></i></button>
                        <router-link :to="{name: 'Post', params: {category: $route.params.category, type: 'post', year: post.datetime.getFullYear(), month: (post.datetime.getMonth()+1), slug: post.slug}}">
                        <!--<a :href="'#/'+post.datetime.getFullYear()+'/'+(post.datetime.getMonth()+1)+'/'+post.slug">-->
                            <div class="postCover">
                                <div class="postOverlay"></div>
                                <img  class="" :src="post._embedded['wp:featuredmedia'][0].source_url"/>
                                <transition name="fadeUp" enter-active-class="fadeInUp" leave-active-class="fadeOutDown">
                                    <img  class="" :src="post.mapURL" v-if="post.showMap" />
                                </transition>
                            </div>
                            <header>
                                <h1>{{post.title.rendered}}</h1>
                                <h2 v-if="post.tags.length > 0">{{post._embedded['wp:term'][1][0].name}}</h2>
                            </header>

                        <!--</a>-->
                        </router-link>
                    </article>
                </transition-group>

                <div class="clr"></div>
            </div>

        </section>
        <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
            <section id="newestPosts">
                <header>
                    <h1>¡Lo nuevo!</h1>
                </header>
                <div class="postsList">
                    <article class="post" v-for="relatedPost of relatedPosts">
                        <router-link :to="{name: 'Post', params: {category: $route.params.category, type: 'post', year: relatedPost.datetime.getFullYear(), month: (relatedPost.datetime.getMonth()+1), slug: relatedPost.slug}}">
                            <header>
                                <h1>{{relatedPost.title.rendered}}</h1>
                                <h2 v-if="relatedPost.tags.length > 0">{{relatedPost._embedded['wp:term'][1][0].name}}</h2>
                            </header>
                            <div class="postCover">
                                <img  class="" :src="relatedPost._embedded['wp:featuredmedia'][0].source_url"/>
                            </div>
                        </router-link>
                    </article>

                    <div class="clr"></div>
                </div>
            </section>
        </transition>
        <footer id="appFooter">
            <div class="footerContent">
                <img src="static/logo1.png"/>
                <p>Movimiento que impulsa en la región del Gran Chaco modelos de negocios que promuevan un desarrollo sustentable, competitivo e inclusivo, a través de la puesta en valor del capital natural y cultural, combinando la innovación con los saberes locales.</p>
                <div class="clr"></div>
            </div>
        </footer>
    </div>
</template>

<script>
import { HTTP } from '../../http-common'
import config from '../../config.js'
require('vue2-animate/dist/vue2-animate.min.css')
require('sanitize-html')

export default {
  name: 'PostsSection',
  data () {
    return {
      loading: {
        component: true,
        pageInfo: false,
        featuredPost: false,
        posts: false,
        relatedPosts: false
      },
      categoryBrand: { image: '' },
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
      HTTP.get(
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
    },

    getFeaturedPost: function () {
      this.loading.featuredPost = true
      HTTP.get(
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
        })
    },

    getPageInfo: function () {
      this.loading.pageInfo = true
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
        })
    },

    getRelatedPosts: function () {
      this.loading.relatedPosts = true
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
        })
    },

    getData: function () {
      this.loading.component = true
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
        })
    },

    setCategoryBrandStyle: function (route) {
      switch (route.params.category) {
        case null:
        case undefined:
          this.categoryBrand.image = `static/${route.params.category}NavBG.png`
          break
        default:
          this.categoryBrand.image = `static/${route.params.category}NavBG.png`
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
