<script lang="ts">

import PageButton from './PageButton.vue';

export default {
    components: { PageButton },
    name: "JobS",



}
</script>

<template>
    <div class="flex flex-col col-span-1 gap-5 bg-white p-5 rounded-xl">
        <div class="flex gap-3 items-center">
            <img src='@/assets/circle.svg' alt="" w-10 />
            <div class="flex flex-col gap-">
                <h1 class="text-xl font-medium">Company Name</h1>
                <p class="text-sm text-gray-400"> Location</p>
            </div>
        </div>
        <div class="flex flex-col gap-3">
            <h1 class="font-medium text-xl">Seinor Backend Engineer</h1>
            <p class="text-xl">Sometimes features require a short description, detailed or short text</p>
        </div>
        <div class="text-gray-400 text-xl ">Full Time - 2 Position</div>
        <div class="flex justify-between">
            <div class="flex gap-2 items-center">
                <h1 class="font-medium text-2xl text-secondaryColor">$4000</h1>
                <P class="text-xs text-gray-400">/month</P>
            </div>
            <page-button />
        </div>
    </div>
</template>