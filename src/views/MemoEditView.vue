<script setup>
import { watch, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import MemoList from "../components/MemoList.vue";
import MemoEdit from "../components/MemoEdit.vue";
import * as record from "../memo-record.js";

const route = useRoute();
const router = useRouter();
const paramId = () => route.params.id;

// state
const memoList = record.all();
let selectedId = ref(paramId());
let memo = memoList.value.find((memo) => memo.id === selectedId.value);

watch(
  () => paramId(),
  (id) => {
    init(id);
  }
);

function init(id) {
  selectedId.value = id;
  memo = memoList.value.find((memo) => memo.id === id);
}

// event
function create() {
  const content = "";
  record.create(content);

  const created = memoList.value.slice(-1)[0];
  router.push({ name: "memoEdit", params: { id: created.id } });
}

function update(content) {
  memo.content = content;
  record.update(memo);
}

function destroy() {
  record.destroy(memo);
  router.push({ name: "memoList" });
}
</script>

<template>
  <div class="columns is-vcentered">
    <div class="column is-one-third">
      <MemoList
        :memoList="memoList"
        :selectedId="selectedId"
        @create="create"
      />
    </div>
    <div class="column is-two-third">
      <MemoEdit :memo="memo" @update="update" @destroy="destroy" />
    </div>
  </div>
</template>
