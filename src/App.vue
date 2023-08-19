<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";
export default {
  name: "app",
  components: {
    MainPage,
  },
  created() {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  },
};
</script>

<style lang="scss">
</style>
