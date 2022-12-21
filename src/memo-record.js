// モック

import { ref } from "vue";

const defaultData = [
  { id: 1, content: "メモです.\n 今日のプラクティス" },
  { id: 2, content: "昨日のメモ.\n Javascript" },
  { id: 3, content: "タイトルのみ" },
];

const memoList = ref([]);

export function all() {
  const rawDataStr = window.localStorage.getItem("memoList");
  const rawData = rawDataStr ? JSON.parse(rawDataStr) : defaultData;
  memoList.value.splice(0, memoList.value.length, ...rawData);
  return memoList;
}

export function create(content) {
  const newIdx = memoList.value.length + 1;
  const memo = { id: newIdx, content: content };
  memoList.value.push(memo);
  save(memoList);
}

export function update(memo) {
  const idx = memoList.value.findIndex((d) => d.id === memo.id);
  memoList.value.splice(idx, 1, memo);
  save(memoList);
}

export function destroy(memo) {
  const idx = memoList.value.findIndex((d) => d.id === memo.id);
  memoList.value.splice(idx, 1);
  save(memoList);
}

function save(memoList) {
  // Proxyの余分なプロパティは保存しない。メモデータのみ保存する。
  window.localStorage.setItem("memoList", JSON.stringify(memoList.value));
}
