<script lang="ts">
export default {
    name: "WhatPeople"
}
</script>

<template>
    <div class="md:p-20 bg-gray-100 flex flex-col items-center justify-center p-3 pb-20 md:px-28 md:gap-20 gap-5">
        <div>
            <h1 class="md:text-5xl text-3xl font-bold text-center">What people are saying</h1>

        </div>
        <div class="md:p-20 p-4 bg-white flex flex-col md:gap-20 gap-9 items-center">
            <h1 class="md:text-3xl text-xl text-center">Lorem ipsum dolor sit amet consectetur. Sagittis eu tellus turpis
                diam accumsan
                ut
                condimentum. Eget
                dignissim dictum arcu eget cras sit vulputate. Ante enim non aliquet nibh senectus adipiscing nunc. Ut.</h1>

            <div class="flex flex-col justify-center items-center gap-2">
                <img src="@/assets/person.svg" alt="" class="w-16" />
                <h1 class="text-xl font-semibold">Angela Karamoy</h1>
                <p>Lorem ipsum dolor sit amet</p>
            </div>
        </div>
    </div>
</template>