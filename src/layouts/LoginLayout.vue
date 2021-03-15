<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="q-px-lg q-pt-xl q-mb-md">
          Login With Quasar App
          <div class="text-subtitle1">{{ date }}</div>
        </q-toolbar-title>
        <q-img
          src="../static/hunger.jpg"
          class="header-image absolute-top" />
      </q-toolbar>
    </q-header>
    <q-drawer
    v-model="leftDrawerOpen"
    show-if-above
    :width="200"
    :breakpoint="400"
    >
      <q-scroll-area
      style="height: calc(100% - 150px);
      margin-top: 150px;
      border-right: 1px solid #ddd;"
      >
        <q-list padding>
          <q-item clickable v-ripple to="/" exact>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section>
              Home
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/login" exact>
            <q-item-section avatar>
              <q-icon name="login" />
            </q-item-section>
            <q-item-section>
              Login
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/todo" exact>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>
              Todo
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/apiTodo" exact>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>
            <q-item-section>
              API Todo
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>
            <q-item-section>
              Help
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

        <q-img class="absolute-top" src="../static/hunger.jpg"
        style="height: 150px;">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="../static/avatar.jpg">
            </q-avatar>
            <div class="text-weight-bold" style="color: black;">Adil Denia</div>
            <div style="color: black;">@adildenia</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>
      <!-- <div>
        <compPlatformDetection
        />
      </div> -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { date } from 'quasar';
// import compPlatformDetection from 'components/PlatformDetection.vue';

export default {
  name: 'LoginLayout',
  // components: { compPlatformDetection },
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  computed: {
    date() {
      const newDate = Date.now();
      const newDateFormat = date.formatDate(newDate, 'dddd D MMMM YYYY');
      return newDateFormat;
    },
    // Version with return Object :
    // date() {
    //   const newDate = Date.now();
    //   const newDateFormat = date.formatDate(newDate, 'DD-MM-YYYY');
    //   return {
    //     today: newDateFormat,
    //   };
  },
};
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.5;
  // filter: grayscale(100%);
}
</style>
