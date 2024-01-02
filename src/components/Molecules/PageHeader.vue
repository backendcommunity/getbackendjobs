<script lang="ts">
import PageButton from '../Atoms/PageButton.vue'

export default {
    name: 'PageHeader',
    components: {
        PageButton
    },
    data() {
        return {
            isMobileMenuOpen: false
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        }
    }
}
</script>

<template>
    <div class="container py-5 flex justify-between items-center overflow-hidden  ">
        <img src="@/assets/masteringlogo.png" alt="logo" class="md:w-64 w-52" />

        <!-- Hamburger Icon for Mobile -->
        <div class="lg:hidden cursor-pointer" @click="toggleMobileMenu">
            <!-- You can use any icon library or custom SVG for the hamburger icon -->
            <svg xmlns="http://www.w3.org/2000/svg" height="25" width="" viewBox="0 0 448 512">
                <path
                    d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z" />
            </svg>
        </div>

        <!-- Navigation Links (Responsive) -->
        <div class="hidden lg:flex justify-center items-center gap-10">
            <div class="flex gap-10 text-xl items-center text-secondaryColor">
                <router-link to="/" class="hover:border-b-4 border-primaryColor p-2">Home</router-link>
                <router-link to="/career" class="hover:border-b-4 p-2 border-primaryColor">Career</router-link>
                <router-link to="/faq" class="hover:border-b-4 p-2 border-primaryColor">Faq</router-link>
                <router-link to="/login" class="hover:border-b-4 p-2 border-primaryColor">Login</router-link>
            </div>
            <PageButton />
        </div>

        <!-- Mobile Menu (Dynamic) -->
        <div v-if="isMobileMenuOpen" class="lg:hidden  top-0 left-0 body w-full h-[990px] bg-white fixed">
            <!-- Mobile Navigation Links -->
            <div class="flex flex-col items-center py-10">
                <router-link to="/" class="hover:border-b-4 border-primaryColor p-2">Home</router-link>
                <router-link to="/career" class="hover:border-b-4 p-2 border-primaryColor">Career</router-link>
                <router-link to="/faq" class="hover:border-b-4 p-2 border-primaryColor">Faq</router-link>
                <router-link to="/login" class="hover:border-b-4 p-2 border-primaryColor">Login</router-link>
                <PageButton />

            </div>
            <!-- Close Button for Mobile Menu -->
            <div class="cursor-pointer text-secondaryColor absolute top-5 right-5" @click="toggleMobileMenu">
                <!-- You can use any icon library or custom SVG for the close icon -->
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24">
                    <path
                        d="M3.71 3.71a1.02 1.02 0 0 1 1.42 0L12 10.59l7.88-7.88a1.02 1.02 0 0 1 1.42 1.42L13.41 12l7.88 7.88a1.02 1.02 0 0 1-1.42 1.42L12 13.41l-7.88 7.88a1.02 1.02 0 0 1-1.42-1.42L10.59 12 2.71 4.12a1.02 1.02 0 0 1 0-1.41z" />
                </svg>


            </div>
        </div>
    </div>
</template>
