
Vue.component('v-select', VueSelect.VueSelect)

var vm = new Vue({
    el: '#app',
    data: {
        locationInfo: null,
        zipCode: null,
        // data for veggies
        veggies: [
            {
                // name of vegetable
                label: "tomato",
            },
            {
                label: "bean",
            },
            {
                label: "pea"
            },
        ],
        // data to display in dropdown before user input
        selected: "Please select an option"
    },

    methods: {

        // the on change passes the selected item into function as `val`
        alert: function(val) {
            console.log(val.label)
            console.log(this.zipCode)
            console.log(this.locationInfo)
        },
        postData: function() {
            $.post("/postData", {zipCode:this.zipCode}, (dataFromServer) => {
                console.log(this.zipCode)
                console.log(dataFromServer)
                this.locationInfo = dataFromServer
                console.log('this.locationInfo', this.locationInfo)
            })
        },
        doStuff: function() {
            console.log('location info', vm.locationInfo)
        }
    }
})
console.log("here")
