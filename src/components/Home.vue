<template>
    <div>
        <h1 class="text-center">
            Welcome to the Url Shortener
        </h1>
        <v-container>
            <h5>To start copy an url to shorten</h5>
            <v-form v-model="isValid">
                <v-row>
                    <v-col
                        cols="5"
                        md="4"
                    >
                        <url-field v-model="urlToShorten" />
                    </v-col>
                    <v-col
                        cols="5"
                        md="4"
                    >
                        <v-btn :loading="loading" :disabled="!isValid" @click="shortenUrl()">Shorten url</v-btn>
                    </v-col>
                </v-row>
                <h5 v-if="shortenedUrl" class="mt-3 mb-3">Your shortened url is: <a :href="shortenedUrl" target="_blank">{{ shortenedUrl }}</a></h5>
            </v-form>
            <h5>Or copy a shortened url to get the full one</h5>
            <v-form v-model="isValidForm2">
                <v-row>
                    <v-col
                        cols="5"
                        md="4"
                    >
                        <url-field v-model="urlToDecode" />
                    </v-col>
                    <v-col
                        cols="5"
                        md="4"
                    >
                        <v-btn :loading="loading" :disabled="!isValidForm2" @click="decodeUrl()">Decode url</v-btn>
                    </v-col>
                    <h5 v-if="decodedUrl" class="mt-3 mb-3">Your decoded url is: <a :href="decodedUrl" target="_blank">{{ decodedUrl }}</a></h5>
                </v-row>
            </v-form>
        </v-container>
    </div>


</template>

<script>
import UrlField from "@/components/UrlField";
import axios from "@/axios.config";
import settings from "@/settings";
export default {
    name: "Home",
    components: {UrlField},
    data() {
        return {
            urlToShorten: null,
            urlToDecode: null,
            loading: false,
            isValid: true,
            isValidForm2: true,
            shortenedUrl: null,
            decodedUrl: null
        };
    },
    methods: {
        async shortenUrl() {
            this.loading = true;
            try {
                let response = await axios.post("/url_shortener/encode/", {long_url: this.urlToShorten});
                if(!response.data.success) {
                    this.$notify({ type: "error", text: response.data.message });
                } else {
                    this.urlToShorten = null;
                    this.shortenedUrl = `${settings.API_URL}${response.data.url.short_url}`
                }
            } catch (err) {
                this.$notify({ type: "error", text: "Error connecting to the serve." });
            } finally {
                this.loading = false;
            }
        },
        async decodeUrl() {
            this.loading = true;
            try {
                let response = await axios.post("/url_shortener/decode/", {short_url: this.urlToDecode.replace(settings.API_URL, '')});
                if(!response.data.success) {
                    this.$notify({ type: "error", text: response.data.message });
                } else {
                    this.urlToDecode = null;
                    this.decodedUrl = response.data.url.long_url
                }
            } catch (err) {
                this.$notify({ type: "error", text: "Error connecting to the serve." });
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>

<style scoped>

</style>