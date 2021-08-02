<template>
  <div class="container">
    <div class="heading-wrapper">
      <h1 class="heading">Актуальное</h1>
      <div class="progress-bar-wrapper">
        <progress-bar :current-progress="currentProgress"></progress-bar>
      </div>
    </div>
    <div class="slider-wrapper">
      <news-slider @slideChange="currentProgress = $event" />
    </div>
  </div>
</template>

<script>
import NewsSlider from "@/components/layouts/NewsSlider";
import ProgressBar from "@/components/layouts/ProgressBar";

export default {
  name: "MainPage",

  data() {
    return {
      currentProgress: 0,
    };
  },

  components: {
    NewsSlider,
    ProgressBar,
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding-top: 1px;
  max-width: 1440px;
  height: 800px;
  box-sizing: border-box;
  background-color: $base-color;
}

.heading-wrapper {
  margin: 120px 0 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: $tablet-width) {
    margin: 120px auto 40px auto;
    width: 770px;
  }

  @media (min-width: $tablet-extended-width) {
    width: 880px;
  }

  @media (min-width: $desktop-width) {
    width: 1160px;
  }
}

.heading {
  margin: 0 auto;
  color: $text-color;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 60px;

  @media (min-width: $tablet-width) {
    margin: 0 auto 0 0;
  }
}

.progress-bar-wrapper {
  display: none;

  @media (min-width: $tablet-width) {
    display: block;
  }

  @media (min-width: $tablet-extended-width) {
    margin-right: 190px;
  }
}

.slider-wrapper {
  display: flex;
  justify-content: center;
}
</style>
