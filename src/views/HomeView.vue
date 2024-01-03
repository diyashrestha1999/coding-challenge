<template>
  <div
    class="text-black flex flex-col justify-center items-center h-screen bg-yellow-300"
  >
    <h1 class="text-3xl font-semibold">Section title</h1>

    <p class="font-medium text-xl">Section subtitle</p>

    <div class="flex items-center justify-center w-screen mt-3">
      <TabCard
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

export default {
  name: "HomeView",
  components: { TabCard },
  data() {
    return {
      cardItems: [
        {
          title: "Card Title",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: require("@/assets/tab-card-assets/card1.svg"),
          activeTab: 0,
        },
        {
          title: "Card title that goes 2 lines",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: require("@/assets/tab-card-assets/card2.svg"),
          activeTab: 1,
        },
        {
          title: "Card title",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: require("@/assets/tab-card-assets/card3.svg"),
          activeTab: 2,
        },
        {
          title: "Card title that goes 2 lines",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          icon: require("@/assets/tab-card-assets/card4.svg"),
          activeTab: 3,
        },
      ],
      activeTab: 0,
    };
  },
};
</script>
