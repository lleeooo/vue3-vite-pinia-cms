<template>
  <div class="container-heaer">
    <el-icon class="icon" @click="onFoldClick">
      <component :is="Fold" />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Fold, Expand } from '@element-plus/icons-vue';

const emit = defineEmits(['isFoldChange']);
const isFold = ref(false);
const onFoldClick = () => {
  isFold.value = !isFold.value;

  emit('isFoldChange', isFold.value);
};
</script>

<style scoped lang="less">
.container-heaer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .icon {
    font-size: 30px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    line-height: 60px;
  }
}
</style>
