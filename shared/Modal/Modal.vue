<template>
    <Teleport to="body">
        <div v-show="visible">
            <div class="overflow-auto fixed z-[1000] top-0 left-0 flex w-full h-full bg-white bg-opacity-40"
                @mousedown="closeModal">
                <div class="w-full flex justify-center items-center">
                    <div class="modal-shadow m-auto rounded-[10px] bg-white text-black" v-bind="$attrs" ref="contentRef">
                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
    visible: boolean,
}
const props = defineProps<Props>();

const emit = defineEmits(['close']);

const contentRef = ref<HTMLDivElement>();

function closeModal(e: any) {
    let el = e.target;
    const nodes = [];
    nodes.push(el);

    while (el) {
        nodes.unshift(el.parentNode);
        el = el.parentNode;
    }

    const hasWrapper = nodes.reduce((res, element) => {
        return res || element === contentRef.value;
    }, false);

    if (!hasWrapper) {
        emit('close');
    }
}
</script>

<style scoped>
.modal-shadow {
    box-shadow: 0 0 10px 1px #bae6fd;
}
</style>
