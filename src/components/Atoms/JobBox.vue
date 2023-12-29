<script lang="ts">
export default {
    name: 'JobBox',
    props: {
        image: String,
        text1: String,
        text2: String,
        numer: String
    }
}
</script>

<template>
    <div class="bg-white p-6 rounded-xl flex flex-col gap-4 col-span-1">
           <img src="@/assets/icon2.svg"  alt="logo" className="w-10" />
           <div class="text-xl font-bold text-secondaryColor">
            <h1>{{ text1 }}</h1>
            <h1>{{ text2 }}</h1>
           </div>
<p class="text-gray-400">{{ numer }} Jobs</p>
    </div>
</template>