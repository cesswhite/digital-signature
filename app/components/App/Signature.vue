<template>
    <div
        class="bg-white dark:bg-gray-950 border-2 border-primary-100/60 dark:border-gray-950/60 rounded-md mx-auto shadow-primary-600/20 hover:shadow-primary-500/50 hover:shadow-2xl dark:shadow-primary-500/10 hover:dark:shadow-primary-500/50 transition-all duration-300 ease-in-out hover:dark:shadow-2xl shadow-xl relative">
        <NuxtSignaturePad ref="signature" height="320px" class="w-full" width="100%" :max-width="options.maxWidth"
            :min-width="options.minWidth" :options="{
                penColor: options.penColor, backgroundColor: options.backgroundColor,
            }" />
        <div class="absolute inset-x-0 bottom-8 w-9/12 mx-auto h-1 bg-gray-500/60 rounded-full" />
        <div class="absolute right-0 -bottom-12 lg:top-0 lg:-right-10 flex gap-2 lg:flex-col">
            <UTooltip text="Undo" :popper="{ placement: 'top' }" :shortcuts="[metaSymbol, 'z']">
                <UButton block square @click="undo" icon="i-ph-arrow-arc-left" color="amber" />
            </UTooltip>
            <UTooltip text="Clear" :popper="{ placement: 'top' }" :shortcuts="[metaSymbol, 'k']">
                <UButton block square @click="clear" icon="i-heroicons-trash" color="red" />
            </UTooltip>
            <UTooltip text="Save" :popper="{ placement: 'top' }" :shortcuts="[metaSymbol, 'd']">
                <UButton block square @click="save" icon="i-heroicons-cloud-arrow-down" color="green" />
            </UTooltip>
        </div>
    </div>
    <div class="flex gap-1 mt-4">
        <UPopover mode="hover" :ui="{ width: 'w-full md:w-1/5' }">
            <template #default="{ open }">
                <UButton color="primary" variant="ghost" square aria-label="Choose color" icon="i-heroicons-swatch">
                    <div :style="{ background: options.penColor }" class="size-5 rounded-full" />
                </UButton>
            </template>

            <template #panel>
                <div class='flex flex-wrap gap-2 mt-4 p-2 rounded-md items-center justify-start'>
                    <div v-for='color in colors' :key='color.color'>
                        <button type='button' :style='{ background: color.rgba }'
                            class='grid w-8 h-8 rounded-full place-items-center' @click='options.penColor = color.rgba'>
                        </button>
                    </div>
                </div>
            </template>
        </UPopover>

        <UPopover mode="hover" :ui="{ width: 'w-full md:w-1/5' }">
            <template #default="{ open }">
                <UButton color="primary" variant="ghost" square aria-label="Choose stroke size"
                    icon="i-heroicons-pencil">
                    {{ options.maxWidth }}
                </UButton>
            </template>

            <template #panel>
                <div class='flex flex-wrap gap-2 mt-4 p-2 rounded-md items-center justify-center'>
                    <div v-for='size in sizes' :key='size.size'>
                        <button type='button' :class="[size.class]" :style='{ background: options.penColor }'
                            class='grid rounded-full place-items-center ' @click='options.maxWidth = size.width'>
                        </button>
                    </div>
                </div>
            </template>
        </UPopover>
    </div>
</template>

<script setup lang="ts">
import type { CanvasSignatureRef } from '@selemondev/vue3-signature-pad'
defineShortcuts({
    meta_z: undo,
    meta_k: clear,
    meta_d: save,
})

const signature = ref<CanvasSignatureRef>()
const { metaSymbol } = useShortcuts()
const options = ref({
    penColor: 'rgb(0,0,0)',
    backgroundColor: 'rgb(255, 255, 255)',
    maxWidth: 2,
    minWidth: 2,
})

function undo() {
    return signature.value?.undo && signature.value?.undo()
}

function clear() {
    return signature.value?.clearCanvas && signature.value?.clearCanvas()
}

function save(base64String: string, filename: string = "signature.png"): void {
    if (signature.value) {
        const dataURL = signature.value?.saveSignature();
        if (dataURL) {
            download(dataURL, filename);
        }
    }
}

function download(dataURL: string, filename: string): void {
    const blob = dataURLToBlob(dataURL);
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
}

function dataURLToBlob(dataURL: string): Blob {
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(":")[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);

    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
}
</script>