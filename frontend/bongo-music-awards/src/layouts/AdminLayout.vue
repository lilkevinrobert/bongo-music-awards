<template>
  <q-layout view="hHh LpR fFf">
    <q-header elevated class="bg-primary text-white q-pa-sm">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title> Bongo Music Awards </q-toolbar-title>
        <q-btn
          flat
          no-caps
          dense
          icon="mdi-logout"
          @click="logout()"
          label="logout"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="row justify-center"
      width="250"
    >
      <!-- drawer content -->
      <div class="q-pa-md q-mt-md q-gutter-sm">
        <q-avatar size="80px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
        <div class="text-h6">{{ user.name }}</div>
        <div class="text-subtitle2 text-capitalize row justify-center">
          {{ role }}
        </div>
      </div>
      <AdminMenu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import AdminMenu from "src/components/AdminMenu.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { api } from "src/boot/axios";
import { useAuthStore } from "stores/auth";

const router = useRouter();
const userString = sessionStorage.getItem("user");
const user = JSON.parse(userString);
const role = sessionStorage.getItem("role");
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen.value);
const logout = async () => {
  api.post("/logout");
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("role");
  sessionStorage.removeItem("auth");
  sessionStorage.removeItem("user");
  window.location.href = "/login";
};
onMounted(() => {
  // auth();
  if (useAuthStore().$state.role=='admin') {
  } else {
    window.location.href = "/login";
  }
});
</script>
