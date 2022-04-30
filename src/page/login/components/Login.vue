<template>
  <div class="login">
    <el-form :model="formData" :rules="rules" label-width="0px">
      <el-row>
        <el-col :span="6">
          <el-form-item prop="name">
            <el-input :prefix-icon="Avatar" v-model="formData.name" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item prop="password">
            <el-input show-password :prefix-icon="Lock" v-model="formData.password" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-row>
      <el-col :span="6">
        <el-button type="primary" style="width: 100%" @click="onLoginClick">登录</el-button>
      </el-col>
    </el-row>
    <!-- {{ name }} -->
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Avatar, Lock } from '@element-plus/icons-vue';
import type { FormRules } from 'element-plus';
import { useUserStore } from '@/store';

const userStore = useUserStore();
// const name = userStore.name;

const formData = reactive({
  name: 'coderwhy',
  password: '123456',
});

const rules = reactive<FormRules>({
  name: [{ required: true, message: '账号必填', trigger: 'blur' }],
  password: [{ required: true, message: '密码必填', trigger: 'blur' }],
});

const onLoginClick = async () => {
  await userStore.onLoginClick(formData);
};
</script>

<style lang="less" scoped>
.login {
  margin-top: 40px;
  padding-left: 220px;
}
</style>
