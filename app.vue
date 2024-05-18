<script setup lang="ts">
</script>

<template>
  <Html lang="id">
    <Body>
      <div class="font-poppins min-h-screen bg-lightColor text-darkColor antialiased lg:flex lg:justify-center">
        <NuxtLoadingIndicator />
        <div class="bg-white lg:w-4/12 min-h-screen">
          <NuxtLayout>
            <NuxtPage />
            <UNotifications />
          </NuxtLayout>
        </div>
      </div>
    </Body>
  </Html>
</template>
