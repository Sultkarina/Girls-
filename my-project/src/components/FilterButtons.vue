<template>
  <div class="filter-buttons">
    <v-btn
      v-for="(filter, index) in filters"
      :key="index"
      class="mx-0 filter-button"
      @click="selectFilter(filter.type)"
      :class="{ 'active-filter': selectedFilter === filter.type }"
    >
      <template v-if="filter.iconBefore">
        <img :src="filter.iconBefore" alt="icon" class="icon" />
      </template>
      {{ filter.label }}
      <template v-if="filter.iconAfter">
        <img :src="filter.iconAfter" alt="icon" class="icon-cancel" />
      </template>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Filter } from "@/types";

export default defineComponent({
  name: "FilterButtons",
  props: {
    filters: {
      type: Array as PropType<Array<{ label: string; type: string }>>,
      required: true,
    },
    selectedFilter: {
      type: String,
      default: null,
    },
  },
  methods: {
    selectFilter(filterType: string) {
      this.$emit("filterSelected", filterType);
    },
  },
});
</script>

<style scoped>
.filter-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 4px;
}

.filter-button {
  padding: 0 16px;
  border-radius: 500px;
  color: #f5f5f5;
  font-size: 12px;
  background-color: #2c2c2c;
  height: 32px;
  text-transform: none;
  padding: 0 25px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
}

.filter-button:hover {
  background-color: #fe9327;
}

.filter-button:active {
  background-color: #fe9327;
}

.active-filter {
  background-color: #fe9327;
  color: white;
}

.icon {
  width: 10px;
  height: 10px;
  margin: 0 4px;
}

.icon-cancel {
  width: 6px;
  height: 6px;
  margin: 0 4px;
  align-text: center;
}

@media (max-width: 768px) {
  .filter-button {
    font-size: 10px;
    padding: 0 10px;
  }
}
</style>
