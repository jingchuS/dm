import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import renqiMore from 'pages/renqiMore/renqiMore'
import doumiMain from 'pages/doumi/doumi-main'
import HsalaryMore from 'pages/renqiMore/HsalaryMore'
import wageProMore from 'pages/renqiMore/wageProMore'
import city from 'pages/doumi/doumi-city'
import othercity from 'pages/otherCity/otherCity'
import postype from 'pages/otherCity/posType'
import sortpos from 'pages/otherCity/sortpos'
import sortsex from 'pages/otherCity/sortsex'
import detail from 'pages/details/detail'

const routes = [
  {
    path: '/',
    redirect: '/doumi'
  },
  {
    name: 'doumiMain',
    path: '/doumi',
    component: doumiMain
  },
  {
    name: 'city',
    path: '/city',
    component: city
  },
  {
    name: 'renqiMore',
    path: '/rqmore',
    component: renqiMore
  },
  {
    name: 'HsalaryMore',
    path: '/hsalarymore',
    component: HsalaryMore
  },
  {
    name: 'wageProMore',
    path: '/wagepromore',
    component: wageProMore
  },
  {
    name: 'othercity',
    path: '/othercity',
    component: othercity,
    props: true
  },
  {
    name: 'postype',
    path: '/postype',
    component: postype
  },
  {
    name: 'sortpos',
    path: '/sortpos',
    component: sortpos
  },
  {
    name: 'sortsex',
    path: '/sortsex',
    component: sortsex
  },
  {
    name: 'detail',
    path: '/detail',
    component:detail
  }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router