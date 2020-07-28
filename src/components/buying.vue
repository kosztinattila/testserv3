<template>
    <div class="row wrap justify-center">
        <div class="col-md-6 col-xs-12">
            <div class="constructor">
                <div class="content">
                    <q-form @submit="uploadProduct">
                        <q-input class="input" outlined label="Product name" v-model:key="productName" :rules="[ val => val && val.length > 4 || 'Please type something']"/>
                        <q-input class="input" outlined label="Product price" v-model:key="productPrice" :rules="[ val => val && val.length > 4 || 'Please type something']"/>
                        <q-select outlined v-model="model" :options="options" label="Quantity"
                                  v-model:key="productQuantity" required/>
                        <q-input type="submit"></q-input>
                    </q-form>
                    <form>
                        <p>Product Constructor</p>
                        <div>
                            <q-uploader
                                    url="http://localhost:4444/upload"
                                    label="Upload picture"
                                    color="goldenrod"
                                    text-color="white"
                                    style="max-width: 300px; background: goldenrod; color: white"/>
                            <div v-if="image" class="delete-profile-image">
                                <q-btn @click="removeImage" style="background: goldenrod; color: white" label="Remove"/>
                            </div>
                            <div v-if="!image">
                                <input type="file" class="change-profile-image" @change="onFileChange" ref="fileInput"
                                       accept="image/*"/>
                            </div>
                            <div>
                                <img class="q-uploader__file relative-position q-uploader__file--img" alt=""/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-6 col-sm-12">
            <form class="preview-form full-width">
                <p>Preview</p>
                <div v-if="image">
                    <img class="profile-image" :src="image" alt=""/>
                </div>
                <div>{{productName}}</div>
                <div v-if="productQuantity">{{stock}}</div>
                <div>
                    <div v-if="productPrice">{{productPrice + " Ft"}}</div>
                </div>
                <q-input v-model="data" label="asdasd"></q-input>
                <div class="row">
                    <q-btn class="details col" style="background: goldenrod; color: white" label="Details"/>
                    <q-btn class="addToBasket col" v-if="productQuantity" style="background: goldenrod; color: white"
                           label="Add to Basket"/>
                    <q-btn class="notifyMe col" v-if="!productQuantity" style="background: goldenrod; color: white"
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
            options: ["1", "2", "3", "4", "5"],
            productName: localStorage.getItem('storedData'),
            productQuantity: "",
            stock: "In Stock"
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

    .constructor {
        margin-top: 100px;
    }

    p {
    }

    h3 {
        margin-top: auto;
        margin-left: auto;
    }

    form {
        text-align: left;
        float: left;
        margin-left: 5rem;
        margin-right: 5rem;
        position: relative;
        horiz-align: center;
        margin-bottom: 1rem;
    }

    img {
        padding-left: 3rem;
        padding-right: 3rem;
        max-width: 15rem;
        max-height: 10rem;
    }

    .delete-profile-image {
        margin: auto;
        margin-bottom: 1rem;
        align-items: center;
        justify-content: center;
        position: relative;

    }

    .preview-form {

    }

    .row {
        width: auto;
    }

    .col {
        height: auto;
        width: auto;
        display: inline-block;
        font-size: 1rem;
        margin-right: .5rem;
    }

    .content * {
        margin-bottom: 1rem;
    }

    .material-icons {
        margin-bottom: 0;
    }
</style>
