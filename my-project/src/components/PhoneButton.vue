<template>
  <v-btn class="phone-button">
    <div class="phone-info">
      <div class="phone-number">{{ phoneNumber }}</div>
    </div>
    <div class="icon-container">
      <img src="/images/telegram.svg" alt="Telegram" class="social-icon" />
      <img
        src="/images/whatsapp.svg"
        alt="WhatsApp"
        class="social-icon-whatsapp"
      />
    </div>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PhoneButton",
  props: {
    phoneNumber: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.phone-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;
  border-radius: 500px;
  background-color: #2c2c2c;
  color: white;
  transition: background-color 0.3s ease;
  width: 100%;
  margin-top: 15px;
}

.phone-info {
  display: flex;
  align-items: center;
}

.phone-number {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
}

.icon-container {
  display: flex;
  align-items: center;
}

.social-icon {
  width: 15px;
  height: 13px;
  margin-left: 20px;
}

.social-icon-whatsapp {
  width: 35px;
  height: 35px;
}

.phone-button:hover {
  background-color: #fe9327;
}

@media (max-width: 768px) {
  .phone-button {
    display: flex;
    font-size: 14px;
    width: 100%;
  }

  .icon-container {
    display: flex;
    align-items: center;
    margin-left: 100px;
  }

  .social-icon {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
}
</style>
