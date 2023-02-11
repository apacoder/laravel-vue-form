<script>
const name = () => {
    console.log(asd);
};
export default {
    data() {
        return {
            count: 0,
            info: null,
        };
    },

    methods: {
        increment() {
            this.count++;
        },
    },

    mounted() {
        console.clear();
        axios
            .post("/lista", {
                a: "cccccasd",
                b: "bbbbbbbs",
                d: 32,
                e: true,
            })
            .then((res) => {
                console.log(JSON.stringify(res.data, null, 2));
                this.info = res.data
            });
    },
};
</script>

<template>
    <pre>{{ info }}</pre>
</template>
