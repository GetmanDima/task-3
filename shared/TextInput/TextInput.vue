<template>
    <input ref="inputRef" type="text" :maxlength="maxlength" :placeholder="placeholder"
        class="w-full px-[15px] py-[10px] text-[15px] rounded-[10px] outline outline-[1px] outline-blue-500 focus:outline-[2px]"
        :class="{
            'outline-red-500': invalid
        }"
        @input="input($event)" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
    value: string;
    maxlength?: number,
    placeholder?: string,
    invalid?: boolean
}
const props = defineProps<Props>();
const emit = defineEmits(['input', 'update:value']);

const inputRef = ref<HTMLInputElement>();

watch(() => props.value, () => {
    if (inputRef.value) {
        inputRef.value.value = props.value;
    }
});

function input(e: any) {
    emit('input', e.target.value);
    emit('update:value', e.target.value);

    if (inputRef.value) {
        inputRef.value.value = props.value;
    }
}
</script>

<style scoped></style>
