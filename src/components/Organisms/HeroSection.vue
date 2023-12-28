<script lang="ts">
import JobSelection from '../Molecules/JobSelection.vue'

export default {
    components: {
        JobSelection
    },

    name: 'HeroSection'
   
}
</script>

<template>
    <div class="container grid grid-cols-2 mt-20"> 
        <div class="col-span-1">
            <div class="flex flex-col  gap-6">
                <div class="text-7xl font-bold text-secondaryColor">
                    <h1>Unlock Your </h1>
                    <h1>Backend </h1>
                    <h1>Future</h1>
                </div>
                <p class="text-3xl text-gray-400"> Find the Tailored Backend Job or the Perfect Backend Talent.</p>
            </div>
    <JobSelection/>
        </div>
        <div class="col-span-1">

         </div>
    </div>
</template>