<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorlds from './components/sign_in_form.vue'

import { createRouter } from 'vue-router'
import routes from '~pages'

const router = createRouter({
  
  routes,
})

</script>

<template>
  
  <HelloWorlds/>
</template>

<style >

</style>
