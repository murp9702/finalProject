Vue.component('v-select', VueSelect.VueSelect)

const Vegetable = {
    template: `#varietyList`
}

const routes = [{
    path: '/vegetable/:veggie',
    component: Vegetable
}]

const router = new VueRouter({
    routes // short for `routes: routes`
})

var vm = new Vue({
    el: '#app',
    router: router,
    data: {
        locationInfo: null,
        zipCode: null,
        // data for veggies
        veggies: [{
                // name of vegetable
                label: "tomato",
                daysToMaturity: 55,
                varieties: [{
                        name: 'Valentine',
                        photo: '../img/tomato_valentine.jpg',
                        description: "Massive early yields, deep red color, and unusually rich flavor. Developed in collaboration with Dr. Majid Foolad of Penn State University, Valentine marries the best of wild-type tomato genetics with flavorful high-performing strains. This vivid-red, high-yielding, and early blight resistant tomato is the first commercial variety developed with Penn State's patented high-lycopene breeding lines. For best flavor, harvest when fruits are deep red. Long shelf life. AAS winner. U.S. Patent #8,524,992. Indeterminate. Intermediate resistance to alternaria (early) blight. Avg. 295,200 seeds/lb. Packet: 15 seeds.",
                        dtm: 55,
                        link: 'http://www.johnnyseeds.com/vegetables/tomatoes/valentine-organic-f1-tomato-seed-3371G.html?cgid=tomatoes#start=1',
                    },
                    {
                        name: 'Sunrise Sauce',
                        photo: '../img/tomato_sunrise_sauce.jpg',
                        description: "Much sweeter flavor than others in its class. Sunrise Sauce produces high yields of 3-4 oz. squat, Roma-shaped fruits within a concentrated period, which makes it perfect for saucing. Not to mention it has exceptional fruit quality and flavor and cooks down quickly. The perfect patio tomato. High resistance to fusarium wilt race 1 and verticillium wilt. Avg. 18,500 seeds/lb. Packet: 15 seeds.",
                        dtm: 57,
                        link: 'http://www.johnnyseeds.com/vegetables/tomatoes/sunrise-sauce-f1-tomato-seed-3376.html?cgid=tomatoes#start=1',
                    },
                    {
                        name: 'Speckled Roman',
                        photo: '../img/tomato_speckroman.jpg',
                        description: "Speckled Roman is an elongated plum tomato, avg. 6-8 oz., with bright red skin and golden streaks. Meaty red flesh has little juice, is good for fresh eating, and cooks quickly into sauce. Excellent flavor. Developed by Seed Savers Exchange member John Swenson. Though technically not an heirloom, we feel this is the best place to list it. Avg. 10,250 seeds/lb. Packet: 40 seeds.",
                        dtm: 85,
                        link: 'http://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/speckled-roman-tomato-seed-3816.html?cgid=heirloom-tomatoes#sz=18&start=19',
                    },
                    {
                        name: "Bigdena",
                        photo: '../img/tomato_bigdena.jpg',
                        description: "Vigorous, open plants produce very high yields of uniform, 10-12 oz., red fruits that are mostly smooth with slight shoulder ribs. Very good flavor with nice internal color and quality. High resistance to fusarium wilt races 1, 2, fusarium crown and root rot, leaf mold, tobacco mosaic virus, tomato mosaic virus, and verticillium wilt. Indeterminate. Avg. 9,800 seeds/oz. Packet: 15 seeds.",
                        dtm: 77,
                        link: 'http://www.johnnyseeds.com/vegetables/tomatoes/beefsteak-tomatoes/bigdena-f1-tomato-seed-3181.html?cgid=beefsteak-tomatoes#prefn1=prod_feature_marketing&prefv1=8&start=1',
                    }
                ]
            },
            {
                label: "bean",
                daysToMaturity: 40,
                varieties: [{
                        name: 'Carminat',
                        photo: '../img/bean_carminat.jpg',
                        description: 'Much nicer than older purple pole bean varieties. Harvest pods at 8-9". Excellent, rich, and slightly sweet flavor. Suitable for fresh use in salads or cooked. Beans turn green when cooked. Tan seeds. Avg. 1,400 seeds/lb. Packet: 50 seeds.',
                        dtm: 62,
                        link: 'http://www.johnnyseeds.com/vegetables/beans/pole-beans/carminat-bean-seed-3170.html?cgid=pole-beans#start=1',
                    },
                    {
                        name: "Dragon's Tongue",
                        photo: "../img/bean_dragonstounge.jpg",
                        description: 'Avg. 6-6- 1/2" flat pods are pale yellow with purple streaks. They are tender and sweet and good in salads or cooked. Purple disappears upon cooking. Tan seeds with dark speckles. Avg. 1,200 seeds/lb. Packet: 175 seeds.',
                        dtm: 57,
                        link: "http://www.johnnyseeds.com/vegetables/beans/bush-beans/dragons-tongue-bean-seed-3175.html?cgid=bush-beans#start=1",
                    },
                    {
                        name: "Midnight Black Turtle Soup",
                        photo: '../img/bean_midnightblkturtle.jpg',
                        description: 'The best variety of this Latin favorite, Midnight is an improved, upright-growing, black bean strain. The tall bush keeps the pods off the ground. Our nicest flavored bean. Small black beans, about the size of pea beans. Avg. 2,300 seeds/lb. Packet: 100 seeds.',
                        dtm: 104,
                        link: 'http://www.johnnyseeds.com/vegetables/beans/dry-beans/midnight-black-turtle-soup-dry-bean-seed-86.html?cgid=dry-beans#start=1',
                    }
                ]
            },
            {
                label: "pea",
                daysToMaturity: 28,
                varieties: [{
                        name: "Sugar Sprint",
                        photo: '../img/pea_sugarsprint.jpg',
                        description: `An almost stringless snap pea with excellent eating quality. Flavor as good as Sugar Ann. Diminished strings do not require removal before eating, making preparation faster and easier. 3" pods grow on 2' vines that can be grown with or without support. High resistance to powdery mildew. Avg. 2,000 seeds/lb. Packet: 250 seeds.`,
                        dtm: 58,
                        link: 'http://www.johnnyseeds.com/vegetables/peas/sugar-sprint-pea-seed-2339.html?cgid=peas#start=1',
                    },
                    {
                        name: "Premium",
                        photo: '../img/pea_premium.jpg',
                        description: `2 1/2-3" pods with avg. 7-8 very sweet, medium-sized peas per pod. 30" vines may be grown with or without support. High resistance to fusarium wilt race 1. Select 2669T (Treated) or 2669 (Untreated) Avg. 2,250 seeds/lb. Packet: 250 seeds.`,
                        dtm: 51,
                        link: 'http://www.johnnyseeds.com/vegetables/peas/premium-treated-pea-seed-2669T.html?cgid=peas#start=1',
                    }
                ]

            },
        ],
        currentVarieties: [
        ],
        displayDate: null,
        // data to display in dropdown before user input
        selected: "Please select an option"
    },

methods: {

    // the on change passes the selected item into function as `val`
    alert: function (index) {
        // console.log(val.label)
        // console.log(this.zipCode)
        // console.log(this.locationInfo)
        console.log({
            index: index,
            this: this,
            // val: val,
            label: this.veggies[index].varieties,
            // variety: val.lablel,
        })
        this.currentVarieties.push(this.veggies[index].varieties)
        // this.displayDate = this.locationInfo.firstFrostDate
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
                console.log("planning for next year")
                // currentYear++
                firstFrost.setFullYear(currentYear, firstFrostMonth, firstFrostDay)
                lastFrost.setFullYear(currentYear, lastFrostMonth, lastFrostDay)
            }
        }
        // set the date on the vm
        this.locationInfo.firstFrostDate = firstFrost
        this.locationInfo.lastFrostDate = lastFrost

    },
    checkMaturity: function (crop) {
        let firstFrostDate = this.locationInfo.firstFrostDate
        let lastFrostDate = this.locationInfo.lastFrostDate
        // add the selected vegetables DTM to the current date
        let todaysDate = new Date()
        let maturityMath = todaysDate.setDate(todaysDate.getDate() + crop.daysToMaturity)
        // turn maturityMath date into formatted string, maturityMath outputs time in mS
        let maturityDate = new Date(maturityMath)

        // if the maturity date is before the first frost, the crop can grow
        if (maturityDate <= firstFrostDate) {
            console.log("You can grow")
            console.log({
                maturityDate: maturityDate,
                firstFrostDate: firstFrostDate
            })
        }
        // if season is too short to grow a crop
        else {
            console.log('season too short')
        }

        console.log({
            name: crop.label,
            dtm: crop.daysToMaturity,
            newDate: maturityDate
        })

    }

}

})
console.log("here")