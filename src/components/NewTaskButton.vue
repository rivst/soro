<script setup lang="ts">
import { addTask } from '@/lib/util'

import { Plus } from 'lucide-vue-next';

</script>

<template>
  <button @click="addTask">
    <Plus/>
  </button>
</template>

<style scoped>
  button {
    cursor: pointer;
    background-color: var(--color-card-bg);
    border: 3px solid var(--color-card-border);
    box-shadow: var(--color-shadow) 5px 7px;
    color: var(--color-text);
    border-radius: 12px;
    height: 48px;
    width: 48px;

    &:active {
      transform: translate(5px, 7px);
      box-shadow: none;
    }
  }
</style>
