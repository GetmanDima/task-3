<template>
    <VForm title="Посчитать сумму">
        <div>
            <div v-for="(val, i) in values" :key="i" class="mb-[20px]">
                <NumberInput :value="val" :maxlength="14" placeholder="Введите число" @input="(v: any) => values[i] = v" />
            </div>
        </div>
        <div class="mt-[30px] text-[20px] text-blue-600">
            Сумма: <span class="font-bold">{{ sumText }}</span>
        </div>
    </VForm>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { countSum } from './lib';
import { NumberInput, VForm } from '@shared';

const values = ref<string[]>(['']);

const sumText = computed(() => {
    const sum = countSum(values.value);

    return isNaN(sum) ? '?' : sum.toString();
});

watch(() => values.value[values.value.length - 1], (newValue) => {
    if (newValue !== '') {
        values.value.push('');
    }
});

watch(() => values.value, (newValues) => {
    if (newValues.length < 2) {
        return;
    }
    const last = newValues[newValues.length - 1];
    const prev = newValues[newValues.length - 2];

    if (last === '' && prev === '') {
        values.value.pop();
    }
}, { deep: true });

</script>
