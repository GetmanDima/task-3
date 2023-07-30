<template>
    <VForm title="Результат">
        <div class="overflow-hidden text-[20px] text-blue-600">
            <div class="mb-[20px] flex">
                <div class="min-w-[100px]">Фамилия:</div>
                <div class="font-bold">{{ surname }}</div>
            </div>
            <div class="mb-[20px] flex">
                <div class="min-w-[100px]">Имя:</div>
                <div class="font-bold">{{ name }}</div>
            </div>
            <div class="flex">
                <div class="min-w-[100px]">Телефон:</div>
                <div class="font-bold">{{ phone }}</div>
            </div>
        </div>
    </VForm>
</template>

<script setup lang="ts">
import { VForm } from '@shared';

interface Props {
    surname: string,
    name: string,
    phone: string;
}
defineProps<Props>();
</script>
