<script setup lang="ts">
import { type Ref, ref } from 'vue'

import { db, type Task } from '../lib/db'

import TaskCard from '../components/TaskCard.vue';
import NewTaskButton from '../components/NewTaskButton.vue';

const topTask: Ref<Task | undefined> = ref(undefined)

db.tasks.toCollection().last()
  .then(task => { topTask.value = task })
</script>

<template>
  <main>
    <div class="container">
      <TaskCard v-if="topTask" :task="topTask"/>
      <NewTaskButton v-else />
    </div>
  </main>
</template>

<style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
