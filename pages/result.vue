<template>
    <div class="page-wrapper my-[30px] flex items-center">
        <Result :name="name" :surname="surname" :phone="phone" />
    </div>
</template>

<script lang="ts" setup>
import { Result } from '@features/Result';

const route = useRoute();

const name = computed<string>(() => route.query.name);
const surname = computed<string>(() => route.query.surname);
const phone = computed<string>(() => route.query.phone);
</script>
