<template>
    <div>
        <div>
            <div class="constructor">
            <form>
              <p>Product Constructor</p>
              <q-input class="input" outlined label="Product name" />
              <q-input class="input" outlined label="Product details" />
              <q-input class="input" outlined label="Product price" />
              <div>
              <q-file color="grey-3" outlined label-color="orange" v-model="model" label="Label">
                <template class="uploader-icon" v-slot:append>
                  <q-icon name="attachment" color="orange" />
                </template>
              </q-file>
              </div>
            </form>
            </div>
        </div>
        <form>
          <p>Preview</p>
        </form>
    </div>
</template>

<script>
export default {
  name: 'buying',
  data: () => ({
    products: [{
      id: '1',
      image: '',
      title: '',
      details: '',
      price: 'Ft',
      quantity: 0
    }]
  }),
  methods: {

  }
}
</script>

<style scoped>

.constructor {
    margin-left: 30rem;
    margin-top: 10rem;
}
    p {
    }
    h3 {
        margin-top: auto;
        margin-left: auto;
    }
    form {
        text-align: left;
        display: grid;
        float: left;
        margin-left: 5rem;
        margin-right: 5rem;
        position: relative;
        horiz-align: center;
    }
    .input {
      margin-bottom: 1rem;
    }
img {
    width: 30%;
    margin: auto;
    display: block;
    }
</style>
