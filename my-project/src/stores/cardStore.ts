import { defineStore } from 'pinia';

export const useCardStore = defineStore('cardStore', {
  state: () => ({
    cards: [
      {
        image: '/images/girls1.png',
        name: 'Сонечка',
        age: 21,
        bust: 3,
        weight: 60,
        height: 166,
        city: 'Санкт-Петербург',
        rating: 5.0,
        verified: true,
        description: 'Привет! Я София — стильная, красивая и умная спутница для незабываемых встреч.',
        pricePerHour: 500,
        pricePerNight: 1500,
        priceTwoHours: 1000,
        priceExpress: 250,
      },
      {
        image: '/images/girls1.png',
        name: 'Алина',
        age: 21,
        bust: 3,
        weight: 60,
        height: 166,
        city: 'Санкт-Петербург',
        rating: 3.0,
        verified: true,
        description: 'Привет! Я София — стильная, красивая и умная спутница для незабываемых встреч.',
        pricePerHour: 100000,
        pricePerNight: 250000,
        priceTwoHours: 200000,
        priceExpress: 50000,
      },
      {
        image: '/images/girls1.png',
        name: 'Сейша',
        age: 21,
        bust: 3,
        weight: 60,
        height: 166,
        city: 'Санкт-Петербург',
        rating: 2.0,
        verified: true,
        description: 'Привет! Я София — стильная, красивая и умная спутница для незабываемых встреч.',
        pricePerHour: 50000,
        pricePerNight: 150000,
        priceTwoHours: 100000,
        priceExpress: 25000,
      },
      {
        image: '/images/girls1.png',
        name: 'Влада',
        age: 21,
        bust: 3,
        weight: 60,
        height: 166,
        city: 'Санкт-Петербург',
        rating: 1.0,
        verified: true,
        description: 'Привет! Я София — стильная, красивая и умная спутница для незабываемых встреч.',
        pricePerHour: 5000,
        pricePerNight: 15000,
        priceTwoHours: 10000,
        priceExpress: 2500,
      },
      {
        image: '/images/girls1.png',
        name: 'Влада',
        age: 21,
        bust: 3,
        weight: 60,
        height: 166,
        city: 'Санкт-Петербург',
        rating: 5.0,
        verified: true,
        description: 'Привет! Я София — стильная, красивая и умная спутница для незабываемых встреч.',
        pricePerHour: 50000,
        pricePerNight: 150000,
        priceTwoHours: 100000,
        priceExpress: 25000,
      },
      {
        image: '/images/girls1.png',
        name: 'Алина',
        age: 21,
        bust: 3,
        weight: 60,
        height: 166,
        city: 'Санкт-Петербург',
        rating: 5.0,
        verified: true,
        description: 'Привет! Я София — стильная, красивая и умная спутница для незабываемых встреч.',
        pricePerHour: 50000,
        pricePerNight: 150000,
        priceTwoHours: 100000,
        priceExpress: 25000,
      },
      {
        image: '/images/girls1.png',
        name: 'Алина',
        age: 21,
        bust: 3,
        weight: 60,
        height: 166,
        city: 'Санкт-Петербург',
        rating: 5.0,
        verified: true,
        description: 'Привет! Я София — стильная, красивая и умная спутница для незабываемых встреч.',
        pricePerHour: 50000,
        pricePerNight: 150000,
        priceTwoHours: 100000,
        priceExpress: 25000,
      },
      {
        image: '/images/girls1.png',
        name: 'Алина',
        age: 21,
        bust: 3,
        weight: 60,
        height: 166,
        city: 'Санкт-Петербург',
        rating: 5.0,
        verified: true,
        description: 'Привет! Я София — стильная, красивая и умная спутница для незабываемых встреч.',
        pricePerHour: 50000,
        pricePerNight: 150000,
        priceTwoHours: 100000,
        priceExpress: 25000,
      },
      
    ],
    selectedFilter: null, 
}),
getters: {
    filteredCards(state) {
      let filtered = state.cards.slice(); 
      if (!state.selectedFilter) return filtered;

      switch (state.selectedFilter) {
        case 'highPrice':
          return filtered.sort((a, b) => b.pricePerHour - a.pricePerHour);
        case 'lowPrice':
          return filtered.sort((a, b) => a.pricePerHour - b.pricePerHour);
        case 'rating':
          return filtered.sort((a, b) => b.rating - a.rating);
        default:
          return filtered;}
  },
},
actions: {
    updateSelectedFilter(filterType: string) {
      this.selectedFilter = filterType;}}
});