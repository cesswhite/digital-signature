<template>
  <div id="__signature" class="flex flex-col min-h-screen bg-primary-50/50 dark:bg-gray-900">
    <AppHero />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Signature | Digital Signature in Seconds',
  description: 'Create digital signatures effortlessly. Generate, customize, and download your digital signature instantly using our intuitive canvas interface. No need for complex setups or external services - everything happens right in your browser.',
  ogTitle: 'Signature | Digital Signature in Seconds',
  ogDescription: 'Create digital signatures effortlessly. Generate, customize, and download your digital signature instantly using our intuitive canvas interface. No need for complex setups or external services - everything happens right in your browser.',
  ogUrl: 'https://signature.ecostudios.dev/',
  ogType: 'website',
  ogSiteName: 'Signature | Digital Signature in Seconds',
  twitterCard: 'summary',
});

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      '@id': 'https://signature.ecostudios.dev/#app',
      name: 'Signature',
      url: 'https://signature.ecostudios.dev/',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web browser',
      inLanguage: 'en',
      creator: {
        '@type': 'Organization',
        '@id': 'https://www.ecostudios.dev/#organization',
        name: 'Eco Development Studios',
        url: 'https://www.ecostudios.dev/',
      },
    }),
  }],
});
</script>
