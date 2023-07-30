<template>
    <ul class="flex text-white text-[18px]">
        <li v-for="item in navItems" class="mr-[20px] opacity-80 font-bold hover:opacity-100" 
            :class="{
                '!opacity-100': item.name === routeName
            }">
            <NuxtLink :to="item.path">{{ item.title }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { navItems } from './constant';

const route = useRoute();

const routeName = computed(() => route.name);
</script>