<script setup lang="ts">

// import PageHeaderVue from "./components/Molecules/PageHeader.vue";
import  HeroSectionVue from "./components/Organisms/HeroSection.vue";
import PageHeaderVue from "./components/Molecules/PageHeader.vue"
</script>

<template>
  <header>
    <PageHeaderVue/>
  </header>
  <RouterView />
  <HeroSectionVue/>
</template>

