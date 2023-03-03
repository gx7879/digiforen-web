<template>
  <div class="p-10">
    <div class="flex">
      <div class="w-[303px]">
        <div class="text-lg font-semibold">歡迎回來</div>
        <div class="space-y-1">
          <div class="bg-white rounded-xl px-4 py-2 flex items-center">
            <div class="text-sm w-[100px] flex-shrink-0">姓名</div>
            <div v-if="editStatus" class="flex-1 flex">
              <input type="text" placeholder="請輸入姓名" />
              <img class="w-5" src="@/assets/images/check.svg" alt="" />
            </div>
            <div v-else class="flex-1 flex justify-end items-center">
              <span class="text-sm">王小明</span>
              <img class="w-5" src="@/assets/images/pencil.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      editStatus: false,
    };
  },
};
</script>
