<scrip lang="ts">
import PageButtonVue from './PageButton.vue';
import PageButton from './PageButton.vue';

export default {
    components: { PageButton },
    name: "JobS",

}
</scrip>

<template>
    <div class="flex flex-col col-span-1 gap-5 bg-white p-5 rounded-xl">
        <div class="flex gap-3 items-center">
            <img src='@/assets/circle.svg' alt="" w-10 />
            <div class="flex flex-col gap-">
                <h1 class="text- font-medium">Compnay Name</h1>
                <p class="text-sm text-gray-400"> Location</p>
            </div>
        </div>

        <div class="flex flex-col gap-3">
            <h1 class="font-medium text-xl">Seinor Backend Engineer</h1>
            <p>Sometimes features require a short description, detailed or short text</p>
        </div>

        <div class="text-gray-400">Full Time - 2 Position</div>


        <div>
            <div class="flex gap-2 items-center">
                <h1 class="font-bold">$4000</h1>
                <P class="text-xs text-gray-400">/month</P>
            </div>

        </div><page-button />

    </div>
</template>