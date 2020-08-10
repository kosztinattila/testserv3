<template>
    <div class="row wrap">

        <div class="col-md-6 col-xs-12 constructor">

            <p>Product Constructor</p>
            <q-form @submit="uploadProduct">
                <q-input class="input" outlined label="Product name" v-model:key="productName" :rules="[ val => val && val.length > 4 || 'Please type something']"/>
                <q-input class="input" outlined label="Product price" v-model:key="productPrice" :rules="[ val => val && val.length > 4 || 'Please type something']"/>
                <q-select outlined v-model="model" :options="options" label="Quantity"
                          v-model:key="productQuantity" required/>

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

        <div class="col-md-2 col-sm-12">

        </div>

        <div class="col-md-6 col-sm-12 preview">
            <form class="preview-form full-width">
                <p>Preview</p>
                <div class="profile-image col" v-if="image">
                    <img :src="image" alt=""/>
                </div>
                <div>{{productName}}</div>
                <div style="color: darkgreen" v-if="productQuantity>0">In Stock</div>
                <div style="color: firebrick" v-else-if="productQuantity">Out of Stock</div>
                <div>
                    <div v-if="productPrice">{{productPrice + " Ft"}}</div>
                </div>
                <div class="row">
                    <q-btn class="details col" style="background: goldenrod; color: white" label="Details"/>
                    <div class="col-1">

                    </div>
                    <q-btn class="addToBasket col" v-if="productQuantity>0" style="background: goldenrod; color: white"
                           label="Add to Basket"/>
                    <q-btn class="notifyMe col" v-else style="background: goldenrod; color: white"
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
            id: "1",
            image: null,
            productDetails: "Details",
            productPrice: "",
            options: ["0","1", "2", "3", "4", "5"],
            productName: localStorage.getItem('storedData'),
            productQuantity: "",
        }),
        methods: {
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files
                if (!files.length) {
                }
                this.createImage(files[0])
            },
            createImage(file) {
                let reader = new FileReader()

                reader.onload = (e) => {
                    this.image = e.target.result
                }
                reader.readAsDataURL(file)
            },
            removeImage: function () {
                this.image = ""
            },
            uploadProduct () {
                this.$q.notify({
                                   message: 'Successsful upload!',
                                   color: 'primary',
                                   avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
                                   actions: [
                                       { label: 'Reply', color: 'yellow', handler: () => { this.$router.push('/') } },
                                       { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
                                   ]
                               })
            }
        },
        computed: {
            data: {
                get () { return localStorage.getItem('products')},
                set (val) {
                    localStorage.setItem('products', val)
                }
            }
        }
    }
</script>

<style scoped>
    .row {
        justify-content: center;
        min-width: 250px
    }
    .constructor, .preview {
        margin-top: 5rem;
        width: 20rem;

    }

    .preview {
        position: relative;
    }

    h3 {
        margin-top: auto;
        margin-left: auto;
    }

    form {
        text-align: left;
        margin-bottom: 1rem;
    }

    img {
        padding-left: 3rem;
        padding-right: 3rem;
        max-width: 15rem;
        max-height: 10rem;
    }
    .profile-image {
        display: flex;
        justify-content: center;

    }
    .delete-profile-image {
        margin: auto;
        margin-bottom: 1rem;
        align-items: center;
        justify-content: center;
        position: relative;

    }
</style>
