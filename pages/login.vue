<script setup lang="ts">
import {
  VBtn,
  VCard,
  VCardActions,
  VCardTitle,
  VTextField,
} from 'vuetify/components'
</script>

<template>
  <KaRow
    container
    align="center"
    justify="center"
    :row-class="emoCss({
      height: '100vh',
    })"
  >
    <KaCol xs="4">
      <VCard>
        <VCardTitle>Login</VCardTitle>
        <div
          :class="emoCss({
            padding: '8px 16px',
          })"
        >
          <VTextField
            density="compact"
            variant="outlined"
            label="Username"
            class="mb-4"
            hide-details
          />
          <VTextField
            density="compact"
            variant="outlined"
            label="Password"
            type="password"
            hide-details
          />
        </div>
        <VCardActions
          :class="emoCss({
            padding: '8px 16px',
          })"
        >
          <VBtn color="primary" variant="flat" class="ml-auto">
            Login
          </VBtn>
        </VCardActions>
      </VCard>
    </KaCol>
  </KaRow>
</template>
