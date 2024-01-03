<template>
  <div
    class="max-w-80 bg-white border border-gray-200 rounded-xl shadow justify-between flex flex-col items-start"
  >
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-3 p-6">
      <div class="col-span-2">
        <h5 class="mb-2 font-semibold">{{ item.title }}</h5>

        <p class="mb-3 font-normal">
          {{ item.text }}
        </p>
      </div>

      <div class="justify-end items-start flex">
        <img :src="item.icon" alt="card image" />
      </div>
    </div>

    <button
      @click="$emit('input', item.activeTab)"
      class="inline-flex items-center px-6 py-4 text-sm font-medium text-center bg-gray-100 hover:bg-gray-300 rounded-tr-32 rounded-bl-xl"
      :class="{
        'bg-yellow-400 hover:bg-yellow-400 box-shadow':
          value === item.activeTab,
      }"
    >
      Discover

      <img
        :src="require('@/assets/tab-card-assets/down-arrow.svg')"
        alt="down arrow"
        class="ml-4"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "TabCard",
  props: {
    value: {
      type: Number,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.rounded-tr-32 {
  border-radius: 0px 32px 0px 0px;
}
.box-shadow {
  box-shadow: #3c479d 5px 5px;
}
.rounded-bl-xl {
  border-bottom-left-radius: 12px;
}
</style>
