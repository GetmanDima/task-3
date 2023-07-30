<template>
    <VForm :title="getFormTitle(stage)">
        <div v-show="stage === 'start'" class="flex justify-center">
            <VButton text="Далее" @click="stage = 'surname'" />
        </div>
        <TextForm v-if="stage === 'surname'" v-model:text="surname" placeholder="Введите фамилию"
            @submit="stage = 'name'" />
        <TextForm v-if="stage === 'name'" v-model:text="name" placeholder="Введите имя" @submit="stage = 'phone'" />
        <PhoneModal v-model:phone="phone" :visible="phoneVisible" @close="phoneVisible = false" @submit="finish" />
    </VForm>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { VButton, VForm } from '@shared';
import { Stage } from './type';
import { getFormTitle } from './lib';
import { TextForm } from './TextForm';
import { PhoneModal } from './PhoneModal';

const router = useRouter();

const stage = ref<Stage>('start');
const name = ref('');
const surname = ref('');
const phone = ref('');

const phoneVisible = computed({
    get() {
        return stage.value === 'phone';
    },
    set(v: boolean) {
        stage.value = v ? 'phone' : 'name';
    }
});

function finish() {
    router.push({ path: `/result`, query: { name: name.value, surname: surname.value, phone: phone.value } });
}
</script>
