<template>
    <div>
        <div class="background">
            <img src="../../../assets/weed.jpg" alt=""/>
            <div class="black-bottom"></div>
        </div>
        <div class="text-block">
        <h1 v-bind:key="text" v-for="text in mainText">{{text}}</h1>
        </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      mainText: [
        'Made for medication',
        'Heals your soul'
      ]
    }
  }
}
</script>

<style scoped>
    img {
        width: 100%;
        height: auto;
        filter: brightness(50%);
    }
    .background {
        position: relative;
        background-size: cover;
        background-color: #262626;
        z-index: -1;
    }

 .black-bottom {
     top: -20rem;
     position: relative;
     width: border-box;
     background-color: #262626;
     height: 70rem;
     transform: rotate(-3deg) skew(-3deg);

 }
 h1 {
     font-size: 3rem;
 }
 .text-block {
     position: absolute;
     top: 25rem;
     left: 10rem;
     color: white;

 }
</style>
