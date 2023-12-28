<script lang="ts">
import PageButton from '../Atoms/PageButton.vue'
export default {
    name: 'PageHeader',
    components: {
     PageButton
    }
}
</script>

<template>
    <div class="container py-5 flex justify-between items-center ">
        <img  src="@/assets/masteringlogo.png" alt="logo" className="w-64" />
        <div class="flex justify-center items-center gap-10">
            <div class="flex  gap-10 text-xl items-center text-secondaryColor">
            <router-link to="/" class="hover:border-b-4 border-primaryColor p-2">Home</router-link>
            <router-link to="" class="hover:border-b-4 p-2 border-primaryColor">Career</router-link>
            <router-link to="/" class="hover:border-b-4 p-2 border-primaryColor">Faq</router-link>
            <router-link to="/" class="hover:border-b-4 p-2 border-primaryColor">Login</router-link>
            </div>
            <PageButton/>
             
        </div>

     
    </div>
</template>
