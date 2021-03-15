<template>
  <div>
    <div v-if="$q.platform.is.desktop">
      I'm only rendered on desktop!
    </div>

    <div v-if="$q.platform.is.mobile">
      I'm only rendered on mobile!
    </div>

    <div v-if="$q.platform.is.electron">
      I'm only rendered on Electron!
    </div>
    <div>
      <button v-on:click="displayAlert($q)">Say Hi</button>
      <q-btn to="/todo" label="TODO" />
      <q-btn to="/login" label="LOGIN" />

    </div>
  </div>
</template>

<script>
// not available here outside
// of the export

export default {
  // el: '#obj',
  // inside a Vue component script
  // ...,

  // showing an example on a method, but
  // can be any part of Vue script
  methods: {
    displayAlert(obj) {
      // prints out Quasar version
      // alert(JSON.stringify(obj));
      return obj;
    },
  },
};
</script>
