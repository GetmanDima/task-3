<template>
    <div>
        <VHeader />
        <slot />
    </div>
</template>

<script setup lang="ts">
import { VHeader } from './VHeader';
</script>