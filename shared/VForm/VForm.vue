<template>
    <div class="w-[420px] mx-auto px-[50px] py-[20px] border border-blue-500 bg-blue-50 rounded-[10px]">
        <div class="mb-[30px] text-[22px] text-center text-blue-600 font-bold">{{ title }}</div>
        <slot />
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string
}
defineProps<Props>();
</script>
