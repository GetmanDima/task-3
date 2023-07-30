<template>
    <Modal :visible="visible" @close="$emit('close')">
        <VForm title="Пользователь (телефон)">
            <PhoneInput :value="phone" placeholder="Введите номер телефона" class="mb-[30px]"
                @input="(v: string) => $emit('update:phone', v)" :invalid="invalidPhone" />
            <div class="flex justify-center">
                <VButton text="Закончить" @click="submit" />
            </div>
        </VForm>
    </Modal>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { Modal, PhoneInput, VButton, VForm } from '@shared';
import { isValidPhone } from './lib';

interface Props {
    phone: string,
    visible: boolean,
}
const props = defineProps<Props>();

const emit = defineEmits(['close', 'submit', 'update:phone']);

const invalidPhone = ref(false);

watch(() => props.phone, () => {
    invalidPhone.value = false;
});

function submit() {
    const clearPhone = props.phone.replace(/[^0-9+]/g, '');

    invalidPhone.value = !isValidPhone(clearPhone);

    if (!invalidPhone.value) {
        emit('submit');
    }
}
</script>

<style scoped></style>