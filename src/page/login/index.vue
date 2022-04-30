<template>
  <div class="login-index">
    <login-header />

    <div class="login-container">
      <div class="title-container">
        <h1 class="title">登录到</h1>
        <h1 class="title">Vue-Vite-Pinia-CMS</h1>
      </div>
    </div>
    <login />
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoginIndex',
};
</script>
<script setup lang="ts">
import LoginHeader from '@/page/login/components/Header.vue';
import Login from '@/page/login/components/Login.vue';
</script>

<style lang="less" scoped>
.login-index {
  background: url(./img/bg.png);
  background-size: cover;
  width: 100%;
  height: 100%;
  color: #fff;

  .login-container {
    padding-left: 210px;
    .title-container {
      margin-top: 350px;
      .title {
        margin: 10px;
        font-size: 40px;
      }
    }
  }
}
</style>
