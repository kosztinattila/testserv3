<template>
    <div class="row main-row">

        <div class="col q-pa-md">
            <div class="row">
                <div class="col container">
                    <img class="logo" src="../assets/logo.png" alt="">
                    <router-link to="/home"><h1>GOLDEN LEAVES</h1></router-link>
                </div>
            </div>
        </div>

        <div class="col right-side q-pa-md">
            <ul class="row">
                <q-btn flat round dense icon="menu" class="col q-mr-sm" />
                <li><router-link class="col" to="/buying" exact><q-btn style="background: goldenrod; color: white" label="Buy now"></q-btn></router-link></li>
                <li><router-link class="col" to="/selling" exact><q-btn style="background: goldenrod; color: white" label="Sell"></q-btn></router-link></li>
            </ul>
            <form>
                <label>
                    <q-input class="search-bar row" dark borderless value="">
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
    .main-row {
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        color: white;
        background-color: #262626;
        display: flex;
        justify-content: space-between;
        min-width: 350px;
    }
    .right-side {
        display: flex;
        float: right;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
    }
    li {
        margin-right: 1rem;
    }
    li:hover, :visited, :link, :active {
        text-decoration: none;
        color: white;
    }
    .container {
        align-items: center;
        display: flex;

    }
    .q-pa-md {
        margin-left: 1rem;
        padding: 0;

    }
    .row {
        display: flex;
        align-items: center;

    }
    h1 {
        padding-left: .5rem;
        font-size: 30px;
        margin: 0;
        white-space: nowrap;
        display: flex;
    }
    .logo {
        height: 2rem;
        width: 2rem;
    }
    form {
        display: flex;
    }
    @media only screen and (max-width: 500px) {
        li {
            display: none;
        }
    }
    @media only screen and (min-width: 500px) {
        .q-mr-sm {
            display: none;
        }
    }
    @media (min-width: 0) {
        .col {
            flex: none
        }
    }
</style>
