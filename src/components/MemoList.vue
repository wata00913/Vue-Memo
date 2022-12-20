<script setup>
import { ref, computed } from "vue";
import MemoEdit from "./MemoEdit.vue";

const isEdit = ref(false);
function toggleEdit() {
  isEdit.value = !isEdit.value;
}

function title(memo) {
  return memo.content.split("\n")[0];
}
const memoList = ref([
  { id: 1, content: "This is sample data. \n memo" },
  { id: 2, content: "memoです。\n 今日のメモは。" },
]);

function create() {
  const newIdx = memoList.value.length + 1;
  memoList.value.push({
    id: newIdx,
    content: `メモ${newIdx}`,
  });
}
</script>

<template>
  <div v-for="memo in memoList" :key="memo.id">
    <span @click="toggleEdit">{{ title(memo) }}</span>
  </div>
  <p><span style="cursor: pointer" @click="create">+</span></p>
  <MemoEdit v-if="isEdit" />
</template>
