<script lang="ts">

import JobBox from '../Atoms/JobBox.vue'



export default {
    components: { JobBox, },
    name: 'TailoredBackend'
}
</script>

<template>
    <div class="bg-gray-100 pt-20  p-6 md:my-40">
        <div class=" bg-gray-100 ">
            <div class="flex flex-col gap-6 justify-center items-center">
                <h1 class="md:text-5xl  text-4xl font-bold text-secondaryColor">Tailored Backend Jobs</h1>
                <p class="text-xl text-gray-400">Spend less time searching. More time applying. Our bot curate only the
                    finest
                </p>
            </div>

        </div>

        <div class="grid lg:grid-cols-4 md:grid-cols-2 lg:px-24 py-16  gap-10">
            <JobBox image='@/assets/cac.svg' text1="DevOps " text2="Engineer" numer="180k" />
            <JobBox text1="Php Laravel " text2="Developer" numer="180k" />
            <JobBox image='@/assets/icon3.svg' text1="Design & " text2="Develoment" numer="400k" />

            <JobBox image='@/assets/icon4.svg' text1="Engineering and " text2="Technology" numer="400k" />
            <JobBox image='@/assets/icon4.svg' text1="Engineering and " text2="Technology" numer="400k" />
            <JobBox image='@/assets/icon4.svg' text1="Engineering and " text2="Technology" numer="400k" />
            <JobBox image='@/assets/icon4.svg' text1="Engineering and " text2="Technology" numer="400k" />
            <JobBox image='@/assets/icon4.svg' text1="Engineering and " text2="Technology" numer="400k" />
        </div>

    </div>
</template>