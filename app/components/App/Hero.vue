<template>
    <div class="flex flex-col justify-center items-center h-screen gap-4 relative ">
        <div class="fixed top-2 right-2">
            <AppSwitchMode />
        </div>
        <div class="relative">
            <div class="w-full md:max-w-3xl mx-auto">
                <div class="flex flex-col items-center justify-center mb-12">
                    <span
                        class="relative rounded-full px-3 py-1 text-sm leading-6 text-primary-500 dark:text-primary-500/90 ring-1 ring-primary-500/80 hover:ring-primary-500 dark:ring-primary-500/80 dark:hover:ring-primary-500">Sign
                        Documents Instantly</span>
                    <h1
                        class="text-4xl text-center font-bold tracking-tight text-primary-500 dark:text-primary-500 sm:text-6xl mt-4">
                        Effortless Digital Signatures Anytime, Anywhere</h1>
                    <p class="mt-4 text-lg leading-8 text-center text-primary-700/70 dark:text-primary-300/50 px-12">
                        ✨ Create your digital signature on any device, download it, add it to the document, and you're
                        done ✨</p>
                </div>
                <AppSignature />
            </div>
        </div>
    </div>
</template>
