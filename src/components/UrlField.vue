<template>
    <v-text-field
        v-model="url"
        :label="label"
        :rules="urlRules"
        required
    ></v-text-field>
</template>

<script>
export default {
    name: "UrlField",
    props: {
        label: String,
        value: String
    },
    data() {
        return {
            url: null
        };
    },
    computed: {
        urlRules() {
            return [
                (v) => !!v || "Url is required",
                (v) => this.isValidHttpUrl(v) || "Url must be valid"
            ];
        }
    },
    watch: {
        value() {
            this.url = this.value;
        },
        email() {
            this.$emit("input", this.url);
        }
    },
    methods: {
        isValidHttpUrl(string) {
            let url;

            try {
                url = new URL(string);
            } catch (_) {
                return false;
            }

            return url.protocol === "http:" || url.protocol === "https:";
        }
    }
};
</script>

<style scoped>

</style>