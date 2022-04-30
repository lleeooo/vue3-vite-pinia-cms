<template>
  <div class="login-header flex">
    <div class="logo flex">
      <el-image style="width: 40px; height: 40px; margin-right: 10px" :src="'https://vitejs.cn/logo.svg'" />
      <el-image style="width: 40px; height: 40px; margin-right: 10px" :src="'https://v3.cn.vuejs.org/logo.png'" />
      <div class="project-name">VUE-VITE-PINIA-CMS</div>
    </div>
    <div class="btn-link"></div>
  </div>
</template>

<script setup lang="ts">
// import { Edit } from '@element-plus/icons-vue';
</script>

<style lang="less" scoped>
.login-header {
  height: 60px;
  padding: 0 50px;

  .logo {
    .project-name {
      font-size: 16px;
      line-height: 20px;
      font-weight: bold;
    }
  }
}

.flex {
  display: flex;
  align-items: center;
}
</style>
