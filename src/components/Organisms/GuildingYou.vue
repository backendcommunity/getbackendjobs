<script lang="ts">
import PageButton from '../Atoms/PageButton.vue';


export default {
    components: { PageButton, PageButton },
    name: "GuildingYou"
}
</script>



<template>
    <div class="grid md:grid-cols-2 lg:px-20 px-6  pb-24 gap-32 justify-center items-center">
        <div class="col-span-1 flex flex-col gap-10 justify-start">
            <div class="flex flex-col gap-10">

                <div class="flex flex-col gap-10">
                    <h1 class="lg:text-5xl text-3xl space-x-10 font-semibold ">Guiding you through your career, turning one
                        stone at a
                        time.
                    </h1>
                    <p class="text-gray-400 text-2xl">Create useful prototype with our universal wireframes and blocks
                        without
                        any
                        difficulties, just copy and
                        paste wherever you want. </p>
                </div>
                <div class="flex justify-between ">
                    <div>
                        <h1 class="font-bold md:text-4xl text-2xl"> 3.6M+</h1>
                        <p class="text-gray-400">Job Avaliable</p>
                    </div>
                    <div>
                        <h1 class="font-bold md:text-4xl text-2xl"> 2.6M+</h1>
                        <p class="text-gray-400">Job Avaliable</p>
                    </div>
                    <div>
                        <h1 class="font-bold md:text-4xl text-2xl"> 12M+</h1>
                        <p class="text-gray-400">Job Avaliable</p>
                    </div>
                </div>
            </div>
            <div class="flex">

                <PageButton />
            </div>


        </div>
        <div class="col-span-1  flex flex-col gap-10">
            <div class="bg-slate-400 h-64 rounded-xl"></div>
            <div class="bg-slate-400 h-64 rounded-xl"></div>



        </div>
    </div>
</template>