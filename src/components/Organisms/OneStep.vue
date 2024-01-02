<script lang="ts">
export default {
    name: 'OneStep'
}
</script>



<template>
    <div class="container md:grid md:grid-cols-2 lg:gap-28  gap-10 pt-10 mb-20  items-center">
        <div class="col-span-1 flex flex-col gap-10 pb-7">
            <div class="bg-slate-400 h-64 rounded-xl"></div>
            <div class="bg-slate-400 h-64 rounded-xl"></div>
        </div>

        <div class="col-span-1 flex flex-col gap-10">
            <div class="flex flex-col gap-7">
                <h1 class="lg:text-5xl md:text-3xl text-3xl items-center text-secondaryColor font-bold">One step ahead to
                    living your
                    dream</h1>
                <p class="lg:text-2xl text-xl text-gray-400">
                    Sometimes features require a short description. This can be detailed description or just a
                    short text.
                </p>
            </div>

            <div class="grid grid-cols-6 gap-4">
                <div class="col-span-1 flex flex-col justify-cen items-center ">
                    <div
                        class="rounded-full lg:w-16 lg:h-16 w-12 h-12 bg-primaryColor text-white flex items-center justify-center">
                        <h1 class="lg:text-3xl text-xl font-bold">1</h1>
                    </div>
                    <div class="border lg:h-20  h-40 w-1 bg-gray-300 border-gray-300"></div>
                    <div
                        class="rounded-full lg:w-16 lg:h-16 w-12 h-12 bg-primaryColor text-white flex items-center justify-center">
                        <h1 class="lg:text-3xl text-xl font-bold">2</h1>
                    </div>
                    <div class="border lg:h-20 h-40 w-1 bg-gray-300 border-gray-300"></div>
                    <div
                        class="rounded-full lg:w-16 lg:h-16 w-12 h-12 bg-primaryColor text-white flex items-center justify-center">
                        <h1 class="lg:text-3xl text-xl font-bold">3</h1>
                    </div>
                </div>
                <div class="col-span-5 flex flex-col gap-12">
                    <div class="flex flex-col gap-3">
                        <h1 class="lg:text-3xl text-2xl font-medium  text-primaryColor">Register your account</h1>
                        <p class="text-gray-400 text-xl">
                            Sometimes features require a short description. This can be detailed description or
                            just a short text.
                        </p>
                    </div>
                    <div class="flex flex-col gap-3">
                        <h1 class="lg:text-3xl text-2xl font-medium  text-primaryColor">Register your account</h1>
                        <p class="text-gray-400 text-xl">
                            Sometimes features require a short description. This can be detailed description or
                            just a short text.
                        </p>
                    </div>
                    <div class="flex flex-col gap-3">
                        <h1 class="lg:text-3xl text-2xl font-medium  text-primaryColor">Register your account</h1>
                        <p class="text-gray-400 text-xl">
                            Sometimes features require a short description. This can be detailed description or
                            just a short text.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>