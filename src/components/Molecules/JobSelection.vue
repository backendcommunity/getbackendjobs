<script lang="ts">
import PageButton from '../Atoms/PageButton.vue'
export default {
  components: { PageButton },
    name: 'JobSelection'
}
</script>

<template>
    <div class="my-10 p-10 bg-gray-100 rounded-2xl flex flex-col gap-10 justify-center items-">
        <div class=" w-full flex flex-col gap-4 item items-center justify-center">  
        <select id="small" class="block w-full p-4 px-10 text-xl  border border-gray-200 rounded-lg text-gray-400  ">
          <option selected>Seinor Backend Developer</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
            <select id="small" class="block w-full p-4 px-10 text-xl  border border-gray-200 rounded-lg text-gray-400  ">
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