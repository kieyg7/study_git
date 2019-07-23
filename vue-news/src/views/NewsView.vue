<template>
    <div>
        <div v-for="user in users" :key="user.id">{{ user.title }}</div>
    </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';
export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },
}
</script>

<style>

</style>
