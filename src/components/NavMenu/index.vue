<template>
  <div class="container-menu">
    <div class="top-logo-name">
      <img src="~@/assets/logo.png" alt="" class="img" />
      <span v-if="!isCollapse">Vue3+TS</span>
    </div>

    <el-menu
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="isCollapse"
      :default-active="defaultActive"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <!-- 多级item -->
          <el-sub-menu :index="`${item.id}`">
            <template #title>
              <el-icon v-if="item.icon"> <component :is="item.icon" /> </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="`${subitem.id}`" @click="onMenuClick(subitem)">
                <el-icon v-if="subitem.icon"> <component :is="item.icon" /> </el-icon>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级 -->
        <template v-else>
          <el-menu-item index="${item.id}">
            <el-icon v-if="item.icon"> <component :is="item.icon" /> </el-icon>
            <template #title>{{ item.name }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store';
import { useRouter } from 'vue-router';
import { computed, toRaw, shallowRef, onMounted, ref } from 'vue';
import { Monitor, Setting, Goods, ChatDotRound } from '@element-plus/icons-vue';
import localCache from '@/utils/cache';

let defaultActive = ref('39');

onMounted(() => {
  const oldRouter = localCache.getSessionCache('oldRouter');
  defaultActive.value = oldRouter.id ? `${oldRouter.id}` : '39';
});

const iconList = shallowRef({
  'el-icon-monitor': Monitor,
  'el-icon-setting': Setting,
  'el-icon-goods': Goods,
  'el-icon-chat-line-round': ChatDotRound,
});

defineProps({
  isCollapse: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();
const userStore = useUserStore();

const userMenus = computed(() => userStore.menu);
userMenus.value.forEach((item) => (item.icon = iconList[item.icon]));

const onMenuClick = (item: any) => {
  //保存旧路径
  localCache.setSessionCache('oldRouter', toRaw(item));

  router.push({
    path: toRaw(item).url,
  });
};
</script>
<style scoped lang="less">
.container-menu {
  .el-menu {
    border: 0;
  }
  .top-logo-name {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    justify-content: flex-start;
    align-items: center;
    .img {
      height: 28px;
      margin: 0 10px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
