<template>
    <button class="py-[10px] px-[30px] rounded-[10px] flex justify-center items-center 
        border border-blue-500 bg-white font-bold text-[16px] text-blue-500 
        hover:bg-blue-500 hover:text-white" @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script setup lang="ts">
interface Props {
    text: string;
}
defineProps<Props>();
defineEmits(['click']);
</script>

<style scoped></style>
