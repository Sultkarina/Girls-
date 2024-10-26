<template>
  <v-card class="mx-2 my-4" max-width="300">
    <v-img :src="image" height="200"></v-img>
    <v-card-title>{{ name }}</v-card-title>
    <v-card-subtitle>{{ city }}</v-card-subtitle>
    <v-card-text>
      <div>Возраст: {{ age }}</div>
      <div>Грудь: {{ bust }}</div>
      <div>Вес: {{ weight }}</div>
      <div>Рост: {{ height }}</div>
      <div class="mt-2">Цена:</div>
      <div>1 час - {{ price1Hour }} ₽</div>
      <div>Ночь - {{ priceNight }} ₽</div>
      <div>Экспресс - {{ priceExpress }} ₽</div>
    </v-card-text>
    <v-card-actions>
      <v-btn icon>
        <v-icon>mdi-phone</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-whatsapp</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'GirlCard',
  props: {
    image: String,
    name: String,
    city: String,
    age: Number,
    bust: Number,
    weight: Number,
    height: Number,
    price1Hour: Number,
    priceNight: Number,
    priceExpress: Number,
  },
};
</script>

<style scoped>
.v-card {
  background-color: #333;
  color: #fff;
}
</style>
