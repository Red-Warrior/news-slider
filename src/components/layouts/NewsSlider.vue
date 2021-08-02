<template>
  <splide @splide:move="sliderChange($event)" :options="options">
    <template v-slot:controls>
      <div class="splide__arrows">
        <base-button class="splide__arrow splide__arrow--prev" />
        <base-button class="splide__arrow splide__arrow--next" />
      </div>
    </template>
    <splide-slide v-for="card in newsCardsList" :key="card.id">
      <news-card ref="newsCard" :newsBlock="card" :heights="cardElementsHeight"></news-card>
    </splide-slide>
  </splide>
</template>

<script>
import NewsCard from "@/components/layouts/NewsCard";
import BaseButton from "@/components/ui/BaseButton";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { newsCardsList } from "@/services/NewsCardServices";

let id = 0;

export default {
  name: "NewsSlider",

  components: {
    NewsCard,
    BaseButton,
    Splide,
    SplideSlide,
  },

  mounted() {
    this.getNewsCardHeights();
  },

  data() {
    return {
      cardElementsHeight: {},

      options: {
        rewind: true,
        autoplay: true,
        width: 1180,
        padding: 10,
        autoHeight: true,
        perPage: 4,
        perMove: 1,
        gap: 45,
        pagination: false,
        speed: 1000,
        rewindSpeed: 1500,
        interval: 4000,
        waitForTransition: false,
        pauseOnHover: true,
        pauseOnFocus: false,
        breakpoints: {
          1200: {
            perPage: 3,
            width: 900,
            gap: 50,
          },
          1000: {
            perPage: 3,
            width: 800,
            gap: 10,
          },
          768: {
            perPage: 2,
            width: 550,
            gap: 30,
            arrows: false,
          },
          550: {
            perPage: 1,
            width: 270,
            gap: 20,
          },
        },
      },
    };
  },

  computed: {
    newsCardsList() {
      return newsCardsList()
        .concat(newsCardsList().reverse())
        .concat(newsCardsList())
        .map(cardItem => ({
          ...cardItem,
          id: this.getId(),
        }));
    },
  },

  methods: {
    getId() {
      return id++;
    },

    getNewsCardHeights() {
      this.cardElementsHeight = this.$refs.newsCard
        .map(newsCardElem => {
          return {
            heading: newsCardElem.$el.children[2].clientHeight,
            text: newsCardElem.$el.children[3].clientHeight,
          };
        })
        .reduce((highest, item) => {
          return {
            heading: highest.heading > item.heading ? highest.heading : item.heading,
            text: highest.text > item.text ? highest.text : item.text,
          };
        });
    },

    sliderChange(event) {
      setTimeout(() => {
        this.$emit("slideChange", event.index);
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
.splide__arrows {
  display: none;

  @media (min-width: $tablet-extended-width) {
    display: flex;
    justify-content: space-between;
    width: 160px;
    position: absolute;
    top: -70px;
    right: 10px;
  }
}

.splide__arrow {
  position: static;
  border-radius: 0;
}
</style>
