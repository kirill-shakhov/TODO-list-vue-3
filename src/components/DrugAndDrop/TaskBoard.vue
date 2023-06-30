<template>
  <div class="task-board">
    <div class="task-board__titles">
      <div class="task-board__title">Задачи</div>
      <div v-for="column in createdColumns" :key="column.name" class="task-board__title">{{ column.name }}</div>
    </div>
    <div class="flex m-10 ">
      <VueDraggableNext :modelValue="createdTusks" :group="{ name: 'items', pull: true, put: true }"
                        class="list task-board__created-tusks"
                        @update:modelValue="createdTusks = $event" @end="dragItem">
        <transition-group>
          <div v-for="element in createdTusks" :key="element.id" class="list-item">{{ element.name }}</div>
        </transition-group>
      </VueDraggableNext>

      <VueDraggableNext v-for="column in createdColumns" :key="column.name" :modelValue="column.tasks"
                        :group="{ name: 'items', pull: true, put: true }" class="list task-board__created-tusks"
                        @update:modelValue="column.tasks = $event" @end="dragItem">
        <transition-group>
          <div v-for="element in column.tasks" :key="element.id" class="list-item">{{ element.name }}</div>
        </transition-group>
      </VueDraggableNext>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { VueDraggableNext } from 'vue-draggable-next';

import useTodoList from '../../assets/ts/TODoList/useToDoList.ts';

let { createdTusks, createdColumns, dragItem } = useTodoList();

</script>

<style>


.flex {
  display: flex;
  gap: 8px;
}

.list {
  flex: 1;
  padding: 5px;
  background: rgb(245, 245, 245);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.list-item {
  padding: 10px;
  border: 0;
  border-radius: 2px;
  background: #fff;
  box-shadow: var(--ds-shadow-raised,0 1px 2px 0 rgba(9,30,66,.25));
}

.task-board__titles {
  margin-bottom: 16px;
  display: flex;
}

.task-board__title {
  font-size: 20px;
  flex: 1;
}

.task-board__completed-tusks .list-item {
  background: green;
}

</style>
