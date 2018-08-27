<template>
    <div id="PageContainer" :class="$route.meta.nav.class" >
      <header>
        <h1>{{page.title.rendered}}</h1>
        <h2>por {{page._embedded.author["0"].name}} | {{page.date.toLocaleDateString()}} | {{page._embedded["wp:term"]["0"]["0"].name}}</h2>
        <img class="pageCover" :src="page._embedded['wp:featuredmedia'][0].source_url"/>
      </header>
      <article v-html="page.content.rendered">
      </article>
    </div>
</template>

<script>
import { HTTP } from '../../http-common'

export default {
  name: 'PageSection',
  data () {
    return {
      page: {}
    }
  },
  created () {
    HTTP.get('pages?slug=' + this.$route.params.slug + '&_embed')
      .then(response => {
        this.page = response.data[0]
        this.page.date = new Date(this.page.date)
        console.log(this.page)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    createBook: function () {
      console.log('hello')
    }
  }
}
</script>

<style scoped>
@import "Page.min.css";
</style>
