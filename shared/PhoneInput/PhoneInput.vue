<template>
    <TextInput :value="value" :invalid="invalid" :maxlength="20" @input="input" />
</template>

<script setup lang="ts">
import { TextInput } from '../';

interface Props {
    value: string;
    invalid?: boolean
}
defineProps<Props>();

const emit = defineEmits(['input', 'update:value']);

function input(val: string) {
    const phoneRegex = /^([+]?\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2,4})$/;
    const numberVal = val.replace(/[^\d]/g, '');

    let phoneVal = numberVal;

    if (val.startsWith('+')) {
        phoneVal = '+' + phoneVal;
    }

    const groups = phoneRegex.exec(phoneVal);

    if (groups?.length === 6) {
        phoneVal = `${groups[1]} ${groups[2]} ${groups[3]}-${groups[4]}-${groups[5]}`
    }

    emit('input', phoneVal);
    emit('update:value', phoneVal);
}
</script>
