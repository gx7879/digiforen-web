<template>
  <div class="p-10 max-w-[1440px] mx-auto">
    <div class="flex gap-10">
      <div class="w-[303px]">
        <div class="text-lg font-semibold mb-3">歡迎回來</div>
        <div class="space-y-1">
          <div class="bg-white rounded-xl px-4 py-2 flex items-center h-12">
            <div class="text-sm w-[100px] flex-shrink-0">姓名</div>
            <div v-if="editStatus" class="flex-1 flex justify-end">
              <input
                v-model.trim="name"
                type="text"
                class="w-[143px] h-8 border border-netural-lighter rounded"
                placeholder="請輸入姓名"
              />
              <!-- <img class="w-5" src="@/assets/images/check.svg" alt="" /> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 ml-1 cursor-pointer text-black/20 stroke-current"
                fill="none"
                viewBox="0 0 32 32"
                @click="editToggle"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27 9 13 23l-7-7" />
              </svg>
            </div>
            <div v-else class="flex-1 flex justify-end items-center">
              <span class="text-sm">{{ name }}</span>
              <!-- <img class="w-5" src="@/assets/images/pencil.svg" alt="" /> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 ml-1 cursor-pointer text-black/20 stroke-current"
                fill="none"
                viewBox="0 0 32 32"
                @click="editToggle"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 27H6a1 1 0 0 1-1-1v-5.587a.987.987 0 0 1 .288-.7l15-15a1 1 0 0 1 1.424 0l5.576 5.574a1 1 0 0 1 0 1.425L12 27ZM27 27H12M17 8l7 7"
                />
              </svg>
            </div>
          </div>
          <div class="bg-white rounded-xl px-4 py-2 flex items-center h-10">
            <div class="text-sm w-[100px] flex-shrink-0">平台帳號</div>
            <div class="flex-1 text-right text-sm">{{ member.email }}</div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div class="text-2xl font-semibold mb-3">我的活動</div>
        <div class="space-y-1">
          <div
            v-for="item of activity"
            :key="item.activity_id"
            class="flex justify-between items-center rounded-xl bg-white px-6 py-4"
          >
            <div class="text-sm">
              {{ new Date(item.activity_start_datetime).toLocaleDateString() }}&nbsp;&nbsp;{{
                item.activity_start_datetime.split(' ')[1]
              }}~{{ item.activity_end_datetime.split(' ')[1] }}
              <span class="text-lg ml-8">{{ item.name }}</span>
            </div>
            <router-link
              v-slot="{ navigate }"
              :to="{ name: 'activity', params: { activityId: item.activity_id } }"
              custom
            >
              <button
                type="button"
                class="rounded-full bg-primary-medium px-4 py-3 text-white cursor-pointer"
                @click="navigate"
              >
                進入活動
              </button>
            </router-link>
            <!-- <div class="rounded-full bg-primary-medium px-4 py-3 text-white cursor-pointer">進入活動</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { memberData, memberNameEdit } from '@/api/member';

export default {
  components: {},
  data() {
    return {
      editStatus: false,
      member: {},
      activity: [],
      name: '',
      oldVal: '',
    };
  },
  async beforeMount() {
    try {
      const { data } = await memberData();
      console.log(data);
      if (data.status === 'success') {
        this.member = data.response.member;
        this.activity = data.response.activity;
        this.name = data.response.member.name;
      }
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async editToggle() {
      if (this.editStatus) {
        if (this.name !== '') {
          try {
            const formData = new FormData();
            formData.append('name', this.name);
            const { data } = await memberNameEdit(formData);
            if (data.status !== 'success') {
              this.name = this.oldVal;
              this.oldVal = '';
            }
            console.log(data);
          } catch (error) {
            this.name = this.oldVal;
            this.oldVal = '';
          }
        }
      } else {
        this.oldVal = this.name;
      }
      this.editStatus = !this.editStatus;
    },
  },
};
</script>
