<template>
  <div class="row main justify-evenly">

    <div class="constructor">

      <p>Product Constructor</p>
      <q-form>
        <div class="row no-wrap">
          <q-input class="fit" outlined label="Product name" v-model="product.productName"
                   :rules="[ val => val && val.length > 4 || 'Please type something']"/>
        </div>
        <div class="row no-wrap">
          <q-input class="fit" outlined label="Product price" v-model="product.productPrice"
                   :rules="[ val => val && val.length > 4 || 'Please type something']"/>
        </div>
        <div class="row no-wrap">
          <q-select class="fit" outlined :options="options" label="Quantity"
                    v-model="product.productQuantity" required/>
        </div>
      </q-form>
      <form>
        <div>
          <div v-if="imageURL">
            <q-btn @click="removeImage" style="background: goldenrod; color: white" label="Remove"/>
            <q-btn @click="addImage" v-model="product.imageURL" style="background: goldenrod; color: white; margin-left: 1rem;"
                   label="Add"/>
          </div>
          <div class="row justify-start" v-if="!imageURL">
            <input type="file" class="pick-image" @change="onFilePicked" ref="fileInput"
                   accept="image/*"/>
            <q-btn @click="onPickFile" v-model="image" style="background: goldenrod; color: white" label="Select"/>
          </div>
        </div>
        <q-btn @click="saveProduct" unelevated size="lg"
               style="background: goldenrod; color: white" label="Save to FS"/>
      </form>
    </div>

    <div class="preview">
      <p>Preview</p>
      <q-card
          v-if="product.productName || product.productPrice || product.productQuantity || product.imageURL">
        <form class="col preview-form">
          <div class="profile-image row justify-center" v-if="product.imageURL">
            <img :src="product.imageURL" alt=""/>
          </div>
          <div class="form-element row justify-center">{{ product.productName }}</div>
          <div class="form-element row justify-center" style="color: darkgreen"
               v-if="product.productQuantity>0">In Stock
          </div>
          <div class="form-element row justify-center" style="color: firebrick"
               v-else-if="product.productQuantity">Out of
            Stock
          </div>
          <div>
            <div class="form-element row justify-center" v-if="product.productPrice">
              {{ appendCurrency }}
            </div>
          </div>
          <div class="row justify-evenly">
            <q-btn class="addToBasket" v-if="product.productQuantity>0"
                   style="background: goldenrod; color: white; margin-bottom: 1rem"
                   label="Add to Basket"/>
            <q-btn v-else-if="product.productQuantity" class="notifyMe"
                   style="background: goldenrod; color: white; margin-bottom: 1rem"
                   label="Notify me"/>
          </div>
        </form>
      </q-card>
    </div>
    <div class="col-9 created justify-center">
      <p>Recently created products</p>
    </div>
  </div>
</template>

<script>
import { firebaseFS } from 'src/boot/firebase'

export default {
  name: 'buying',
  data: () => ({
    product: {
      productName: null,
      productPrice: null,
      productQuantity: null,
      imageURL: null

    },
    id: '1',
    image: null,
    imageURL: null,
    productPrice: [],
    newProductPrice: null,
    options: ['0', '1', '2', '3', '4', '5'],
    productName: "",
    newProductName: null,
    productQuantity: [],
    newProductQuantity: null,
  }),
  mounted() {
    if (localStorage.getItem('productName')) {
      try {
        this.productName = JSON.parse(localStorage.getItem('productName'));
      } catch (e) {
        localStorage.removeItem('productName');
      }
    }
    if (localStorage.getItem('productPrice')) {
      try {
        this.productPrice = JSON.parse(localStorage.getItem('productPrice'));
      } catch (e) {
        localStorage.removeItem('productPrice');
      }
    }
    if (localStorage.getItem('productQuantity')) {
      try {
        this.productQuantity = JSON.parse(localStorage.getItem('productQuantity'));
      } catch (e) {
        localStorage.removeItem('productQuantity');
      }
    }
    if (localStorage.getItem('productPrice')) {
      try {
        this.productPrice = JSON.parse(localStorage.getItem('productPrice'));
      } catch (e) {
        localStorage.removeItem('productPrice');
      }
    }
    if (localStorage.getItem('image')) {
      try {
        this.imageURL = JSON.parse(localStorage.getItem('image'));
      } catch (e) {
        localStorage.removeItem('image');
      }
    }
  },
  methods: {
    addProductName() {
      if (!this.newProductName) {
        return;
      }

      this.productName.push(this.newProductName);
      this.newProductName = '';
      this.saveProductName();
    },
    removeProductName(x) {
      this.productName.splice(x, 1);
      this.saveProductName();
    },
    saveProduct() {
      firebaseFS.collection("products").add(this.product)
          .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });
      this.$q.notify({
                       message: 'Successful upload!',
                       color: 'goldenrod',
                       actions: [
                         {
                           label: 'Dismiss',
                           color: 'white',
                           handler: () => { /* ... */
                           }
                         }
                       ]
                     })
    },
    addProductQuantity() {
      if (!this.newProductQuantity) {
        return;
      }

      this.productQuantity.push(this.newProductQuantity);
      this.newProductQuantity = '';
      this.saveProductQuantity();
    },
    removeProductQuantity(x) {
      this.productQuantity.splice(x, 1);
      this.saveProductQuantity();
    },
    saveProductQuantity() {
      const parsedProductQuantity = JSON.stringify(this.productQuantity);
      localStorage.setItem('productQuantity', parsedProductQuantity);
    },
    addProductPrice() {
      if (!this.newProductPrice) {
        return;
      }

      this.productPrice.push(this.newProductPrice);
      this.newProductPrice = '';
      this.saveProductPrice();
    },
    removeProductPrice(x) {
      this.productPrice.splice(x, 1);
      this.saveProductPrice();
    },
    saveProductPrice() {
      const parsedProductPrice = JSON.stringify(this.productPrice);
      localStorage.setItem('productPrice', parsedProductPrice);
    },
    addImage() {
      if (!this.imageURL) {
        return;
      }

      this.saveImage();
    },
    /*removeImage(x) {
      this.imageURL.splice(x, 1);
      this.saveProductName();
    },*/
    saveImage() {
      const parsedImage = JSON.stringify(this.imageURL);
      localStorage.setItem('image', parsedImage);
    },
    /*onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
      }
      this.createImage(files[0])
    },
    createImage(file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },*/

    removeImage() {
      this.imageURL = null;
      localStorage.removeItem("image");
    },
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFilePicked(event) {
      const files = event.target.files
      let filename = files[0].name;
      if (filename.lastIndexOf('.') <= 0) {
        return alert("Please add a valid file!")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener("load", () => {
        this.imageURL = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }

  },
  computed: {
    data: {
      get() {
        return localStorage.getItem('products')
      },
      set(val) {
        localStorage.setItem('products', val)
      }
    },
    appendCurrency() {
      return this.product.productPrice + " Ft"
    }
  },
}
</script>

<style scoped>

.main {
  min-width: 250px
}

.constructor, .preview {
  margin-top: 5rem;
  width: 20rem;
  margin-right: 1rem;
  margin-left: 1rem;
}

form {
  margin-bottom: 1rem;
}

img {
  width: 10rem;
  height: 13rem;
  margin: 1rem;
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

.created {
  margin-top: 5rem;
}

.pick-image {
  display: none;
}
</style>
