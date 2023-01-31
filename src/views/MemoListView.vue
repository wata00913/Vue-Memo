<script setup>
import { useRouter } from "vue-router";
import MemoList from "../components/MemoList.vue";
import * as record from "../memo-record.js";

const router = useRouter();

//state
const memoList = record.all();

//event
function create() {
  const content = "";
  record.create(content);

  const created = memoList.value.slice(-1)[0];
  router.push({ name: "memoEdit", params: { id: created.id } });
}
</script>

<template>
  <MemoList :memo-list="memoList" @create="create" />
</template>
