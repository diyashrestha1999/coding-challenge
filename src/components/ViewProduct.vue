<template>
  <div
    class="overflow-y-auto overflow-x-hidden fixed lg:top-1/3 top-40 right-0 lg:left-1/3 z-50 justify-center items-center"
  >
    <div class="relative p-4 w-full lg:max-w-2xl">
      <div class="relative bg-white rounded-lg shadow">
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t"
        >
          <h3 class="text-xl font-semibold text-gray-900">Static modal</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            @click="$emit('close')"
          >
            <img
              width="12"
              :src="require('@/assets/product-card-assets/cross-icon.svg')"
              alt="cross icon"
            />
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">
          <p class="text-base leading-relaxed text-gray-500">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p class="text-base leading-relaxed text-gray-500">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewProduct",
};
</script>
