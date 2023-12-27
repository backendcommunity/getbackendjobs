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
    <div>
        <img  src="@/assets/logo.svg" alt="logo" />
        <PageButton/>

     
    </div>
</template>
