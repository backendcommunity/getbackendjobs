<script lang="ts">
import PageButton from '../Atoms/PageButton.vue'
export default {
  components: { PageButton },
    name: 'JobSelection'
}
</script>

<template>
    <div class="mt-10 p-10 bg-gray-100 rounded-2xl">
        <div class=" w-96 flex flex-col gap-4 item items-center justify-center">  
        
        <select id="small" class="block w-full p-4     text-xl  border border-gray-200 rounded-lg text-gray-400  ">
          <option selected>Seinor Backend Developer</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
    

            <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 ">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
        </div>
        <PageButton/>
    </div>
</template>