
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
        displayDate: null,
        // data to display in dropdown before user input
        selected: "Please select an option"
    },

    methods: {

        // the on change passes the selected item into function as `val`
        alert: function(val) {
            console.log(val.label)
            console.log(this.zipCode)
            console.log(this.locationInfo)
            this.displayDate = this.locationInfo.firstFrostDate
        },
        postData: function() {
            $.post("/postData", {zipCode:this.zipCode}, (dataFromServer) => {
                
                console.log(this.zipCode)
                console.log(dataFromServer)
                this.locationInfo = dataFromServer
                console.log('this.locationInfo', this.locationInfo)
            })
        },
        setDate: function(dateFromDatabase) {
        let date = new Date()
        let month = dateFromDatabase.split('').splice(2).join('')
        console.log("new month:", month)
    }
            
        }
    }
})
console.log("here")
