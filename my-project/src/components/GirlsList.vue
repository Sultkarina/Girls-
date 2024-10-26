<template>
  <v-container>
    <v-row>
      <v-col v-for="girl in filteredGirls" :key="girl.name" cols="12" md="3">
        <GirlCard
          :image="girl.image"
          :name="girl.name"
          :city="girl.city"
          :age="girl.age"
          :bust="girl.bust"
          :weight="girl.weight"
          :height="girl.height"
          :price1Hour="girl.price1Hour"
          :priceNight="girl.priceNight"
          :priceExpress="girl.priceExpress"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, computed } from 'vue';
import GirlCard from './GirlCard.vue';

export default {
  name: 'GirlsList',
  components: { GirlCard },
  setup() {
    const girls = ref([
      {
        image: 'path_to_image_1.jpg',
        name: 'Сонечка',
        city: 'Санкт-Петербург',
        age: 21,
        bust: 3,
        weight: 60,
        height: 166,
        price1Hour: 50000,
        priceNight: 150000,
        priceExpress: 25000,
      },
      // Добавьте другие карточки аналогично
    ]);

    const filteredGirls = computed(() => girls.value); // Добавьте логику фильтрации, если нужно

    return { filteredGirls };
  },
};
</script>
