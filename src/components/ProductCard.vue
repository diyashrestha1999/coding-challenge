<template>
  <div class="bg-amber-200 w-full rounded-40 p-14">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div class="flex flex-col justify-between items-start">
        <div>
          <p class="text-4xl font-semibold">Product {{ activeTab }}</p>

          <p class="text-xl mt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            scelerisque risus id ante maximus blandit.
          </p>
        </div>

        <button
          type="button"
          class="border-black bg-orange-600 py-4 px-10 text-lg font-medium rounded-full border-2 hover:bg-orange-700 hidden lg:block"
          @click="isDiscoverProduct = true"
        >
          Discover product
        </button>
      </div>

      <div>
        <div
          v-for="(item, index) in productAccordions"
          :key="index"
          type="button"
          @click="toggleExpansion(item)"
          class="border-b-2 border-black p-5 cursor-pointer hover:bg-amber-300"
        >
          <div
            class="flex items-center justify-between w-full font-medium gap-3"
          >
            <div class="flex items-center">
              <img :src="item.icon" alt="accordions" />

              <span class="ml-2"> {{ item.title }}</span>
            </div>

            <svg
              v-if="!item.isExpand"
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>

            <svg
              v-else
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </div>

          <div v-if="item.isExpand" class="text-sm text-gray-700">
            {{ item.description }}
          </div>
        </div>
      </div>

      <button
        type="button"
        class="border-black bg-orange-600 py-4 px-10 text-lg font-medium rounded-full border-2 hover:bg-orange-700 lg:hidden block"
        @click="isDiscoverProduct = true"
      >
        Discover product
      </button>
    </div>

    <ViewProduct v-if="isDiscoverProduct" @close="isDiscoverProduct = false" />
  </div>
</template>

<script>
import ViewProduct from "@/components/ViewProduct.vue";

export default {
  name: "ProductCard",
  components: { ViewProduct },
  props: {
    activeTab: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isDiscoverProduct: false,
      productAccordions: [
        {
          title: "Accordion title",
          description:
            "Accordion title 1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.",
          isExpand: false,
          icon: require("@/assets/product-card-assets/product1.svg"),
        },
        {
          title: "Accordion title",
          description:
            "Accordion title 2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.",
          isExpand: false,
          icon: require("@/assets/product-card-assets/product2.svg"),
        },
        {
          title: "Accordion title",
          description:
            "Accordion title 3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.",
          isExpand: false,
          icon: require("@/assets/product-card-assets/product3.svg"),
        },
        {
          title: "Accordion title",
          description:
            "Accordion title 4 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.",
          isExpand: false,
          icon: require("@/assets/product-card-assets/product2.svg"),
        },
        {
          title: "Accordion title",
          description:
            "Accordion title 5 : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent scelerisque risus id ante maximus blandit.",
          isExpand: false,
          icon: require("@/assets/product-card-assets/product1.svg"),
        },
      ],
    };
  },
  methods: {
    toggleExpansion(item) {
      if (item.isExpand === true) {
        item.isExpand = false;
        return;
      }
      this.productAccordions.forEach((item) => (item.isExpand = false));
      item.isExpand = !item.isExpand;
    },
  },
};
</script>

<style scoped>
.rounded-40 {
  border-radius: 40px;
}
</style>
