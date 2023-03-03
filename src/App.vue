<script setup></script>

<template>
  <div
    id="app"
    class="flex flex-col bg-cover bg-no-repeat"
    :class="{
      'bg-[url(@/assets/images/bg-cover.png),_url(@/assets/images/bg.png)] bg-[left_bottom,_center] bg-[contain,_cover]':
        $route.path === '/login',
      'bg-[url(@/assets/images/bg.png)]': $route.path !== '/login',
    }"
  >
    <header class="px-8 py-5 relative bg-white">
      <img alt="Vue logo" class="logo" src="@/assets/images/logo.svg" width="125" height="125" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        最新活動
        <span
          class="border border-success-medium text-success-medium rounded-full pr-1.5 pl-4 text-xs relative before:absolute before:rounded-full before:w-1.5 before:h-1.5 before:bg-success-medium before:left-1.5 before:top-1/2 before:-translate-y-1/2"
          >online</span
        >
      </div>
    </header>
    <main class="flex-1" :class="{ flex: $route.path === '/login' }">
      <router-view />
    </main>
    <footer class="bg-primary-medium py-4 text-center text-white">
      鑑智實相科技股份有限公司 版權所有 © 2023 Digiforen Technology Co.,Ltd
    </footer>
  </div>
</template>

<style lang="scss" scoped>
#app {
  @apply min-h-screen;
}
</style>
