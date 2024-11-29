<script setup lang="ts">
import { addTask } from '@/lib/util'

import type { Task } from '@/lib/db'

import { Check, Plus } from 'lucide-vue-next'

const props = defineProps<{ task: Task }>()
</script>

<template>
  <div class="card">
    <button class="add-task" @click="addTask">
      <Plus/>
    </button>
    <p>
      {{ props.task.content }}
    </p>
    <button class="complete-task">
      <Check/>
    </button>
  </div>
</template>

<style scoped>
  .card {
    position: relative;
    overflow: clip;
    background-color: var(--color-card-bg);
    border: 3px solid var(--color-card-border);
    box-shadow: var(--color-shadow) 10px 14px;
    color: var(--color-text);
    padding: 24px;
    border-radius: 24px;
    font-family: "Sour Gummy", cursive;
    font-weight: 500;
    font-size: 1.4rem;
    width: 90%;
    max-width: 600px;
    text-align: center;
  }

  button {
    position: absolute;
    border-style: solid;
    cursor: pointer;
    background-color: var(--color-card-bg);
    color: var(--color-text);
    border-color: var(--color-card-border);

    &:active {
      background-color: var(--color-selected);
    }
  }

  .add-task {
    top: 0;
    left: 0;
    border-width: 0 3px 3px 0;
    border-radius: 0 0 12px 0;
  }

  .complete-task {
    bottom: 0;
    right: 0;
    border-width: 3px 0 0 3px;
    border-radius: 12px 0 0 0;
  }
</style>
