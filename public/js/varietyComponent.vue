        <template id="varietyList">
            <div>
                <div v-for="variety in currentVarieties">
                    <div>{{variety.name}}</div>
                    <div>{{variety.dtm}}</div>
                </div>
            </div>
        </template>


<script>
    export default {
        // data() {
        //     return {
        //         loading: false,
        //         post: null,
        //         error: null
        //     };
        // },
        // created() {
        //     // fetch the data when the view is created and the data is
        //     // already being observed
        //     this.fetchData();
        // },
        // watch: {
        //     // call again the method if the route changes
        //     $route: "fetchData"
        // },
        // methods: {
        //     fetchData() {
        //         this.error = this.post = null;
        //         this.loading = true;
        //         // replace `getPost` with your data fetching util / API wrapper
        //         getPost(this.$route.params.id, (err, post) => {
        //             this.loading = false;
        //             if (err) {
        //                 this.error = err.toString();
        //             } else {
        //                 this.post = post;
        //             }
        //         });
        //     }
        // }
    };
</script>