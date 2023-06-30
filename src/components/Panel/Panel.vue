<template>
  <div :class="$style.panel">
    <task-creator/>
    <column-creator/>
  </div>
</template>

<script setup>
import ColumnCreator from "../ColumnCreater/ColumnCreator.vue";
import TaskCreator from "../TaskCreator/TaskCreator.vue";
</script>

<style lang="scss" module>
.panel {
  display: flex;
  gap: 64px;
}
</style>