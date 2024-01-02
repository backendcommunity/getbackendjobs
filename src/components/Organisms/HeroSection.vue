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
    <div class="container grid md:grid-cols-2 my-20 gap-44">
        <div class="col-span-1">
            <div class="flex flex-col  gap-6">
                <div class="lg:text-7xl text-6xl font-bold text-secondaryColor">
                    <h1>Unlock Your </h1>
                    <h1>Backend </h1>
                    <h1>Future</h1>
                </div>
                <p class="text-3xl text-gray-400"> Find the Tailored Backend Job or the Perfect Backend Talent.</p>
            </div>
            <JobSelection />
        </div>
        <div class="col-span-1 p-16 h-full bg-primaryColor lg:relative rounded-tl-[7rem] rounded-br-[7rem]">
            <div class="flex flex-col  h-full justify-between w-full absolute">
                <div class="flex gap-3 items-center  relative left-48 shadow-2xl p-5 bg-white rounded-xl w-80">
                    <img src="@/assets/world.svg" alt="logo" className="w-20" />
                    <div>
                        <h1 class="text-3xl font-bold">99+</h1>
                        <p>Job For Countries</p>
                    </div>
                </div>
                <div
                    class="flex gap-3 items-center shadow-2xl  p-5 w-80 bg-white rounded-xl relative left- right-52 bottom-32">
                    <img src="@/assets/chart.svg" alt="logo" className="w-20" />
                    <div>
                        <h1 class="text-3xl font-bold">15k+</h1>
                        <p>Companies Job</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>