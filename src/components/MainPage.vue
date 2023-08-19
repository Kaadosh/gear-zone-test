<template>
  <div class="page">
    <header class="header">
      <h1 class="header__title">Мой профиль</h1>
      <div class="header__wrapper">
        <div class="rating">
          <p class="rating__title">
            Рейтинг:<span class="rating__num">0</span>
          </p>
          <img class="rating__stars" src="../assets/img/star.png" />
        </div>
        <div class="header__container">
          <div class="testimonial">
            <p class="testimonial__title">
              Отзывов: <span class="testimonial__num">0</span>
            </p>
          </div>
          <div class="transactions">
            <p class="transactions__sales">
              Продаж: <span class="transactions__num">0</span>
            </p>
            <p class="transactions__buy">
              Покупок: <span class="transactions__num">0</span>
            </p>
          </div>
        </div>
      </div>
    </header>
    <div class="header__line"></div>
    <main class="main">
      <div :class="['profile', { collapsed: !showProfile }]">
        <button class="profile__button" @click="toggleProfile" type="button">
          <img :src="buttonIcon" />
        </button>
        <div class="profile__container">
          <div class="profile__icon">
            <img class="profile__avatar" src="../assets/img/Avatar.png" />
          </div>
          <div class="profile__item">
            <h3 class="profile__name">Ivan_Mazepa</h3>
            <p class="profile__status">
              <span class="profile__status_circle">&#8226;</span>Онлайн
            </p>
          </div>
        </div>
        <p class="profile__subtitle">Продажа голды в вов 24/7</p>
        <div v-if="showProfile" class="registration">
          <div class="registration__container">
            <p class="registration__text">Регистрация:</p>
            <p class="registration__text">Месяц назад</p>
            <p class="registration__date">25 ноября 2022, в 11:33</p>
          </div>
        </div>
        <button
          v-if="showProfile"
          type="button"
          class="button__menu"
          @click="toggleDeals"
        >
          <img class="button__img" src="../assets/img/icon/Deals.png" />Сделки
        </button>
        <button v-if="showProfile" type="button" class="button__menu">
          <img class="button__img" src="../assets/img/icon/ads.png" />Объявления
        </button>
        <button v-if="showProfile" type="button" class="button__menu">
          <img class="button__img" src="../assets/img/icon/reviews.png" />Отзывы
        </button>
        <button v-if="showProfile" type="button" class="button__menu">
          <img
            class="button__img"
            src="../assets/img/icon/editing.png"
          />Редактировать
        </button>
        <button v-if="showProfile" type="button" class="button__menu_out">
          <img class="button__img" src="../assets/img/icon/out.png" />Выйти
        </button>
      </div>
      <deals v-if="showDeals" />
    </main>
  </div>
</template>

<script>
import Deals from "./Deals.vue";
import arrowDownIcon from "@/assets/img/icon/arrow_down.png";
import arrowUpIcon from "@/assets/img/icon/arrow_up.png";
export default {
  name: "MainPage",
  components: {
    Deals,
  },
  data() {
    return {
      showDeals: false,
      showProfile: true,
    };
  },
  computed: {
    buttonIcon() {
      return this.showProfile ? arrowDownIcon : arrowUpIcon;
    },
  },
  methods: {
    toggleDeals(e) {
      e.preventDefault();
      this.showDeals = !this.showDeals;
    },
    toggleProfile() {
      this.showProfile = !this.showProfile;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>
