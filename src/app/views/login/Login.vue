<template>
  <div id="login">
    <img class="logo-image" src='../../../static/img/logo.svg'>
    <LoginForm class="login-component"></LoginForm>
    <ResetPasswordText></ResetPasswordText>
  </div>
</template>

<script>
import LoginForm from '@/app/components/login/LoginForm'
import ResetPasswordText from '@/app/components/ResetPasswordText'
import Vue from 'vue'

export default Vue.extend({
  name: 'Login',
  components: {
    ResetPasswordText,
    LoginForm
  },
  comments: [LoginForm, ResetPasswordText]
})

</script>

<style lang="scss">
@import "../../../sass/color";
@import "../../../sass/image";

#login {
  width: 100%;
  height: 100%;
  background: $login-bg;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-component {
  margin: 30px 0;
}
</style>
