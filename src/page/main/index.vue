<template>
  <div class="main-container">
    <el-container>
      <el-aside :width="isCollapse ? '70px' : '210px'">
        <NavMenu :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header>
          <nav-header @isFoldChange="isFoldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import NavMenu from '@/components/NavMenu/index.vue';
import NavHeader from '@/components/NavHeader/index.vue';

const isCollapse = ref(false);
const isFoldChange = (isFold: boolean) => {
  isCollapse.value = isFold;
};
</script>

<style scoped lang="less">
.main-container {
  height: 100%;
  color: #fff;

  .el-container {
    height: 100%;

    .el-aside {
      background-color: #181f24;
      transition: width 0.25s ease-in;
    }

    .el-header {
      background-color: fff;
      color: black;
    }

    .el-main {
      background-color: #f2f4f8;
    }
  }
}
</style>
