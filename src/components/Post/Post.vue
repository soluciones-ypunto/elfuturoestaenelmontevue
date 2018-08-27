<template>
    <div id="PostContainer" :class="[$route.params.category,$route.meta.nav.class]" >
      
      <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
        <header v-if="loading" id="loadingHeader">
          <h1><div class="animated-background"></div></h1>
          <h2><div class="animated-background"></div></h2>
        </header>
      </transition>
      <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
        <header v-if="!loading">
          <h1>{{post.title.rendered}}</h1>
          <h2> <span v-if="$route.params.type === 'post' && post.tags.length > 0">{{post._embedded['wp:term'][1][0].name}} | </span>{{post.date.toLocaleDateString()}}<span v-if="$route.params.type === 'post'"> | {{post._embedded["wp:term"]["0"]["0"].name}}</span></h2>
          <img class="postCover" :src="post._embedded['wp:featuredmedia'][0].source_url"/>
        </header>
      </transition>
      <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
        <section id="categoryBrand" v-if="!loading.pageInfo">
          <img :src="categoryBrand.image"/>
        </section>
      </transition>
      <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
        <article v-if="loading" id="loadingArticle">
          <p><span class="animated-background"></span></p>
          <p><span class="animated-background"></span></p>
          <p><span class="animated-background"></span></p>
        </article>
      </transition>
      <transition name="fade" enter-active-class="fadeIn" leave-active-class="fadeOut">
        <article v-if="!loading" v-html="post.content.rendered"></article>
      </transition>
      
      <section id="maybeYouWantThis">
        <header>
          <h1>{{$route.params.type === 'post'? 'También te puede interesar' : '¡Lo nuevo!'}}</h1>
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
      
    </div>
</template>

<script>
import { HTTP } from '../../http-common'

export default {
  name: 'PostsSection',
  data () {
    return {
      loading: true,
      category: {},
      post: {},
      relatedPosts: [],
      categoryBrand: { image: '' }
    }
  },
  created () {
    var _t = this
    var type
    switch (_t.$route.params.type) {
      case 'page':
        type = 'pages'
        break
      case 'post':
        type = 'posts'
        break
      default:
        type = 'posts'
        break
    }
    _t.setCategoryBrandStyle(_t.$route)
    HTTP.get(`${type}?slug=${_t.$route.params.slug}&_embed`)
      .then(response => {
        _t.post = response.data[0]
        _t.post.date = new Date(_t.post.date)
      })
      .then(() => {
        _t.loading = false
        let relatedPostRequestURL = ''
        if (type === 'posts') {
          HTTP.get(
            `posts?tags=${_t.post.tags.join()}&exclude=${
              _t.post.id
            }&per_page=3&_embed`
          ).then(response => {
            _t.relatedPosts = response.data.slice(0, 3)
            _t.relatedPosts.forEach(function (element, i) {
              _t.$set(_t.relatedPosts[i], 'datetime', new Date(element.date))
            })
          })
        } else {
          HTTP.get(`categories?slug=${_t.$route.params.category}`).then(
            response => {
              if (response.data.length !== 0) {
                let catdata = response.data[0]
                _t.category = Object.assign({}, _t.category, {
                  id: catdata.id,
                  slug: catdata.slug,
                  name: catdata.name
                })
                HTTP.get(
                  `posts?categories=${_t.category.id}&per_page=3&_embed`
                ).then(response => {
                  _t.relatedPosts = response.data.slice(0, 3)
                  _t.relatedPosts.forEach(function (element, i) {
                    _t.$set(
                      _t.relatedPosts[i],
                      'datetime',
                      new Date(element.date)
                    )
                  })
                })
              }
            }
          )
        }
        console.log(relatedPostRequestURL)
        HTTP.get(relatedPostRequestURL).then(response => {
          _t.relatedPosts = response.data.slice(0, 3)
          _t.relatedPosts.forEach(function (element, i) {
            _t.$set(_t.relatedPosts[i], 'datetime', new Date(element.date))
          })
        })
      })
      .catch(e => {
        _t.errors.push(e)
      })
  },
  methods: {
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
  }
}
</script>

<style scoped>
@import "Post.min.css";
</style>
