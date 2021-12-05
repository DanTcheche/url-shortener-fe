<template>
    <div>
        <h1 class="text-center">
            Welcome to the Url Shortener
        </h1>
        <v-container>
            <h5>To start copy an url to shorten</h5>
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <url-field v-model="urlToShorten" />
                </v-col>
            </v-row>
            <h5>Or copy a shortened url to get the full one</h5>
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <url-field v-model="urlToDecode" />
                </v-col>
            </v-row>
        </v-container>
    </div>


</template>

<script>
import UrlField from "@/components/UrlField";
export default {
    name: "Home",
    components: {UrlField},
    data() {
        return {
            urlToShorten: null,
            urlToDecode: null
        };
    }
};
</script>

<style scoped>

</style>