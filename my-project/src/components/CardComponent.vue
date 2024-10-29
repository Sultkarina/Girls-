<template>
  <v-card class="card" outlined>
    <div class="image-wrapper">
      <v-img :src="card.image" class="card-image" />
      <img
        v-if="card.verified"
        src="/images/verification.png"
        alt="verified"
        class="verification-badge"
      />

      <div class="card-details-overlay">
        <div class="details-grid">
          <!-- Заголовки -->
          <div class="details-label">Возраст</div>
          <div class="details-label">Грудь</div>
          <div class="details-label">Вес</div>
          <div class="details-label">Рост</div>

          <!-- Значения -->
          <div class="details-value">{{ card.age }}</div>
          <div class="details-value">{{ card.bust }}</div>
          <div class="details-value">{{ card.weight }} кг</div>
          <div class="details-value">{{ card.height }} см</div>
        </div>
      </div>
    </div>

    <v-card-text class="card-content">
      <div class="profile-details">
        <div class="header">
          <div class="profile-header">
            <span class="name">{{ card.name }}</span>
            <img src="/images/information.svg" alt="info" class="info-icon" />
          </div>
          <span class="rating">
            ★★★★★ <span class="rating-score">{{ formattedRating }}</span>
          </span>
        </div>
        <div class="city">{{ card.city }}</div>
        <div class="description">{{ card.description }}</div>
        <div class="details-grid-mobile">
          <div class="details-label">Возраст</div>
          <div class="details-label">Грудь</div>
          <div class="details-value">{{ card.age }}</div>

          <div class="details-value">{{ card.bust }}</div>
          <div class="details-label">Вес</div>
          <div class="details-label">Рост</div>
          <div class="details-value">{{ card.weight }} кг</div>
          <div class="details-value">{{ card.height }} см</div>
        </div>
      </div>

      <div class="price-container">
        <div class="price-block">
          <span class="time-label-hour">1 час</span>
          <span class="price"
            >{{ formatPrice(card.pricePerHour) }}
            <span class="currency">₽</span></span
          >
        </div>
        <div class="price-block">
          <span class="time-label">Ночь</span>
          <span class="price"
            >{{ formatPrice(card.pricePerNight) }}
            <span class="currency">₽</span></span
          >
        </div>
        <div class="price-block">
          <span class="time-label">2 часа</span>
          <span class="price"
            >{{ formatPrice(card.priceTwoHours) }}
            <span class="currency">₽</span></span
          >
        </div>
        <div class="price-block">
          <span class="time-label">Экспресс</span>
          <span class="price"
            >{{ formatPrice(card.priceExpress) }}
            <span class="currency">₽</span></span
          >
        </div>
      </div>
    </v-card-text>
    <PhoneButton :phoneNumber="'7 (927) 032-00-00'" />
  </v-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import PhoneButton from "./PhoneButton.vue";
import { Card } from "@/types";

export default defineComponent({
  components: {
    PhoneButton,
  },
  props: {
    card: { type: Object as PropType<Card>, required: true },
  },
  computed: {
    formattedRating(): string {
      return this.card.rating.toFixed(1);
    },
  },
  methods: {
    formatPrice(value: number): string {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
});
</script>

<style scoped>
.card {
  color: white;
  background-color: #0e0e11;
  width: 100%;
  margin: auto;
}
.card-content {
  padding: 0;
  margin: 10px 0;
}

.image-wrapper {
  position: relative;
  width: 264px;
  border-radius: 16px;
  overflow: hidden;
}

.card-image {
  height: 310px;
  border-radius: 32px;
  overflow: hidden;
}

.verification-badge {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 16px;
  left: 16px;
}

.card-details-overlay {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 58px;
  background-color: #2c2c2ccc;
  padding: 15px 8px 8px 20px;
  border-radius: 16px;
  backdrop-filter: blur(4px);
}

.details-grid-mobile {
  display: none;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 1px;
  column-gap: 8px;
}

.details-label {
  font-size: 10px;
  opacity: 0.6;
  color: white;
}

.details-value {
  font-size: 12px;
  opacity: 1;
  color: white;
}

.profile-details {
  display: flex;
  flex-direction: column;
}

.profile-header {
  display: flex;
  align-items: center;
}

.name-icon-wrapper {
  display: flex;
  align-items: center;
}

.name {
  font-size: 24px;
  font-weight: 600;
}

.info-icon {
  width: 16px;
  height: 16px;
  margin-left: 5px;
}

.rating {
  font-size: 14px;
  color: gold;
  font-weight: 500;
  margin-left: auto;
}

.rating-score {
  color: white;
  margin-left: 4px;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
}

.city {
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  opacity: 0.6;
  margin-bottom: 5px;
}

.description {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  width: 100%;
}

.price-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  width: 100%;
  margin-top: 12px;
}

.price-block {
  display: flex;
  flex-direction: column;
}

.time-label {
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  opacity: 0.6;
}

.time-label-hour {
  font-size: 12px;
  color: #fff0c8;
  opacity: 0.6;
}

.price {
  font-size: 14px;
  font-weight: 700;
  color: white;
  margin-top: 3px;
}

.currency {
  font-size: 14px;
  font-weight: normal;
}

@media (max-width: 768px) {
  .card {
    color: white;
    background-color: #0e0e11;
  }

  .price-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
  }

  .price-block {
    flex: 1;
    text-align: left;
  }

  .card-image {
    display: flex;
    min-width: 156px;
    height: 185px;
  }

  .image-wrapper {
    width: auto;
    height: auto;
    position: relative;
    float: left;
    margin-right: 15px;
    margin-bottom: 5px;
  }

  .verification-badge {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 16px;
    left: 16px;
  }

  .profile-details {
    display: flex;
    flex-direction: column;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name-icon-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .info-icon {
    display: none;
  }

  .name {
    font-size: 15px;
    font-weight: 600;
  }

  .rating {
    font-size: 14px;
    color: gold;
    font-weight: 500;
    margin-left: 8px;
  }
  .rating-score {
    display: none;
  }

  .city {
    font-size: 12px;
    font-weight: 400;
    color: white;
    opacity: 0.6;
  }

  .description {
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 400;
    width: 100%;
  }

  .time-label {
    font-size: 12px;
    font-weight: 600;
    color: #ffffff;
    opacity: 0.6;
  }

  .price {
    font-size: 14px;
    font-weight: 700;
    color: white;
    margin-top: 3px;
  }

  .currency {
    font-size: 14px;
    font-weight: normal;
  }

  .details-grid-mobile {
    display: grid;

    grid-template-columns: repeat(2, 1fr);
    row-gap: 1px;
    column-gap: 8px;
  }

  .details-label {
    font-size: 12px;
    opacity: 0.6;
    color: white;
  }

  .details-value {
    font-size: 12px;
    color: white;
  }
  .card-details-overlay {
    display: none;
  }
}
</style>
