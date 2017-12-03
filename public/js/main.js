Vue.component('v-select', VueSelect.VueSelect)

var vm = new Vue({
    el: '#app',
    data: {
        locationInfo: null,
        zipCode: null,
        // data for veggies
        veggies: [{
                // name of vegetable
                label: "tomato",
                daysToMaturity: 55
            },
            {
                label: "bean",
                daysToMaturity: 40
            },
            {
                label: "pea",
                daysToMaturity: 28

            },
        ],
        displayDate: null,
        // data to display in dropdown before user input
        selected: "Please select an option"
    },

    methods: {

        // the on change passes the selected item into function as `val`
        alert: function (val) {
            console.log(val.label)
            console.log(this.zipCode)
            console.log(this.locationInfo)
            this.displayDate = this.locationInfo.firstFrostDate
        },
        postData: function () {
            $.post("/postData", {
                zipCode: this.zipCode
            }, (dataFromServer) => {

                console.log(this.zipCode)
                console.log(dataFromServer)
                this.locationInfo = dataFromServer
                console.log('this.locationInfo', this.locationInfo)
                this.setDate(dataFromServer)
            })
        },
        setDate: function (dateFromDatabase) {
            // make new date object with current date
            let date = new Date()
            let currentYear = date.getFullYear();
            // split string from database into usable parts to build a new date object, need day and month seperated for the first and last frost
            // firstFrost whole date
            let firstFrostDate = dateFromDatabase.firstFrostDate.split('').slice(0, 5).join('')
            // first frost month 
            let firstFrostMonth = Number((firstFrostDate.split('').slice(0, 2).join('')) - 1)
            // first frost day
            let firstFrostDay = firstFrostDate.split('').slice(3).join('')
            // last frost whole date
            let lastFrostDate = dateFromDatabase.lastFrostDate.split('').slice(0, 5).join('')
            // last frost month
            let lastFrostMonth = Number((lastFrostDate.split('').slice(0, 2).join('')) - 1)
            // last frost day
            let lastFrostDay = lastFrostDate.split('').slice(3).join('')

            let firstFrost = new Date()
            firstFrost.setFullYear(currentYear, firstFrostMonth, firstFrostDay)
            let lastFrost = new Date()
            lastFrost.setFullYear(currentYear, lastFrostMonth, lastFrostDay)

            // check to see if user is currently able to grow.
            if (date > firstFrost || date < lastFrost) {
                //  If after first frost, but not in a new year, increase current year by one for next years garden planning.
                // if before last frost but in new year no changes need to be made.
                if (date.getMonth() > firstFrost.getMonth()) {
                    console.log("winter is here")
                    currentYear++
                    firstFrost.setFullYear(currentYear, firstFrostMonth, firstFrostDay)
                    lastFrost.setFullYear(currentYear, lastFrostMonth, lastFrostDay)
                }
            }
            this.locationInfo.firstFrostDate = firstFrost
            this.locationInfo.lastFrostDate = lastFrost

        },
        checkMaturity: function(crop) {
            let firstFrostDate = this.locationInfo.firstFrostDate
            let lastFrostDate = this.locationInfo.lastFrostDate
            let todaysDate = new Date()
            let maturityMath = todaysDate.setDate(todaysDate.getDate() + crop.daysToMaturity)
            let maturityDate = new Date(maturityMath)
            console.log({
                date: typeof date,
                name: crop.label,
                dtm: crop.daysToMaturity,
                newDate: maturityDate
            })

        }

    }

})
console.log("here")