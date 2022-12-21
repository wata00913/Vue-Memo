<script setup>
import { ref, computed } from "vue";
import * as record from "../memo-record.js";
import MemoEdit from "./MemoEdit.vue";

const isEdit = ref(false);
function toggleEdit() {
  isEdit.value = !isEdit.value;
}

function title(memo) {
  return memo.content.split("\n")[0];
}

const memoList = record.all();
// memoListから取得するのでrefでの初期化はしない
let selectedMemo = null;

// event
function choiceMemo(idx) {
  selectedMemo = memoList.value[idx];
  toggleEdit();
}

function create() {
  const newIdx = memoList.value.length + 1;
  record.create(`メモ${newIdx}`);
}

function update(content) {
  selectedMemo.content = content;
  record.update(selectedMemo);
}

function destroy() {
  record.destroy(selectedMemo);
  toggleEdit();
  selectedMemo = null;
}
</script>

<template>
  <div v-for="(memo, idx) in memoList" :key="memo.id">
    <span @click="choiceMemo(idx)">{{ title(memo, idx) }}</span>
  </div>
  <p><span style="cursor: pointer" @click="create">+</span></p>
  <MemoEdit
    v-if="isEdit"
    :memo="selectedMemo"
    @update="update"
    @destroy="destroy"
  />
</template>
