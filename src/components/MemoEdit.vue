<script setup>
import { ref, defineEmits, watch, inject } from "vue";

const emit = defineEmits(["update", "destroy"]);
const props = defineProps({
  memo: {
    type: Object,
    required: false,
  },
});

const content = ref(props.memo.content);
// ルーティングで変更されたメモを監視し、contentを更新する。
watch(
  () => props.memo,
  (changedMemo) => {
    content.value = changedMemo.content;
  }
);

const isLoggedIn = inject("isLoggedIn");

// event
function save() {
  emit("update", content.value);
}
function destroy() {
  emit("destroy");
}
</script>

<template>
  <textarea v-model="content" :disabled="!isLoggedIn"></textarea>
  <button v-if="isLoggedIn" @click="save">保存</button>
  <button v-if="isLoggedIn" @click="destroy">削除</button>
</template>
