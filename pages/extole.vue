<template>
  <section class="pt-10 px-5">

    <article class="pb-5">
      <PageHeader title="Extole Implementation" />
    </article>

    <article class="pb-5">
      <h2 class="font-bold text-xl inline">Tagging Implementation:</h2>
      <button class="border-2 border-blue-500 rounded-full px-2 bg-blue-200 font-bold">
        <span id="extole_zone_global_header"></span>
      </button>

    </article>

    <article class="flex flex-col">
      <h2 class="text-2xl text-blue-500"> <span class="text-black font-bold text-xl">Step 1:</span> <span class="underline">Fill out User Info & Get token</span></h2>
      <div class="font-bold">
        email: <input type="text" v-model="email" class="text-blue-500 text-lg" placeholder="me@jackdishman.com" > 
      </div>
      <div class="font-bold">
        First Name: <input type="text" v-model="firstName" class="text-blue-500 text-lg" placeholder="Jack">
      </div>
      <div class="font-bold">
        Last Name: <input type="text" v-model="lastName" class="text-blue-500 text-lg" placeholder="Dishman">
      </div>
    </article>

    <article class="flex pt-5">
      <button @click="postToken()" class="border-2 border-blue-500 rounded-full px-2 bg-blue-200 font-bold mr-5">
        Post Token
      </button>
      <h2 class="font-bold">Access Token: <span class="text-blue-500 text-lg">{{ this.token }}</span></h2>
    </article>

    <article class="pt-5" v-if="this.token !== ''">
      <h2 class="text-2xl text-blue-500"> <span class="text-black font-bold text-xl">Step 2:</span> <span class="underline">Set Profile on Token</span></h2>
      <button @click="createUser()"  class="border-2 border-blue-500 rounded-full px-2 bg-blue-200 font-bold">
        Create User Profile on Token
      </button>
      <h4 class="font-bold">Create user Status: <span class="text-blue-500 text-lg">{{ this.createUserSuccess }}</span></h4>
    </article>

    <article class="pt-5" v-if="this.createUserSuccess !== ''">
      <h2 class="text-2xl text-blue-500"> <span class="text-black font-bold text-xl">Step 3:</span> <span class="underline">Create Share Link</span></h2>
      <button @click="createShareLink()" v-if="this.token !== ''" class="border-2 border-blue-500 rounded-full px-2 bg-blue-200 font-bold">
      Create Share Link
      </button>
      <div v-if="this.shareLink !== null" class="flex flex-col">
        <h4 class="font-bold">Code: <span class="text-blue-500 text-lg">{{ this.shareLink.code }}</span></h4>
        <h4 class="font-bold">URL: <span class="text-blue-500 text-lg">{{ this.shareLink.link }}</span></h4>
        <a :href="this.shareLink.link" class="border-2 border-green-500 rounded-full px-2 bg-green-200 font-bold text-center w-32">{{ this.shareLink.label }}</a>
      </div>
    </article>
    
  </section>
</template>

<script>
import PageHeader from "~/components/PageHeader";
import axios from "axios";

export default {
  data: function () {
    return {
      email: '',
      firstName: '',
      lastName: '',
      token: '',
      createUserSuccess: '',
      shareLink: null,
    }
  },
  components: {
    PageHeader
  },
  methods: {
    async postToken() {
      var res = await this.$axios.post('https://extole-api.extole.io/api/v5/token').then(res => {
        this.token = res.data.access_token
        this.$axios.setHeader("Authorization", "Bearer " + res.data.access_token);
        this.$axios.setToken(res.data.access_token, "Bearer");
      })
    },
    async createUser(){
      var res = await this.$axios.post('https://extole-api.extole.io/api/v4/me?access_token='+this.token,
        {
          email: this.email
        }).then(res => {
          this.createUserSuccess = res.data.status;
        })
    },
    async createShareLink(){
      var res = await this.$axios.post('https://extole-api.extole.io/api/v6/me/shareables?access_token='+this.token,
      {
        "label": "refer-a-friend"
      }).then(res => {
        this.shareLink = res.data;
      })
    }
  },
    mounted(){
     /* Start Extole */ (function(c,e,k,l,a){c[e]=c[e]||{};for(c[e].q=c[e].q||[];a<l.length;)k(l[a++],c[e])})(window,"extole",function(c,e){e[c]=e[c]||function(){e.q.push([c,arguments])}},["createZone"],0); /* End Extole */ extole.createZone({ name: 'global_header', element_id: 'extole_zone_global_header' });
  },
}
</script>