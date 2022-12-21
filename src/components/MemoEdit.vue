<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["update", "destroy"]);
const props = defineProps({
  memo: {
    type: Object,
    required: false,
  },
});

const content = ref(props.memo.content);

// event
function save() {
  emit("update", content.value);
}
function destroy() {
  emit("destroy");
}
</script>

<template>
  <textarea v-model="content"></textarea>
  <button @click="save">保存</button>
  <button @click="destroy">削除</button>
</template>
