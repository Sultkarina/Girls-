<template>
  <v-app style="background-color: #0E0E11;">
    <v-main>
      <v-container class="my-4">
        <v-row class="mb-4 header-container">
          <v-col cols="12" md="6" class="d-flex align-center title-online-container">
            <h1 class="text-white">Девушки</h1>
            <div class="d-flex align-center ml-5 online-info">
              <span class="circle-online"></span>
              <span class="text-online">{{ onlineCount }} online</span>
            </div>
          </v-col>

          <v-col cols="12" md="6" class="d-flex justify-end filter-container">
             <FilterButtons 
    :filters="filters" 
    @filterSelected="onFilterSelected" 
    :selectedFilter="cardStore.selectedFilter" 
  />
          </v-col>
        </v-row>

        <v-row class="card-grid">
          <v-col
            v-for="(card, index) in filteredCards"
            :key="index"
            cols="12" xs="12" sm="6" md="3" lg="3" xl="3"
            class="pa-4"
          >
            <CardComponent :card="card" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>



<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCardStore } from './stores/cardStore';
import CardComponent from './components/CardComponent.vue';
import FilterButtons from './components/FilterButtons.vue';

export default defineComponent({
  components: {
    CardComponent,
    FilterButtons,
  },
  setup() {
    const cardStore = useCardStore();
    const onlineCount = computed(() => cardStore.cards.filter(card => card.online).length);

    const filters = [
      { label: 'Фильтр', type: 'filter', iconBefore: '/images/filter.svg', iconAfter: '/images/cancel.svg' },
      { label: 'Новые', type: 'new', iconBefore: '/images/done.svg' },
      { label: 'Высокая цена', type: 'highPrice' },
      { label: 'Низкая цена', type: 'lowPrice' },
      { label: 'Рейтинг', type: 'rating'  },
    ];

   const onFilterSelected = (selectedFilter: string) => {
      cardStore.updateSelectedFilter(selectedFilter); 
    };

    return { 
      filteredCards: computed(() => cardStore.filteredCards),
      onlineCount, 
      filters, 
      onFilterSelected,
      cardStore
    };
  },
});
</script>



<style scoped>
.header-container {
  display: flex;
  flex-direction: column;
}

.title-online-container {
  display: flex;
  align-items: center;
}

.online-info {
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-top:15px;
}

.filter-container {
  margin-top: 8px; 
}

.text-online {
  color: white;
}

.circle-online {
  width: 8px;
  height: 8px; 
  background-color: #FE9327;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}

@media (min-width: 768px) {
  .header-container {
    flex-direction: row; 
    align-items: center;
    justify-content: space-between;
  }
  
  .filter-container {
    margin-top: 0; 
    justify-content: flex-end;
  }
}


</style>
