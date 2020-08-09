<template>
  <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 text-center app">

    <img class="profile-image" :src="userImage" alt=""/>

    <div v-if="!userImage">
      <input type="file" round class="change-profile-image" @change="onFileChange"/>
    </div>
    <div v-else>
      <button class="delete-profile-image" color="secondary" icon="delete" @click="removeImage">Delete</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'imageUpload',
  data: () => ({
    userImage: ''

  }),
  methods: {
    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }
      this.createImage(files[0])
    },
    createImage (file) {
      const reader = new FileReader()
      const vm = this

      reader.onload = (e) => {
        vm.userImage = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function () {
      this.userImage = ''
    }
  }
}
</script>
<style>

</style>
