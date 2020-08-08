<template>
  <div class="row main full-width justify-between ">

    <div class="main-left q-pa-md">
      <div class="row">
        <div class="items-center row">
          <q-avatar class="avatar" size="lg">
            <img class="logo items-center" src="../assets/logo.png" alt="">
          </q-avatar>
          <h1 @click="$router.push('/home')" class="col">GOLDEN LEAVES</h1>
        </div>
      </div>
    </div>

    <div class="row q-pa-sm wrap items-center">
      <ul class="row">
        <li>
          <q-btn @click="$router.push('/buying')" style="overflow: auto; background: goldenrod; color: white"
                 label="Buy now"></q-btn>
        </li>
        <li>
          <q-btn @click="$router.push('/selling')" style="overflow: auto; background: goldenrod; color: white"
                 label="Sell"></q-btn>
        </li>
      </ul>
      <form class="row">
        <q-input class="search-bar items-center fit" dark borderless value="">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
      </form>
      <q-btn flat round dense icon="menu" class="q-mr-sm"/>
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
.main {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  color: white;
  background-color: #262626;
  min-width: 320px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin-right: 1rem;
}

li:hover, :visited, :link, :active {
  text-decoration: none;
  color: white;
}

.main-left {
  margin-left: 1rem;
  padding: 0;

}

h1 {
  font-size: 30px;
  margin: 0;
}

@media only screen and (max-width: 800px) {
  li, form {
    display: none;
  }
}

@media only screen and (min-width: 800px) {
  .q-mr-sm {
    display: none;
  }
}

@media only screen and (max-width: 365px) {
  .avatar {
    display: none;
  }
}

.search-bar {
  padding-left: 1em;
  margin-right: 1em;
  text-transform: uppercase;
}

.avatar {
  margin-right: 0.5rem;
}
</style>
