<script setup lang="ts">

// import PageHeaderVue from "./components/Molecules/PageHeader.vue";
import HeroSectionVue from "./components/Organisms/HeroSection.vue";
import PageHeaderVue from "./components/Molecules/PageHeader.vue"
import TailoredBackendVue from "./components/Organisms/TailoredBackend.vue";
import OneStepVue from "./components/Organisms/OneStep.vue";
import PopularJobsVue from "./components/Organisms/PopularJobs.vue";
import GuildingYouVue from "./components/Organisms/GuildingYou.vue";
import WhatPeopleVue from "./components/Organisms/WhatPeople.vue";
import PageFooter from "./components/Molecules/PageFooter.vue";
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
  <GuildingYouVue />
  <WhatPeopleVue />
  <PageFooter />
</template>

