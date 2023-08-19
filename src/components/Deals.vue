<template>
  <div class="deals">
    <p v-if="deals.length === 0">Список пуст...</p>
    <h2 v-else class="deals__title">Сделки</h2>
    <div class="deals__container">
      <div class="deals__links">
        <a href="#" class="deals__link">Покупки</a>
        <a href="#" class="deals__link">Продажи</a>
        <div class="deals__line"></div>
      </div>
      <!-- <div class="table__container"> -->
      <table class="table" v-for="deal in deals" :key="deal.id">
        <tr>
          <td
            class="registration__date"
            :style="{
              color: deal.status === 'Отклонен' ? 'gray' : 'inherit',
            }"
            rowspan="2"
          >
            # {{ deal.id }}
          </td>
          <td class="profile__subtitle">Дата</td>
          <td class="profile__subtitle">Тип</td>
          <td class="profile__subtitle">Наимен.</td>
        </tr>
        <tr>
          <td
            class="registration__date"
            :style="{
              color: deal.status === 'Отклонен' ? 'gray' : 'inherit',
            }"
          >
            {{ deal.date }}
          </td>
          <td
            class="table__text"
            :style="{
              color: deal.status === 'Отклонен' ? 'gray' : 'inherit',
            }"
          >
            {{ deal.type }}
          </td>
          <td
            class="table__text"
            :style="{
              color: deal.status === 'Отклонен' ? 'gray' : '#ff9839',
            }"
          >
            <img
              class="table__text_gold"
              :style="{
                filter: deal.status === 'Отклонен' ? 'grayscale(100%)' : 'none',
              }"
              src="../assets/img/icon/gold.png"
            />
            {{ deal.name }}
          </td>
        </tr>
        <tr>
          <td class="profile__subtitle">Продавец</td>
          <td class="profile__subtitle">Статус</td>
          <td class="profile__subtitle">Цена</td>
        </tr>
        <tr>
          <td
            class="registration__date"
            :style="{
              color: deal.status === 'Отклонен' ? 'gray' : 'inherit',
            }"
          >
            {{ deal.seller }}
          </td>
          <td class="table__status" :style="{ color: deal.statusColor }">
            <span
              class="profile__status_circle"
              :style="{ color: deal.statusColor }"
              >{{ deal.statusCircle }}
            </span>
            {{ deal.status }}
          </td>
          <td
            class="registration__date"
            :style="{
              color: deal.status === 'Отклонен' ? 'gray' : 'inherit',
            }"
          >
            {{ deal.price }}
            <span class="profile__subtitle">{{ deal.currency }}</span>
          </td>
        </tr>
      </table>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useDealsStore } from "@/store";

export default defineComponent({
  name: "DealsComponent",
  setup() {
    const dealsStore = useDealsStore();

    return {
      deals: dealsStore.deals,
    };
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/main.scss";
</style>