<script setup lang="ts"></script>

<template>
  <UContainer>
    <div class="bg-white py-5 flex items-center justify-between">
      <h1 class="text-2xl font-bold text-dangerColor">
        KerjaYuk!
      </h1>

      <NuxtLink to="/notifications">
        <UButton
          color="white"
          size="2xl"
          variant="none"
          class="p-3"
        >
          <UChip size="xl" color="red" :text="6">
            <UIcon name="i-ph-bell-duotone" class="h-5 w-5 text-gray-500" />
          </UChip>
        </UButton>
      </NuxtLink>
    </div>
  </UContainer>
</template>

<style scoped></style>
