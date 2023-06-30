<template>
  <form class="column-creator" :class="$style.form">
    <input v-model="column" type="text" placeholder="создайте столбец" :class="$style.input">
    <button @click.prevent="createColumn">создать столбец</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useTodoList from '../../assets/ts/TODoList/useToDoList.ts';

let { createdColumns } = useTodoList();

let column = ref('');

function createColumn(e) {
  createdColumns.value.push({
    name: column.value,
    tasks: []
  })
  console.log(createdColumns.value);
  column.value = '';
}

</script>


<style lang="scss" module>
.form {
  display: flex;
  gap: 8px;
}

.input {
  padding: 10px 20px;
  border: 1px solid gray;
  border-radius: 5px;
}
</style>