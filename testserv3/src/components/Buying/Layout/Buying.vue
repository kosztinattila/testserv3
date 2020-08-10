<template>
  <div class="row main justify-evenly">

    <div class="column constructor">

      <p>Product Constructor</p>
      <q-form @submit="uploadProduct">
        <div class="row">
        <q-input class="input col-9" outlined label="Product name" v-model="productName"
                 :rules="[ val => val && val.length > 4 || 'Please type something']"/>
        <q-btn class="add-button" unelevated size="lg" style="background: goldenrod; color: white" label="+" />
        </div>
        <div class="row">
        <q-input class="input col-9" outlined label="Product price" v-model="productPrice"
                 :rules="[ val => val && val.length > 4 || 'Please type something']"/>
        <q-btn class="add-button" unelevated size="lg" style="background: goldenrod; color: white" label="+" />
        </div>
        <div class="row no-wrap">
        <q-select class="col-9 select" outlined :options="options" label="Quantity"
                  v-model="productQuantity" required/>
          <q-btn class="add-button" unelevated size="lg" style="background: goldenrod; color: white" label="+" />
        </div>
      </q-form>
      <form>
        <div>
          <div v-if="image" class="delete-profile-image">
            <q-btn @click="removeImage" style="background: goldenrod; color: white" label="Remove"/>
          </div>
          <div v-if="!image">
            <input type="file" class="change-profile-image" @change="onFileChange" ref="fileInput"
                   accept="image/*"/>
          </div>
        </div>
      </form>
    </div>

    <div class="row preview">
      <form class="col preview-form">
        <p>Preview</p>
        <div class="profile-image row justify-center" v-if="image">
          <img :src="image" alt=""/>
        </div>
        <div class="form-element">{{ productName }}</div>
        <div class="form-element" style="color: darkgreen" v-if="productQuantity>0">In Stock</div>
        <div class="form-element" style="color: firebrick" v-else-if="productQuantity">Out of Stock</div>
        <div>
        <div class="form-element" v-if="productPrice">{{ productPrice + " Ft" }}</div>
        </div>
        <div class="row justify-evenly">
          <q-btn class="details" style="background: goldenrod; color: white" label="Details"/>
          <q-btn class="addToBasket" v-if="productQuantity>0" style="background: goldenrod; color: white"
                 label="Add to Basket"/>
          <q-btn class="notifyMe" v-else style="background: goldenrod; color: white"
                 label="Notify me"/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buying',
  data: () => ({
    id: '1',
    image: null,
    productDetails: 'Details',
    productPrice: '',
    options: ['0', '1', '2', '3', '4', '5'],
    productName: localStorage.getItem('storedData'),
    productQuantity: ''
  }),
  methods: {
    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
      }
      this.createImage(files[0])
    },
    createImage (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function () {
      this.image = ''
    },
    uploadProduct () {
      this.$q.notify({
        message: 'Successsful upload!',
        color: 'primary',
        avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
        actions: [
          {
            label: 'Reply',
            color: 'yellow',
            handler: () => {
              this.$router.push('/')
            }
          },
          {
            label: 'Dismiss',
            color: 'white',
            handler: () => { /* ... */
            }
          }
        ]
      })
    }
  },
  computed: {
    data: {
      get () {
        return localStorage.getItem('products')
      },
      set (val) {
        localStorage.setItem('products', val)
      }
    }
  }
}
</script>

<style scoped>

.main {
  min-width: 250px
}

.constructor, .preview {
  margin-top: 5rem;
  width: 20rem;
  border: #1D1D1D 5px;
}

form {
  margin-bottom: 1rem;
}

img {
  max-width: 15rem;
  margin-bottom: 1rem;
}

.add-button {
  max-width: 3.5rem;
  max-height: 3.5rem;
}
p {
  text-transform: uppercase;
}
.form-element {
  margin-bottom: .25rem;
}
</style>
