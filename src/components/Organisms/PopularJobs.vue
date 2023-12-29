<script lang="ts">
import JoBS from '../Atoms/JoBS.vue'
import PageButton from '../Atoms/PageButton.vue';
export default {
    components: { JoBS, PageButton },
    name: "PopularJobs"
}
</script>

<template>
    <div class="bg-gray-100 pt-20 pb-10 my-40 flex flex-col justify-center items-center">
        <div class=" bg-gray-100 ">
            <div class="flex flex-col gap-6 justify-center items-center">
                <h1 class="text-5xl font-bold text-secondaryColor">Explore popular jobs</h1>
                <p class="text-xl text-gray-400">Create your useful prototype with our universal wireframes and blocks
                </p>
            </div>
        </div>

        <div class="grid grid-cols-3 px-24 py-16  gap-10">
            <JoBS />
            <JoBS />
            <JoBS />
            <JoBS />
            <JoBS />
            <JoBS />
        </div>


        <page-button />

    </div>
</template>