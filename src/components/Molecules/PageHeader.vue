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
    <div class="container py-5 flex justify-between items-center">

        <img  src="@/assets/masteringlogo.png" alt="logo" className="w-64" />
        <div class="flex justify-center items-center gap-10">
            <ul class="flex  gap-10 text-xl items-center">
                <li>Home</li>
                <li>Career</li>
                <li>Faq</li>
                <li>Login</li>
                
            </ul>
            <PageButton/>
        </div>

     
    </div>
</template>
