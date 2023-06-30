<script setup lang="ts">
import TaskBoard from "./components/DrugAndDrop/TaskBoard.vue";
import Panel from "./components/Panel/Panel.vue";
</script>

<template>
  <div class="container">
    <div :class="$style['todo-list']">
      <panel/>
      <task-board/>
    </div>
  </div>
</template>

<style lang="scss" module>
.todo-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
