<template>
   <base-card>
      <!--@click listeners fall through to the root level html element in the component-->
      <base-button
         @click="setSelectedTab('stored-resources')"
         :mode="storedResButtonMode"
      >
         Stored Resources
      </base-button>
      <base-button
         @click="setSelectedTab('add-resource')"
         :mode="addResButtonMode"
      >
         Add Resource
      </base-button>
   </base-card>
   <keep-alive><component :is="selectedTab"></component></keep-alive>
</template>

<script>
import AddResource from "./AddResource.vue";
import StoredResources from "./StoredResources.vue";

export default {
   components: {
      AddResource,
      StoredResources,
   },
   data() {
      return {
         selectedTab: "stored-resources",
         storedResources: [
            {
               id: "official-guide",
               title: "Official Guide",
               description: "The official Vue.js documentation.",
               link: "https://vuejs.org",
            },
            {
               id: "google",
               title: "Google",
               description: "A heavily censored search engine.",
               link: "https://google.com",
            },
         ],
      };
   },
   provide() {
      return {
         resources: this.storedResources,
         addResource: this.addResource,
      };
   },
   computed: {
      storedResButtonMode() {
         return this.selectedTab === "stored-resources" ? null : "flat";
      },
      addResButtonMode() {
         return this.selectedTab === "add-resource" ? null : "flat";
      },
   },
   methods: {
      setSelectedTab(tab) {
         this.selectedTab = tab;
      },
      addResource(id, title, description, link) {
         this.storedResources.unshift({
            id: "ref_" + this.storedResources.length,
            title: title,
            description: description,
            link: link,
         });
         this.setSelectedTab("stored-resources");
      },
   },
};
</script>

<style></style>
