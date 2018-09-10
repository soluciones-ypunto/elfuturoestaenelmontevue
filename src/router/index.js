import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import TreeHome from '@/components/TreeHome/TreeHome'
import Documental from '@/components/Documental/Documental'
import PostsSection from '@/components/PostsSection/PostsSection'
import PostsEspecial from '@/components/PostEspecial/PostsEspecial'
import Post from '@/components/Post/Post'

Vue.use(Router)

export default new Router({
  // linkActiveClass: 'active',
  linkExactActiveClass: 'router-link-exact-active active',
  exact: true,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/treehome',
      name: 'TreeHome',
      component: TreeHome,
      meta: {
        nav: {
          class: 'home',
          image: '',
          show: false,
          pin: false
        }
      }
    },
    {
      path: '/documental',
      name: 'Documental',
      component: Documental,
      meta: {
        nav: {
          class: 'home',
          image: '',
          show: false,
          pin: false
        }
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        nav: {
          class: 'home',
          image: '',
          show: false,
          pin: false
        }
      }
    },
    {
      path: '/integran',
      name: 'Especial',
      component: PostsEspecial,
      props: true,
      meta: {
        nav: {
          class: '',
          image: '',
          show: false,
          pin: false
        }
      }
    },
    {
      path: '/:category',
      name: 'Category',
      component: PostsSection,
      props: true,
      meta: {
        slug: '',
        nav: {
          class: '',
          image: '',
          show: false,
          pin: false
        }
      }
    },
    {
      path: '/:category/:type/:year/:month/:slug',
      name: 'Post',
      component: Post,
      props: true,
      meta: {
        nav: {
          class: '',
          image: '',
          show: false,
          pin: false
        }
      }
    }
  ]
})
