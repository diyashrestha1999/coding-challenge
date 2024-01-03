<template>
  <div
    class="text-black flex flex-col justify-center items-center bg-gray-50 overflow-x-scroll"
  >
    <h1 class="text-3xl font-semibold">Section title</h1>

    <p class="font-medium text-xl">Section subtitle</p>

    <div class="hidden justify-center w-screen mt-3 lg:flex">
      <TabCard
        v-for="(item, index) in cardItems"
        v-model="activeTab"
        :key="index"
        class="mx-2"
        :item="item"
      />
    </div>

    <div class="mt-6 w-3/5 hidden lg:flex">
      <ProductCard :active-tab="activeTab" />
    </div>

    <div class="block lg:hidden sm:w-3/5">
      <SmallTabCard
        v-for="(item, index) in cardItems"
        v-model="activeTab"
        :key="index"
        class="mx-2"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import TabCard from "@/components/TabCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import SmallTabCard from "@/components/SmallTabCard.vue";

export default {
  name: "HomeView",
  components: { SmallTabCard, ProductCard, TabCard },
  data() {
    return {
      cardItems: [
        {
          title: "Card Title",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: require("@/assets/tab-card-assets/card1.svg"),
          activeTab: 1,
        },
        {
          title: "Card title that goes 2 lines",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: require("@/assets/tab-card-assets/card2.svg"),
          activeTab: 2,
        },
        {
          title: "Card title",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: require("@/assets/tab-card-assets/card3.svg"),
          activeTab: 3,
        },
        {
          title: "Card title that goes 2 lines",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: require("@/assets/tab-card-assets/card4.svg"),
          activeTab: 4,
        },
      ],
      activeTab: 1,
    };
  },
};
</script>
