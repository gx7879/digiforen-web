<template>
  <div class="p-10 max-w-[1440px] mx-auto">
    <div class="w-[303px]">
      <h2 class="text-lg font-semibold">2023 第一季攻擊演練與數位鑑識競賽</h2>
      <span class="text-sm text-netural-lighter mb-3 block">2023/3/31 (五) 14:00 ~ 18:00，競賽倒數</span>
      <div class="bg-white py-4 mb-10">
        <template v-if="Object.keys(activity).length > 0">
          <flip-countdown
            :show-days="false"
            :deadline="activity.competition_end_datetime"
            countdown-size="40px"
            class="countdown-style"
          ></flip-countdown>
        </template>
      </div>
      <h2 class="text-lg font-semibold mb-3">我的連線資訊</h2>
      <div class="rounded-xl bg-white px-4 py-2 text-sm font-semibold">隊伍名稱 C</div>
      <div class="p-4 text-sm font-medium">
        <div class="flex justify-between">
          <div>VM 登入帳號</div>
          <span>{{ player.vm_account }}</span>
        </div>
        <div class="flex justify-between">
          <div>VM 登入密碼</div>
          <span>{{ player.vm_password }}</span>
        </div>
        <div class="flex justify-between">
          <div>VM IP位置</div>
          <span>{{ player.vm_ip }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlipCountdown from 'vue2-flip-countdown';
import { activity } from '@/api/activity';

export default {
  components: {
    FlipCountdown,
  },
  data() {
    return {
      activity: {},
      player: {},
      teamTask: [],
    };
  },
  async mounted() {
    const params = this.$route.params.activityId;
    console.log(params);
    try {
      const { data } = await activity(params);
      console.log(data);
      if (data.status === 'success') {
        const { activity, player, team_task } = data.response;
        this.activity = activity;
        this.player = player;
        this.teamTask = team_task;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.countdown-style ::v-deep {
  .flip-card__top,
  .flip-card__bottom,
  .flip-card__back-bottom,
  .flip-card__back::before,
  .flip-card__back::after {
    @apply bg-purple-medium text-white font-normal;
  }
  .flip-card__bottom,
  .flip-card__back-bottom,
  .flip-card__bottom-4digits,
  .flip-card__back-bottom-4digits {
    border-color: #fff;
    @apply bg-purple-medium text-white font-normal;
  }
}
</style>
