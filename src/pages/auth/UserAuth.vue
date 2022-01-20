<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="m-background-logo">
        <ion-icon :src="require('@/assets/logo.svg')" />
      </div>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Enterprise Team Collaboration</ion-card-title>
          <ion-card-subtitle>What is Lorem Ipsum?</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          "There is no one who loves pain itself, who seeks after it and wants
          to have it, simply because it is pain..."
        </ion-card-content>
      </ion-card>

      <div class="m-action">
        <router-link to="/register">
          <ion-button color="dark"> Register </ion-button>
        </router-link>
        <router-link to="/signin">
          <ion-button color="light"> Sign in </ion-button>
        </router-link>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
// import { ref, watch } from "vue";
// import { useRouter } from "vue-router";
import { logoGooglePlaystore } from "ionicons/icons";

export default {
  components: {},
  setup() {
    // const router = useRouter();
    // const mode = ref(route.query.mode)
    // watch(() => mode);

    return {
      logoGooglePlaystore,
    };
  },
};
</script>

<style scoped>
ion-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
ion-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.m-background-logo {
  margin: 0 auto;
  display: flex;
}
ion-card-title {
  font: 700 28px Roboto;
  text-align: center;
}
ion-card-subtitle {
  font: 100 18px Roboto;
  text-align: center;
}
ion-card-content {
  font: 100 16px/26px Roboto;
}
ion-icon {
  width: 65vw;
  height: 65vw;
  --ionicon-stroke-width: 16px;
  margin: auto;
}
ion-card {
  margin: auto 16px;
  background: transparent;
  box-shadow: none;
}

.m-action {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  margin-top: auto;
}
.m-action a {
  width: 50%;
}
ion-button {
  width: 100%;
}
ion-button button {
  border-radius: 14px;
}
</style>