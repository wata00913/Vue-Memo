<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, provide } from "vue";

const isLoggedIn = ref(false);
provide("isLoggedIn", isLoggedIn);

// event
function toggleLogIn() {
  isLoggedIn.value = !isLoggedIn.value;
}
</script>

<template>
  <div class="container">
    <div class="columns">
      <div class="block column is-3">
        <button
          v-if="isLoggedIn"
          @click="toggleLogIn"
          class="button is-primary"
        >
          ログアウト
        </button>
        <button v-else @click="toggleLogIn" class="button is-primary">
          ログイン
        </button>
      </div>
      <div class="column is-9">
        <nav class="breadcrumb">
          <ul>
            <li>
              <router-link :to="{ name: 'home' }">ホーム</router-link>
            </li>
          </ul>
        </nav>
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "bulma/bulma.sass";
</style>
