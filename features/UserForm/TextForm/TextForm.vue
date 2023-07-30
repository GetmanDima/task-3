<template>
    <div class="flex flex-col items-center">
        <div class="w-full mb-[30px]">
            <TextInput :value="text" :placeholder="placeholder" :invalid="invalidText" :maxlength="maxlength" @input="(v: string) => emit('update:text', v)" />
        </div>
        <VButton text="Далее" @click="submit" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { TextInput, VButton } from '@shared';

interface Props {
    text: string,
    placeholder?: string,
    maxlength?: number
}
const props = withDefaults(defineProps<Props>(), {
    maxlength: 30
});

const emit = defineEmits(['update:text', 'submit']);

const invalidText = ref(false);

watch(() => props.text, () => {
    invalidText.value = false;
});

function submit() {
    invalidText.value = props.text.length === 0;

    if (!invalidText.value) {
        emit('submit');
    }
}
</script>
