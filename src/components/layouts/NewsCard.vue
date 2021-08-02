<template>
  <div class="card">
    <slot>
      <img src="images/newsDefaultImage.svg" alt="Новостное изображение" />
    </slot>
    <p class="card-date">10.11.2020 г.</p>
    <h2 :style="`height: ${heights.heading}px`" class="card-heading">
      {{ newsBlock.title }}
    </h2>
    <p :style="`height: ${heights.text}px`" class="card-text">{{ newsBlock.news }}</p>
  </div>
</template>

<script>
export default {
  name: "NewsCard",

  props: {
    newsBlock: Object,
    heights: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  color: $text-color;
  text-align: left;
  width: 260px;
  height: auto;
  border: 1px solid $brand-color;
  padding: 20px;
  box-sizing: border-box;
}

.card-date {
  margin: 10px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  opacity: 0.6;
}

.card-heading {
  margin: 0 0 10px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
}

.card-text {
  margin: 0;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
}
</style>
