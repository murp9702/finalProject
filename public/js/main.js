
Vue.component('v-select', VueSelect.VueSelect)

var vm = new Vue({
    el: '#app',
    data: {
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
        alert(val) {
            console.log(val.label);
            console.log(vm.zipCode)
        }
    }
})
console.log("here")
