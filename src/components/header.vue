<template>
    <div class="row">
        <img class="logo" src="../assets/logo.png" alt="">
            <div class="left-side">
            <router-link to="/home"><h1>GOLDEN LEAVES</h1></router-link>
            </div>
            <div class="right-side">
            <ul>
              <li><router-link to="/buying" exact><q-btn style="background: goldenrod; color: white" label="Buy now"></q-btn></router-link></li>
              <li><router-link to="/selling" exact><q-btn style="background: goldenrod; color: white" label="Sell"></q-btn></router-link></li>
            </ul>
            <form>
                <label>
                  <q-input class="searchbox" dark borderless value="">
                    <template v-slot:append>
                      <q-icon name="search" />
                    </template>
                  </q-input>
                </label>
            </form>
            </div>
        </div>
</template>

<script>
export default {
  data: () => {
    return {
      navigators: [],
      buttons: [],
      search: ''
    }
  }
}
</script>

<style scoped>
    .row {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        color: white;
        background-color: #262626;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .right-side {
        display: flex;
        margin-left: auto;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-decoration: none;

    }
    li {
        float: left;
        margin-right: 1rem;
    }
    li:hover, :visited, :link, :active {
        text-decoration: none;
        color: white;
    }

    .left-side{
        display: flex;
        align-items: center
    }
    h1 {
        padding-left: .5rem;
        font-size: 30px;
        margin: 0;
    }
    .logo {
        height: 2rem;
        width: 2rem;
    }

</style>
