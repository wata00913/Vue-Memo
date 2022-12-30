<script setup>
import { defineEmits, defineProps, inject } from "vue";
import { RouterLink } from "vue-router";

const emit = defineEmits(["create"]);

// props
const props = defineProps({
  memoList: { type: Array, required: true },
  selectedId: { type: String },
});

function title(memo) {
  return memo.content.split("\n")[0];
}

const isLoggedIn = inject("isLoggedIn");

function create() {
  emit("create");
}
</script>

<template>
  <div v-for="(memo, idx) in props.memoList" :key="memo.id">
    <span v-if="props.selectedId === memo.id">{{ title(memo, idx) }}</span>
    <router-link v-else :to="{ name: 'memoEdit', params: { id: memo.id } }">{{
      title(memo, idx)
    }}</router-link>
  </div>
  <p>
    <span v-if="isLoggedIn" style="cursor: pointer" @click="create">+</span>
  </p>
</template>
