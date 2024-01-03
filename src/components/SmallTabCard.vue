<template>
  <div
    class="bg-white rounded-xl shadow justify-between flex flex-col items-start my-4 cursor-pointer hover:bg-gray-100"
    :class="{ 'box-border': !isActive }"
    @click="$emit('input', item.activeTab)"
  >
    <div class="grid grid-cols-12 gap-6 p-6 w-full">
      <div class="col-span-2">
        <img :src="item.icon" alt="card image" />
      </div>

      <div class="col-span-8">
        <h5 class="mb-2 font-semibold">{{ item.title }}</h5>
      </div>

      <div class="col-span-2 flex justify-end items-start">
        <img
          :src="require('@/assets/small-card-assets/plus.svg')"
          alt="card image"
        />
      </div>
    </div>

    <div v-if="isActive">
      <ProductCard :active-tab="item.activeTab" />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "SmallTabCard",
  components: { ProductCard },
  props: {
    item: {
      type: Object,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isExpanded: true,
    };
  },
  computed: {
    isActive() {
      return this.value === this.item.activeTab;
    },
  },
};
</script>
<style scoped>
.box-border {
  box-shadow: #f8c855 0px 7px;
}
</style>
