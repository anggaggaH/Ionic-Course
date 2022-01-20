<template>
  <section>
    <ion-slides pager="true" :options="slideOpts">
      <ion-slide>
        <div class="item-slide">
          <ion-icon :src="logoVue"></ion-icon>
          <h2>Vue</h2>
        </div>
      </ion-slide>
      <ion-slide>
        <ion-icon :src="logoReact"></ion-icon>
        <h2>React</h2>
      </ion-slide>
    </ion-slides>
    <div class="list-category">
      <div v-for="cate in dataCategory" :key="cate.id" class="box-category">
        <ion-icon :src="cate.logo"></ion-icon>
        <label :for="cate.name">{{ cate.name }}</label>
      </div>
    </div>
  </section>
</template>

<script>
import { IonSlides, IonSlide } from "@ionic/vue";
import {
  logoAmazon,
  logoBitcoin,
  logoChrome,
  logoDiscord,
  logoEuro,
  logoFacebook,
  logoGoogle,
  logoHtml5,
  logoReact,
  logoVue,
} from "ionicons/icons";

export default {
  components: { IonSlides, IonSlide },
  setup() {
    const slideOpts = {
      initialSlide: 1,
      speed: 400,
    };

    const dataCategory = [
      {
        id: 1,
        logo: logoAmazon,
        name: "Amazon",
      },
      {
        id: 2,
        logo: logoBitcoin,
        name: "Bitcoin",
      },
      {
        id: 3,
        logo: logoChrome,
        name: "Chrome",
      },
      {
        id: 4,
        logo: logoDiscord,
        name: "Discord",
      },
      {
        id: 5,
        logo: logoEuro,
        name: "Euro",
      },
      {
        id: 6,
        logo: logoFacebook,
        name: "Facebook",
      },
      {
        id: 7,
        logo: logoGoogle,
        name: "Google",
      },
      {
        id: 8,
        logo: logoHtml5,
        name: "Html5",
      },
    ];
    return {
      slideOpts,
      dataCategory,
      logoReact,
      logoVue,
    };
  },
};
</script>

<style>
section {
  width: 100%;
  height: 100%;
  background: transparent;
  padding: 16px 20px;
}
ion-slide {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  border: 0.5px solid #525252;
  border-radius: 12px;
}
ion-slide h2 {
  margin: auto 8px;
}
.swiper-container {
  margin: 1rem 0;
}
.list-category {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-template-rows: auto;
  grid-gap: 12px;
}
.box-category {
  width: 100%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 0.5px solid #525252;
  border-radius: 12px;
}
.box-category ion-icon {
  margin: 0.5rem auto;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 4px;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-pagination-bullet {
  background: #525252;
}
</style>