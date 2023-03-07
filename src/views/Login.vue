<template>
  <!-- <div class="flex flex-1 flex-col"> -->
  <div class="flex flex-1 justify-center gap-10 items-center max-w-[1440px] mx-auto relative">
    <div>
      <img src="@/assets/images/login-bg.png" alt="" />
    </div>
    <!-- <div class="absolute right-[112px] top-1/2 -translate-y-1/2"> -->
    <div>
      <h1 class="text-[28px] mb-10">多功能數位靶場<span class="block text-[42px]">攻擊演練與數位鑑識競賽</span></h1>
      <div class="rounded-3xl shadow-[0_4px_24px_rgba(38,50,56,0.12)] p-10 max-w-[465px] bg-white">
        <label class="block mb-3.5">
          <span class="text-sm mb-1 block">帳號</span>
          <input
            v-model="email"
            type="email"
            class="w-full border border-[#DEE2EB] rounded"
            placeholder="請輸入主辦單位提供的帳號"
          />
        </label>
        <label class="block mb-8">
          <span class="font-medium text-sm mb-1 block">密碼</span>
          <input
            v-model="password"
            type="password"
            class="w-full border border-[#DEE2EB] rounded"
            placeholder="請輸入主辦單位提供的密碼"
            @keyup.enter="login"
          />
        </label>
        <button type="button" class="bg-[#21BAE3] py-3 w-full rounded-full text-white" @click="login">登入</button>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      try {
        const formData = new FormData();
        formData.append('email', this.email);
        formData.append('password', this.password);
        const data = await this.$store.dispatch('login', formData);
        console.log(data);
        if (data.status === 'success') {
          this.$router.push('/');
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
