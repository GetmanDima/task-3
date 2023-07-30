<template>
    <TextInput :value="value" @input="input"/>
</template>

<script setup lang="ts">
import { TextInput } from '../';

interface Props {
    value: string;
}
defineProps<Props>();

const emit = defineEmits(['input', 'update:value']);

function input(val: string) {
    const numberRegex = /^([1-9]{1}([0-9]+)?)?$/g;
    const fractionRegex = /^([1-9]{1}([0-9]+)?)\/([1-9]{1}([0-9]+)?)?$/g;

    if (val.match(numberRegex) || val.match(fractionRegex)) {
        emit('input', val);
        emit('update:value', val);
    }
}
</script>
