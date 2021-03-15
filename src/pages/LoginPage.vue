<template>
  <q-page class="flex flex-center">
    <q-card class="my-card">
      <img src="../static/avatar.jpg">

      <q-card-section>
        <q-input v-model="credentials.email"
        placeholder="E-mail"
        type="email"
        label="email"
        :rules="[val => !!val || 'Email is missing', isValidEmail]"
        />
        <q-input v-model="credentials.password"
        placeholder="Password"
        type="password"
        label="password"
        :rules="[val => !!val || 'Password is missing', isValidPassword]"
        >
          <q-btn
          round
          dense
          flat
          icon="send"
          @click="connexion(credentials)"
          v-if="connexion(credentials) === true" to="/weather"/>
        </q-input>
      </q-card-section>
    </q-card>
  </q-page>

</template>

<script>
export default {
  name: 'PageLogin',
  data() {
    return {
      text: '',
      credentials:
        {
          email: '',
          password: '',
        },
      dense: false,
    };
  },
  methods: {
    connexion(credentials) {
      // alert(JSON.stringify(this.credentials));
      // alert(JSON.stringify(credentials));
      const isValidEmail = this.isValidEmail(credentials.email);
      // alert(isValidEmail);
      const isValidPassword = this.isValidPassword(credentials.password);
      // alert(isValidPassword);

      if ((isValidEmail && isValidPassword) === true) {
        // alert('OK');
        return true;
      }
      return false;
    },
    isValidEmail(val) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      const isValid = emailPattern.test(val) || 'Invalid email';
      return isValid;
    },
    isValidPassword(val) {
      // alert(val);
      const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{7,32}$/;
      const isValid = passwordPattern.test(val) || 'Invalid password';
      return isValid;
    },
  },
};
</script>

<style lang="sass">
.my-card
  width: 100%
  max-width: 250px
</style>
