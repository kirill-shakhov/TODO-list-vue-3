<template>
  <form :class="$style.form">
    <input v-model="tusk" type="text" placeholder="создайте задачу" :class="$style.input">
    <button @click.prevent="createTusk">создать</button>
  </form>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import useTodoList from '../../assets/ts/TODoList/useToDoList.ts';

let { createdTusks, tuskCounter } = useTodoList();

let tusk = ref('');

function createTusk(e) {
  createdTusks.value.push({
    name: `${tusk.value}`,
    id: tuskCounter.value
  })

  tuskCounter.value++;
  tusk.value = '';
  console.log(createdTusks.value);
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