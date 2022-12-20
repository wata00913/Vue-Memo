<script setup>
import { ref, computed } from "vue";

const memo = ref({
  id: 1,
  content: "メモタイトル行です。\n 本文はこちらから。",
});

function save() {
  console.log(memo.value.content);
  alert(memo.value.content);
}
</script>

<template>
  <textarea v-model="memo.content"></textarea>
  <button @click="save">保存</button>
  <button>削除</button>
  {{ memo.content }}
</template>
