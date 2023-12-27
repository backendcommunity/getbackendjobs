<script lang="ts">
import PageButton from '../Atoms/PageButton.vue'
export default {
    name: 'Header',
    components: {
     PageButton
    }
}
</script>

<template>
    <div>
        <img  src="@/assets/logo.svg" alt="logo" />
        <PageButton/>
        
     
    </div>
</template>
