<template>
  <q-page class="flex flex-center">
    <div bottom class="col q-pt-lg q-px-md">
      <q-input
      v-model="text"
      placeholder="Search"
      borderless
      dark
      >
        <template v-slot:before>
          <q-icon name="event" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input>
    </div>
  </q-page>

</template>

<script>
export default {
  name: 'PageWeather',
  data() {
    return {
      text: '',
    };
  },
};
</script>

<style lang="sass">
.q-page
  background: linear-gradient(to top, #24243e, #302b63, #0f0c29)
</style>
