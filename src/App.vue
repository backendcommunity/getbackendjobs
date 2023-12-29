<script setup lang="ts">

// import PageHeaderVue from "./components/Molecules/PageHeader.vue";
import HeroSectionVue from "./components/Organisms/HeroSection.vue";
import PageHeaderVue from "./components/Molecules/PageHeader.vue"
import TailoredBackendVue from "./components/Organisms/TailoredBackend.vue";
import OneStepVue from "./components/Organisms/OneStep.vue";
import PopularJobsVue from "./components/Organisms/PopularJobs.vue";
</script>

<template>
  <header>
    <PageHeaderVue />
  </header>
  <RouterView />
  <HeroSectionVue />
  <TailoredBackendVue />
  <OneStepVue />
  <PopularJobsVue />
</template>

