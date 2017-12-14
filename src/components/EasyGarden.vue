<template>
    <!-- <body> -->
    <div class="wrapper">
        <div id="app">
            <div class="logoTitleBar">
                <i class="fa fa-leaf fa-3x" aria-hidden="true"></i>
                <div> Easier Gardens </div>
            </div>
    
            <div class="searchBar">
    
                <div class="input-group margin-bottom-sm">
                    <span class="input-group-addon">
                                            <i class="fa fa-search fa-fw" aria-hidden="true"></i>
                                            <input class="form-control" type="text" placeholder="Please enter your ZipCode" v-model="zipCode">
                                            <button type="submit" @click.prevent="postData">Submit</button>
                                            </span>
                </div>
    
                <button class="buttonModal" @click="showModal">Show Calendar</button>
    
            </div>
    
            <div class="vegetableList">
                <ul>
                    <li v-for="(vegetable, index) in veggies" @click="alert(index)">
                        <a> {{vegetable.label}} </a>
                    </li>
                </ul>
            </div>
    
        <div class="row">
            <div class="varietyList" v-for="(array, arrayIndex) in currentVarieties">   
                <div class="varieties" v-for="(variety, index) in array">
                    <div class="varietyPhoto col-xl-4">
                        <img :src="variety.photo" />
                        <span>Days To Maturity: {{variety.dtm}}</span>
                        <span>Expected Harvest Date: {{checkMaturity(variety.dtm)}}</span>
                    </div>
                    <div class="varietyName col-xl-4">
                        <h4>
                            <a :href="variety.link" target="_blank">{{variety.name}}</a>
                            <button @click='addToCalendar(arrayIndex, index)'>Add to Calendar</button>
                        </h4>
                    </div>
                    <div class="varietyDescription col-xl-4">{{variety.description}}</div>
    
                </div>
                <!-- <swiper :options="swiperOption" v-for="array in currentVarieties">
                                    <swiper-slide v-for="variety in array" class="varieties" >
                                        <div class="varietyName">{{variety.name}}<hr></div>
                                        <img class="varietyPhoto" :src="variety.photo" />
                                        <div class="varietyDescription">{{variety.description}}</div>
                                    </swiper-slide>
                                    <div class="swiper-pagination" slot="pagination"></div>
                                    <div class="swiper-button-prev" slot="button-prev"></div>
                                    <div class="swiper-button-next" slot="button-next"></div>                       
                                </swiper> -->
    
            </div>
        </div>
        <modal  name="calendar" :adaptive="true" width="75%" height="75%">
            <div slot="top-right"><button @click='destroyCalendar'>X</button></div>
            <div id='calendar'>
            <full-calendar :events="events" :config="config" ref="calendar" />
            </div>
        </modal>
    
    
        <template id="varietyList">
                                    <!-- <div>
                                      <div v-for="variety in currentVarieties">
                                        <div>{{variety.name}}</div>
                                        <div>{{variety.dtm}}</div>
                                      </div>
                                    </div> -->
</template>
      </div>
     
      
      
    </div>
 
</template>

<script>
    export default {
        name: "EasyGarden",
        data: function() {
            return {  
                events: [
                ],
                config: {
                    height: 500,
                    eventLimit: 4,
                    defaultView: 'month',
                    defaultDate: "2018-04-12"

                },
                locationInfo: null,
                zipCode: 80631,
                // data for veggies
                veggies: [
                    {
                        label:"Artichokes",
                        varieties: [
                            {
                                name: "Imperial Star",
                                description: `A green artichoke specifically bred for annual production, Imperial Star will produce well-developed artichokes the first year from seed. Plants become 1 1/2-3' tall and have an open growth habit. Each typically produces 1-2 primary buds, which average 3-4" in diameter, and 5-7 smaller secondary buds. Perennial in Zone 7 and warmer; otherwise treat as an annual. Avg. 10,500 seeds/lb. Packet: 25 seeds.`,
                                dtm: 85,
                                link: `http://www.johnnyseeds.com/vegetables/artichokes/imperial-star-artichoke-seed-2120.html?cgid=artichokes#start=1`,
                                photo: "../static/artichoke_imperialstar.jpg"
                            },
                            {
                                name: "Colorado Star",
                                description: `Colorado Star was specifically bred for annual production from seed. Very early maturing compared to other purple varieties as well as green varieties. The 1-3' tall plants vary from upright to prostrate, but all produce high yields of purple to green-purple buds. Typically 1-3 primary buds are produced that are 2 1/2-3 1/2" in diameter followed by 5-7 secondary buds ranging from 2-2 1/2" diameter. Developed by Keith Mayberry - the same breeder of Imperial Star. Plants may be variably spiny. Perennial in Zone 7 and warmer, otherwise treat as an annual. NOTE: Amount of purpling may vary from plant to plant - some buds will be all purple, while others only show purple-tinged bracts. Avg. 9,600 seeds/lb. Packet: 25 seeds.`,
                                dtm: 75,
                                link: `http://www.johnnyseeds.com/vegetables/artichokes/colorado-star-artichoke-seed-3674.html?cgid=artichokes#start=1`,
                                photo: "../static/artichoke_coloradostar.jpg"
                            }
                            ]
                    },
                    
                     {
                        label: "Beans",
                        daysToMaturity: 40,
                        varieties: [{
                                name: "Carminat",
                                photo: "../static/bean_carminat.jpg",
                                description: 'Much nicer than older purple pole bean varieties. Harvest pods at 8-9". Excellent, rich, and slightly sweet flavor. Suitable for fresh use in salads or cooked. Beans turn green when cooked. Tan seeds. Avg. 1,400 seeds/lb. Packet: 50 seeds.',
                                dtm: 62,
                                link: "http://www.johnnyseeds.com/vegetables/beans/pole-beans/carminat-bean-seed-3170.html?cgid=pole-beans#start=1"
                            },
                            {
                                name: "Dragon's Tongue",
                                photo: "../static/bean_dragonstounge.jpg",
                                description: 'Avg. 6-6- 1/2" flat pods are pale yellow with purple streaks. They are tender and sweet and good in salads or cooked. Purple disappears upon cooking. Tan seeds with dark speckles. Avg. 1,200 seeds/lb. Packet: 175 seeds.',
                                dtm: 57,
                                link: "http://www.johnnyseeds.com/vegetables/beans/bush-beans/dragons-tongue-bean-seed-3175.html?cgid=bush-beans#start=1"
                            },
                            {
                                name: "Midnight Black Turtle Soup",
                                photo: "../static/bean_midnightblkturtle.jpg",
                                description: "The best variety of this Latin favorite, Midnight is an improved, upright-growing, black bean strain. The tall bush keeps the pods off the ground. Our nicest flavored bean. Small black beans, about the size of pea beans. Avg. 2,300 seeds/lb. Packet: 100 seeds.",
                                dtm: 104,
                                link: "http://www.johnnyseeds.com/vegetables/beans/dry-beans/midnight-black-turtle-soup-dry-bean-seed-86.html?cgid=dry-beans#start=1"
                            }
                        ]
                    },
                    {
                        label: "Beets",
                        varieties: [
                            {
                                name: "Boro",
                                description: "Tough, widely adapted, and reliable. Smooth, rich red skin and excellent flavor. Attractive fine taproot. Big healthy tops. Smoother skin, earlier, and more round in shape than Merlin, which it replaces. Excellent resistance to Cercospora leaf spot. Select organic or conventional seeds. Also available with NOP-compliant pelleting. Avg. 51,300 seeds/lb. Packet: 350 seeds.",
                                dtm: 50,
                                link: "http://www.johnnyseeds.com/vegetables/beets/boro-f1-beet-seed-3300.html?cgid=beets#start=1",
                                photo: "../static/beet_boro.jpg"
                            },
                            {
                                name: "Boldor",
                                description: "Boldor is now available with NOP-compliant pellet! Very similar to Touchstone Gold in terms of vigor, performance, and flavor, but Boldor has brighter interior color. Many growers choose one or the other based on personal preference. Keeps its color when cooked. Excellent, sweet flavor. Green leaves and petioles. Avg. 9,300 seeds/lb. Packet: 350 seeds.",
                                dtm: 55,
                                link: "http://www.johnnyseeds.com/vegetables/beets/boldor-pelleted-beet-seed-3121JP.html?cgid=beets#start=1",
                                photo: "../static/beet_boldor.jpg"
                            },
                            {
                                name: "Chioggia Guardsmark",
                                description: `The highest quality Chioggia strain available. Medium-height tops are green with pink-striped stems. Excellent flavor. Select organic or conventional seeds. Also available with NOP-compliant pelleting. Organically grown. Avg. 44,000 seeds/lb. Packet: 350 seeds.`,
                                dtm: 55,
                                link: "http://www.johnnyseeds.com/vegetables/beets/chioggia-guardsmark-organic-beet-seed-25G.html?cgid=beets#start=1",
                                photo: "../static/beet_chioggiagm.jpg"
                            }
                        ]
                    },
                    {
                        label: "Broccoli",
                        varieties: [
                            {
                                name: "Monflor",
                                description: `Speed up kitchen prep. Monflor was bred for a flat and loose head, which allows floret separation with one cut. Floret quality is higher than those cut from standard heads. Market as bagged florets or whole heads. Avg. 75,000 seeds/lb. Packet: 100 seeds.`,
                                dtm: 53,
                                link: `http://www.johnnyseeds.com/vegetables/broccoli/monflor-f1-broccoli-seed-4378.html?cgid=broccoli#start=1`,
                                photo: `../static/broc_monflor.jpg`
                            },
                            {
                                name: "Red Fire",
                                description: `These sweet and tender, 6-8", bright-purple florets are a welcome addition to the market stand in February and March, when fresh greens are scarce. NOTE: Best adapted to the Pacific Northwest and Mid-Atlantic regions where winter temperatures are low enough to vernalize the plant but do not typically drop below 20°F/-7°C; Red Fire will winterkill in colder climates. Avg. 89,800 seeds/lb. Packet: 100 seeds.`,
                                dtm: 140,
                                link: `http://www.johnnyseeds.com/vegetables/broccoli/red-fire-f1-broccoli-seed-3756.html?cgid=broccoli#sz=18&start=19`,
                                photo: `../static/broc_redfire.jpg`
                            }
                        ]
                    },
                    {
                        label: "Brussels",
                        varieties: [
                            {
                                name: `Diablo`,
                                description: `Tall plants produce heavy crops of smooth, medium-sized sprouts. These excellent quality sprouts are solid and hold well in the field. Avg. 63,400 seeds/lb. Packet: 100 seeds.`,
                                dtm: 110,
                                link: `http://www.johnnyseeds.com/vegetables/brussels-sprouts/diablo-f1-brussels-sprout-seed-2421.html?cgid=brussels-sprouts#start=1`,
                                photo: `../static/brussel_diablo.jpg`
                            },
                            {
                                name: `Nautic`,
                                description: `Nautic's sprouts are medium-sized and have excellent taste. Plant is bigger than Diablo and has a higher yield potential, especially in areas with a cool fall. Excellent cold tolerance. For late fall harvest. Organically grown. Avg. 146,000 seeds/lb. Packet: 100 seeds.`,
                                dtm: 105,
                                link: `http://www.johnnyseeds.com/vegetables/brussels-sprouts/nautic-organic-f1-brussels-sprout-seed-2556G.html?cgid=brussels-sprouts#start=1`,
                                photo: `../static/brussel_nautic.jpg`
                            }
                        ]
                    },
                    {
                        label: "Cabbage",
                        varieties: [
                            {
                                name: `Farao`,
                                description: `Attractive deep-green, 3-lb. heads are filled with tender, thin, crisp, peppery-sweet leaves. Holds well in the field and is slow to split. Organically grown. Avg. 94,300 seeds/lb. Packet: 50 seeds.`,
                                dtm:65,
                                link: `http://www.johnnyseeds.com/vegetables/cabbage/farao-organic-f1-cabbage-seed-2110G.html?cgid=cabbage#start=1`,
                                photo: `../static/cabbage_farao.jpg`
                            },
                            {
                                name: `Deadon`,
                                description: `The magenta color intensifies with colder weather for this January King type cabbage. Medium-large, firm heads have a delicious, sweet flavor. High resistance to fusarium yellows. Avg. 135,200 seeds/lb. Packet: 50 seeds.`,
                                dtm: 105,
                                link: `http://www.johnnyseeds.com/vegetables/cabbage/deadon-f1-cabbage-seed-306.html?cgid=cabbage#start=1`,
                                photo: `../static/cabbage_deadon.jpg`
                            }
                        ]
                    },
                    {
                        label: "Carrots",
                        varieties: [
                            {
                                name: "Yellowstone",
                                description: `Yellowstone's 6-8" long roots are deeper in color than most other yellow carrot varieties. Nice, vigorous tops will compete with weeds. Compared to Yellowbunch, it is earlier and shorter with slightly blunter tip. Pairs well with Purple Haze and White Satin. Select organic or conventional seeds. Also available with NOP-compliant pelleting. Avg. 230,900 seeds/lb. Packet: 750 seeds.`,
                                dtm: 73,
                                link: `http://www.johnnyseeds.com/vegetables/carrots/yellowstone-carrot-seed-3333.html?cgid=carrots#start=1`,
                                photo: `../static/carrot_yellowstone.jpg`
                            },
                            {
                                name: "Malbec",
                                description: `A significant improvement on Nutri-Red. Malbec produces smooth, uniform 10" long roots. The small core allows consistent, rich internal color for multiple end uses, including marketing as whole roots, sliced, or mini carrots. Good texture. Pair with yellow, orange, white, and purple carrots for an eye-catching rainbow presentation. Also available with NOP-compliant pelleting. Avg. 250,000 seeds/lb. Packet: 750 seeds.`,
                                dtm: 70,
                                link: `http://www.johnnyseeds.com/vegetables/carrots/malbec-f1-carrot-seed-3292.html?cgid=carrots#start=1`,
                                photo: `../static/carrot_malbec.jpg`
                            },
                            {
                                name: "Purple Haze",
                                description: `Excellent flavor, raw or cooked. Combines purple skin color with sweet flavor. 7-8" tapered roots with large, healthy tops. Skin is dark purple with a bright orange interior. Cooking will cause the color to fade. Medium-short tops. Imperator type. AAS winner. Avg. 23,900 seeds/lb. Packet: 250 seeds.`,
                                dtm: 73,
                                link: `http://www.johnnyseeds.com/vegetables/carrots/purple-haze-pelleted-f1-carrot-seed-2680JP.html?cgid=carrots#start=1`,
                                photo: `../static/carrot_purple_haze.jpg`
                            }
                        ]
                    },
                    {
                        label: "Corn",
                        varieties: [
                            {
                                name: "American Dream",
                                description: `Exceptionally tender and sweet. The finest eating quality available in sweet corn. Produces tidy ears that look great on the farm stand and deliver on fresh-market flavor. Adaptable variety with excellent tip fill and strong husk protection. Replaces Xtra-Tender 277A. Intermediate resistance to northern corn leaf blight. AAS winner. Avg. 3,500 seeds/lb. Packet: 150 seeds.`,
                                dtm: 77,
                                link: `http://www.johnnyseeds.com/vegetables/corn/american-dream-f1-corn-seed-4393.html?cgid=corn#start=1`,
                                photo: `../static/corn_american_dream.jpg`
                            },
                            {
                                name: "Sugar Buns",
                                description: `Remains tender for up to two weeks in the field for the longest harvest period of all early corn varieties. The 7", 14-row ears have relatively narrow, deep kernels, making a nice package. 5-6' sturdy plants. Best at latitude 38° and higher. Intermediate resistance to northern corn leaf blight and Stewart's wilt. Select 267T (Treated) or 267 (Untreated). Avg. 2,600 seeds/lb. Packet: 150 seeds.`,
                                dtm: 70,
                                link: `http://www.johnnyseeds.com/vegetables/corn/sugar-buns-f1-corn-seed-267.html?cgid=corn#start=1`,
                                photo: `../static/corn_sugarbuns.jpg`
                            },

                        ]
                    },
                    {
                        label: "Cucumber",
                        varieties: [
                            {
                                name: "Lemon",
                                description: `Pick at 1½-2½" diameter. This versatile cucumber is sweet and flavorful, and doesn't have much of the chemical that makes other cucumbers bitter and hard to digest. Though often served raw, Lemon is also a good pickling cucumber. Specialty market salad item. NOTE: Very late to begin bearing. Organically grown. Avg. 18,500 seeds/lb. Packet: 30 seeds.`,
                                dtm: 65,
                                link: `http://www.johnnyseeds.com/vegetables/cucumbers/lemon-organic-cucumber-seed-329G.html?cgid=cucumbers#start=1`,
                                photo: `../static/cuc_lemon.jpg`
                            },
                            {
                                name: `Mexican Sour Gherkin`,
                                description: `Cute, 1" long fruits look like miniature watermelons and taste like cucumbers with citrus and tangy overtones. Vines start growing slowly but can get up to 10' long. Can be eaten fresh or pickled. Fruits can be sold in half-pint or clamshell containers at markets that appreciate novelty. Also known as the Cucamelon and mouse melon. Not particularly high yielding. Trellising recommended. NOTE: We recommend harvesting these cucumbers promptly as they tend to get seedy if allowed to grow longer than 1". Avg. 157,700 seeds/lb. Packet: 30 seeds.`,
                                dtm: 67,
                                link: `http://www.johnnyseeds.com/vegetables/cucumbers/mexican-sour-gherkin-cucumber-seed-3174.html?cgid=cucumbers#start=1`,
                                photo: `../static/cuc_mexicansourgherkin.jpg`
                            },
                            {
                                name: "Northern Pickling",
                                description: `Medium green fruits bear early, and set heavily on short, space-saving vines. Fertilize well and pick frequently at a small size to maintain good color and fruit shape. Developed in Maine. Black spine. High resistance to scab. Organically grown. Avg. 19,000 seeds/lb. Packet: 30 seeds.`,
                                dtm: 48,
                                link: `http://www.johnnyseeds.com/vegetables/cucumbers/northern-pickling-organic-cucumber-seed-330.html?cgid=cucumbers#start=1`,
                                photo: `../static/cuc_northern_pickling.jpg`
                            }
                        ]
                    },
                    {
                        label: "Greens",
                        varieties: [
                            {
                                name: "Arugula",
                                description: `• Edible Flowers: The white flowers with dark pink veins are edible, and can be harvested as they appear. Sprinkle them over salads or add to vegetable stir-fries. Flavor is spicy and nutty. Popular choice for brightening up salad mixes.`,
                                dtm: 21,
                                link: `http://www.johnnyseeds.com/vegetables/greens/arugula-seed-385.html?cgid=greens#start=1`,
                                photo: `../static/greens_arugula.jpg`
                            },
                            {
                                name: `Mizuna`,
                                description: `Traditional mustard green of Japanese origin. Mizuna produces dozens of pencil-thin white stalks with deeply cut, fringed leaves. Mild flavor. Continues to produce for several weeks from one planting as a "cut and come again" product. Organically grown. Avg. 15,350 seeds/oz. Packet: 250 seeds.`,
                                dtm: 21,
                                link: `http://www.johnnyseeds.com/vegetables/greens/mizuna-organic-asian-green-seed-2883.html?cgid=greens#start=1`,
                                photo: `../static/greens_mizuna.jpg`
                            },
                            {
                                name: `Red Veined Sorrel`,
                                description: `Bright-green leaves with contrasting dark maroon stems and veins add color and taste to salad mix. Same sharp, tangy flavor as regular sorrel. Best variety for indoor production. Best when harvested young for salad mix as large leaves are tough. Has great ornamental use at full size. Avg. 42,900 seeds/oz. Packet: 250 seeds.`,
                                dtm: 40,
                                link: `http://www.johnnyseeds.com/vegetables/greens/red-veined-sorrel-green-seed-2827.html?cgid=greens#start=1`,
                                photo: `../static/greens_redvsorrelsalad.jpg`
                            }
                        ]
                    },
                    {
                        label: "Leeks",
                        varieties: [
                            {
                                name: `Tadorna`,
                                description: `A vigorous grower producing a medium-length white shank and contrasting, very dark blue-green foliage. Holds in the field for fall into winter harvest, and overwinters in moderate climates. Moderate leaf disease resistance. Select organic or conventional seeds. Organically grown. Avg. 10,600 seeds/oz. Packet: 250 seeds.`,
                                dtm: 100,
                                link: `http://www.johnnyseeds.com/vegetables/leeks/tadorna-organic-leek-seed-2092G.html?cgid=leeks#start=1`,
                                photo: `../static/leek_tadornaleek.jpg`
                            },
                            {
                                name: `Pandora`,
                                description: `Dark blue-green foliage. A late summer/early fall O.P. leek with a high percentage of usable shank with no bulbing. PLEASE NOTE: For ease of sowing, Pandora's seed is coated with an inert, NOP-compliant film. Organically grown. Avg. 10,700 seeds/oz. Packet: 250 seeds.`,
                                dtm: 90,
                                link: `http://www.johnnyseeds.com/vegetables/leeks/pandora-organic-leek-seed-2757G.html?cgid=leeks#start=1`,
                                photo: `../static/leek_pandora.jpg`
                            }
                        ]
                    },
                    {
                        label: "Melons",
                        varieties: [
                            {
                                name: "Sugar Cube",
                                description: `Sugar Cube lives up to its name with intensely sweet flavor. Boasts a strong disease package. Yields very uniform, heavily-netted 2-4 lb. fruits with deep-orange, aromatic flesh. Fruits are just a bit bigger than a softball. Compared to Tasty Bites, which it replaces, it performs better in the South because of added virus resistance. It is also slightly smaller and has a longer harvest period. Sugar Cube is well-suited for Northern and Southern growers. High resistance to Fusarium wilt races 0-2, powdery mildew, and watermelon mosaic virus; intermediate resistance to papaya ringspot virus and zucchini yellow mosaic virus. Avg. 20,300 seeds/lb. Packet: 30 seeds.`,
                                dtm: 80,
                                link: `http://www.johnnyseeds.com/vegetables/melons/sugar-cube-f1-melon-seed-4399.html?cgid=melons#start=1`,
                                photo: `../static/melon_sugar_cube.jpg`
                            },
                            {
                                name: "Savor",
                                description: `Unsurpassed eating quality. The small, 2-lb melons are of the classic Charentais type: faintly ribbed, with a smooth gray-green rind and dark-green sutures. Sweet and aromatic, deep-orange flesh. High resistance to fusarium wilt races 0-2; and intermediate resistance to powdery mildew. Avg. 17,000 seeds/lb. Packet: 15 seeds.`,
                                dtm: 78,
                                link: `http://www.johnnyseeds.com/vegetables/melons/savor-f1-melon-seed-462.html?cgid=melons#start=1`,
                                photo: `../static/melon_savor.jpg`
                            },
                            {
                                name: `Athena`,
                                description: `Ripe melons seldom crack and have a tough rind, making them ideal for shipping. Good shelf life even when harvested ripe. Widely adapted. Fruits avg. 5-6 lb. Intermediate resistance to fusarium wilt races 0-2 and powdery mildew. Avg. 15,800 seeds/lb. Packet: 30 seeds.`,
                                dtm: 79,
                                link: `http://www.johnnyseeds.com/vegetables/melons/athena-f1-melon-seed-457.html?cgid=melons#start=1`,
                                photo: `../static/melon_athena.jpg`
                            }
                        ]
                    },
                   {
                        label: "Peas",
                        daysToMaturity: 28,
                        varieties: [{
                                name: "Sugar Sprint",
                                photo: "../static/pea_sugarsprint.jpg",
                                description: `An almost stringless snap pea with excellent eating quality. Flavor as good as Sugar Ann. Diminished strings do not require removal before eating, making preparation faster and easier. 3" pods grow on 2' vines that can be grown with or without support. High resistance to powdery mildew. Avg. 2,000 seeds/lb. Packet: 250 seeds.`,
                                dtm: 58,
                                link: "http://www.johnnyseeds.com/vegetables/peas/sugar-sprint-pea-seed-2339.html?cgid=peas#start=1"
                            },
                            {
                                name: "Premium",
                                photo: "../static/pea_premium.jpg",
                                description: `2 1/2-3" pods with avg. 7-8 very sweet, medium-sized peas per pod. 30" vines may be grown with or without support. High resistance to fusarium wilt race 1. Select 2669T (Treated) or 2669 (Untreated) Avg. 2,250 seeds/lb. Packet: 250 seeds.`,
                                dtm: 51,
                                link: "http://www.johnnyseeds.com/vegetables/peas/premium-treated-pea-seed-2669T.html?cgid=peas#start=1"
                            }
                        ]
                    },
                   {
                       label: "Peppers",
                       varieties:[
                           {
                               name: "Jedi",
                               description: `Our largest jalapeno offering, Jedi's fruits avg. 4-4 1/2" and are slow to check (show small cracks in skin). Large plants. A couple of days later than Jalafuego, but with bigger fruits. Resistant to bacterial leaf spot races 1-3. Avg. 65,000 seeds/lb. Packet: 25 seeds.`,
                               dtm: 72,
                               link: `http://www.johnnyseeds.com/vegetables/peppers/jedi-f1-pepper-seed-3528.html?cgid=peppers#start=1`,
                               photo: `../static/pepper_jedi.jpg`
                           },
                           {
                               name: "Mad Hatter",
                               description: `These unusually shaped peppers resemble a bishop's crown. Fruits avg. 2 1/4" in diameter and are borne on big, bushy plants. Moderately sweet flesh with floral and citrus notes and a touch of heat near the seed cavity. AAS winner. Avg. 55,000 seeds/lb. Packet: 25 seeds.`,
                               dtm: 85,
                               link: `http://www.johnnyseeds.com/vegetables/peppers/mad-hatter-f1-pepper-seed-3388.html?cgid=peppers#start=1`,
                               photo: `../static/pepper_mad_hatter.jpg`
                           },
                           {
                               name: `Biquinho Red`,
                               description: `The small, pointed fruits avg. 1 1/4" and have a unique, slightly tart flavor with a tiny bit of heat. May be eaten raw or cooked, but is generally pickled in vinegar and served with meals. Fruits turn from very pale green to red. Quite popular in Brazil, where they originated. Avg. 79,400 seeds/lb. Packet: 25 seeds.`,
                               dtm: 55,
                               link: `http://www.johnnyseeds.com/vegetables/peppers/biquinho-red-pepper-seed-3380.html?cgid=peppers#start=1`,
                               photo: `../static/pepper_biquinho_red.jpg`
                           },
                           {
                               name: `Islander`,
                               description: `3-lobed, medium-size, thick-fleshed bell peppers with a mild, slightly sweet taste. Fruits ripen through a showy stage of violet, yellow and orange streaks, eventually turning a rich, very dark red. Strong, medium-tall plants yield well. High resistance to tobacco mosaic virus. Avg. 3,900 seeds/oz. Packet: 25 seeds.`,
                               dtm: 56,
                               link: `http://www.johnnyseeds.com/vegetables/peppers/islander-f1-pepper-seed-591.html?cgid=peppers#start=1`,
                               photo: `../static/pepper_islander.jpg`
                           }
                       ]
                   },
                   {
                       label: "Radishes",
                       varieties: [
                           {
                               name: `Nero Tondo`,
                               description: `This elite strain is much more uniform and resistant to bolting than the ordinary Black Spanish variety. Large 2-4" (depending on harvest date) black-skinned, round roots with crisp, hot, white flesh. Suitable for sowing midspring (soil temp. 60°F/15°C or higher to prevent bolting) through fall. Thin to 4" apart. Avg. 50,300 seeds/lb. Packet: 250 seeds.`,
                               dtm: 50,
                               link: `http://www.johnnyseeds.com/vegetables/radishes/nero-tondo-radish-seed-616.html?cgid=radishes#start=1`,
                               photo: `../static/radish_nerotondo.jpg`
                           },
                           {
                               name: `Easter Egg`,
                               description: `Make beautiful bunches with this mix of red, purple, and white round radishes. Maturing over an extended period of time, they stay crisp and mild even when large. Great fun for children and adults alike. Easter Egg II blend. Avg. 50,600 seeds/lb. Packet: 250 seeds.`,
                               dtm: 30,
                               link: `http://www.johnnyseeds.com/vegetables/radishes/easter-egg-radish-seed-617.html?cgid=radishes#start=1`,
                               photo: `../static/radish_easteregg.jpg`
                           }
                       ]
                   },
                   {
                       label: "Spinach",
                       varieties: [
                           {
                               name: `Red Kitten`,
                               description: `For baby leaf production in the early spring or full-size bunching in the fall and winter. Uniform, smooth leaves are borne on fairly upright plants. High resistance to downy mildew races 1-13, 15. Avg. 44,900 seeds/lb. Packet: 1,000 seeds.`,
                               dtm: 28,
                               link: `http://www.johnnyseeds.com/vegetables/spinach/red-kitten-f1-spinach-seed-3516.html?cgid=spinach#start=1`,
                               photo: `../static/spinach_redkitten.jpg`
                           },
                           {
                               name: `Flamingo`,
                               description: `Uniform, smooth, dark-green leaves on long stems. A great choice for bunching. Slower bolting compared to other varieties of this type. High resistance to downy mildew races 1-11; intermediate resistance to races 12-13. Avg. 24,800 seeds/lb. Packet: 1,000 seeds.`,
                               dtm: 27,
                               link: `http://www.johnnyseeds.com/vegetables/spinach/flamingo-f1-spinach-seed-3914.html?cgid=spinach#start=1`,
                               photo: `../static/spinach_flamingo.jpg`
                           }
                       ]
                   },

                    {
                        // name of vegetable
                        label: "Tomato",
                        daysToMaturity: 55,
                        // individual varieties of vegetable
                        varieties: [{
                                name: "Valentine",
                                photo: "../static/tomato_valentine.jpg",
                                description: "Massive early yields, deep red color, and unusually rich flavor. Developed in collaboration with Dr. Majid Foolad of Penn State University, Valentine marries the best of wild-type tomato genetics with flavorful high-performing strains. This vivid-red, high-yielding, and early blight resistant tomato is the first commercial variety developed with Penn State's patented high-lycopene breeding lines. For best flavor, harvest when fruits are deep red. Long shelf life. AAS winner. U.S. Patent #8,524,992. Indeterminate. Intermediate resistance to alternaria (early) blight. Avg. 295,200 seeds/lb. Packet: 15 seeds.",
                                dtm: 55,
                                link: "http://www.johnnyseeds.com/vegetables/tomatoes/valentine-organic-f1-tomato-seed-3371G.html?cgid=tomatoes#start=1"
                            },
                            {
                                name: "Sunrise Sauce",
                                photo: "../static/tomato_sunrise_sauce.jpg",
                                description: "Much sweeter flavor than others in its class. Sunrise Sauce produces high yields of 3-4 oz. squat, Roma-shaped fruits within a concentrated period, which makes it perfect for saucing. Not to mention it has exceptional fruit quality and flavor and cooks down quickly. The perfect patio tomato. High resistance to fusarium wilt race 1 and verticillium wilt. Avg. 18,500 seeds/lb. Packet: 15 seeds.",
                                dtm: 57,
                                link: "http://www.johnnyseeds.com/vegetables/tomatoes/sunrise-sauce-f1-tomato-seed-3376.html?cgid=tomatoes#start=1"
                            },
                            {
                                name: "Speckled Roman",
                                photo: "../static/tomato_speckroman.jpg",
                                description: "Speckled Roman is an elongated plum tomato, avg. 6-8 oz., with bright red skin and golden streaks. Meaty red flesh has little juice, is good for fresh eating, and cooks quickly into sauce. Excellent flavor. Developed by Seed Savers Exchange member John Swenson. Though technically not an heirloom, we feel this is the best place to list it. Avg. 10,250 seeds/lb. Packet: 40 seeds.",
                                dtm: 85,
                                link: "http://www.johnnyseeds.com/vegetables/tomatoes/heirloom-tomatoes/speckled-roman-tomato-seed-3816.html?cgid=heirloom-tomatoes#sz=18&start=19"
                            },
                            {
                                name: "Bigdena",
                                photo: "../static/tomato_bigdena.jpg",
                                description: "Vigorous, open plants produce very high yields of uniform, 10-12 oz., red fruits that are mostly smooth with slight shoulder ribs. Very good flavor with nice internal color and quality. High resistance to fusarium wilt races 1, 2, fusarium crown and root rot, leaf mold, tobacco mosaic virus, tomato mosaic virus, and verticillium wilt. Indeterminate. Avg. 9,800 seeds/oz. Packet: 15 seeds.",
                                dtm: 77,
                                link: "http://www.johnnyseeds.com/vegetables/tomatoes/beefsteak-tomatoes/bigdena-f1-tomato-seed-3181.html?cgid=beefsteak-tomatoes#prefn1=prod_feature_marketing&prefv1=8&start=1"
                            }
                        ]
                    },
                   {
                       label: "Turnips",
                       varieties: [
                           {
                               name: `Niseko`,
                               description: `Pure white salad turnip with exceptional eating quality. Niseko's flavor and light, crunchy texture rival Hakurei's. The round to slightly top-shaped roots are best eaten fresh. Resistant to club root. Heat tolerant. We recommend harvesting when roots are 2" in diameter. Avg. 222,800 seeds/lb. Packet: 400 seeds.`,
                               dtm: 38,
                               link: `http://www.johnnyseeds.com/vegetables/turnips/niseko-f1-turnip-seed-4394.html?cgid=turnips#start=1`,
                               photo: `../static/turnip_niseko.jpg`
                           },
                           {
                               name: `Purple Top White Globe`,
                               description: `Selected strain of this traditional, Southern U.S. variety. Smooth, round roots, avg. 3-4" in diameter, are white below the soil line and bright purple above. Large, lobed greens. Organically grown. Avg. 276,650 seeds/lb. Packet: 400 seeds.`,
                               dtm: 50,
                               link: `http://www.johnnyseeds.com/vegetables/turnips/purple-top-white-globe-organic-turnip-seed-705G.html?cgid=turnips#start=1`,
                               photo: `../static/turnip_purple_top_white_globe.jpg`
                           }
                       ]
                   }
                   
                ],
                currentVarieties: [],
                vegetableArrayIndex: 0,
                displayDate: null,
                

            };
        },
    
        methods: {
            addToCalendar: function(arrayIndex, index) {
                // push an array of arrays of objects to events exapmple: [[{plantdate},{harvest}],[{plant},{harvest}]]
                var vegetable = this.veggies[this.vegetableArrayIndex].varieties[index]
                console.log({
                    this: this,
                    index: index,
                    arrayIndex: this.vegetableArrayIndex,
                    name: this.veggies[this.vegetableArrayIndex].varieties[index].name
                })
                var harvestDate =  this.checkMaturity(vegetable.dtm)
                // console.log(harvestDate)
                // var harvestSlice = harvestDate.toISOString().split('').slice(0,10).join('')
                var slice = this.locationInfo.lastFrostDate.toISOString().split('').slice(0,10).join('')
                console.log("slice", slice)
                this.events.push({title: `Plant ${vegetable.name}`, start: slice},{title: `Harvest ${vegetable.name}`, start: harvestDate})
            },
            showModal: function() {
                this.$modal.show('calendar');
                // $('#calendar').fullCalendar('rerenderEvents');
                // this.reRenderCalendar()
            },
            destroyCalendar: function() {
                $('#calendar').destroy()
                
            },
            // the on change passes the selected item into function as `val`
            alert: function(index) {
                // console.log(val.label)
                // console.log(this.zipCode)
                // console.log(this.locationInfo)
                console.log({
                    index: index,
                    this: this,
                    // val: val,
                    label: this.veggies[index].varieties
                    // variety: val.lablel,
                });
                this.vegetableArrayIndex = index
                this.currentVarieties = [];
                this.currentVarieties.push(this.veggies[index].varieties);
                // this.displayDate = this.locationInfo.firstFrostDate
            },
            postData: function() {
                $.post(
                    // "http://localhost:8081"
                    "http://localhost:8081/postData", {
                        zipCode: this.zipCode
                    },
                    dataFromServer => {
                        console.log(this.zipCode);
                        console.log(dataFromServer);
                        this.locationInfo = dataFromServer;
                        console.log("this.locationInfo", this.locationInfo);
                        this.setDate(dataFromServer);
                    }
                );
            },
            setDate: function(dateFromDatabase) {
                // make new date object with current date
                let date = new Date();
                let currentYear = date.getFullYear();
                // split string from database into usable parts to build a new date object, need day and month seperated for the first and last frost
                // firstFrost whole date
                let firstFrostDate = dateFromDatabase.firstFrostDate
                    .split("")
                    .slice(0, 5)
                    .join("");
                // first frost month
                let firstFrostMonth = Number(
                    firstFrostDate
                    .split("")
                    .slice(0, 2)
                    .join("") - 1
                );
                // first frost day
                let firstFrostDay = firstFrostDate
                    .split("")
                    .slice(3)
                    .join("");
                // last frost whole date
                let lastFrostDate = dateFromDatabase.lastFrostDate
                    .split("")
                    .slice(0, 5)
                    .join("");
                // last frost month
                let lastFrostMonth = Number(
                    lastFrostDate
                    .split("")
                    .slice(0, 2)
                    .join("") - 1
                );
                // last frost day
                let lastFrostDay = lastFrostDate
                    .split("")
                    .slice(3)
                    .join("");
    
                let firstFrost = new Date();
                firstFrost.setFullYear(currentYear, firstFrostMonth, firstFrostDay);
                let lastFrost = new Date();
                lastFrost.setFullYear(currentYear, lastFrostMonth, lastFrostDay);
    
                // check to see if user is currently able to grow.
                if (date > firstFrost || date < lastFrost) {
                    //  If after first frost, but not in a new year, increase current year by one for next years garden planning.
                    // if before last frost but in new year no changes need to be made.
                    if (date.getMonth() > firstFrost.getMonth()) {
                        console.log("planning for next year");
                        currentYear++
                        firstFrost.setFullYear(currentYear, firstFrostMonth, firstFrostDay);
                        lastFrost.setFullYear(currentYear, lastFrostMonth, lastFrostDay);
                    }
                }
                // set the date on the vm
                this.locationInfo.firstFrostDate = firstFrost;
                this.locationInfo.lastFrostDate = lastFrost;
            },
            checkMaturity: function(dtm) {
                const firstFrostDate = this.locationInfo.firstFrostDate;
                const lastFrostDate = this.locationInfo.lastFrostDate;


                // add the selected vegetables DTM to the current date
                let todaysDate = new Date(lastFrostDate);
                let maturityMath = ''
                maturityMath = todaysDate.setDate(
                    todaysDate.getDate() + dtm
                );
                // turn maturityMath date into formatted string, maturityMath outputs time in mS
                let maturityDate = new Date(maturityMath);
                let isoDate = maturityDate.toISOString().split('').slice(0,10).join('')
                // if the maturity date is before the first frost, the crop can grow
                if (maturityDate <= firstFrostDate) {
                    console.log("You can grow");
                    console.log({
                        maturityDate: maturityDate,
                        firstFrostDate: firstFrostDate
                    });
                    return isoDate
                } else {
                    // if season is too short to grow a crop
                    console.log("season too short");
                }
    
                // console.log({
                //     name: crop.label,
                //     dtm: crop.daysToMaturity,
                //     newDate: maturityDate
                // });
            }
        },
        computed: {
            returnVariety: function() {
                return this.currentVarieties;
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body {
        margin: 0;
        height: 100vh;
    }
    
    #app {
        display: grid;
        grid-template-rows: 8% 1fr;
        grid-template-columns: 15% 1fr;
        grid-template-areas: "logoTitleBar searchBar" "vegetableList varietyList";
        /* grid-auto-rows: minmax(0.33fr, 1fr); */
        /* grid-auto-columns: minmax(100px, 1fr); */
        margin: 0;
        height: 100vh;
    }
    
    #app>div {
        border: 0.5px solid rgba(173, 173, 173, 0.5);
        padding: 5px;
    }
    

    .logoTitleBar {
        grid-area: logoTitleBar;
        display: grid;
        grid-template-columns: 0.33fr 1fr;
        font-family: "BioRhyme", serif;
        justify-items: center;
        align-items: center;
        text-align: center;
        font-size: 1.5rem;
        background-color: rgb(56, 158, 42);
    }

    .logoTitleBar i {
        font-size: 2.5rem;
    }
    
    .searchBar .input-group {
        grid-area: searchBar;
        display: grid;
        grid-template-columns: 1fr;
        position: relative;
        justify-items: left;
        align-items: center;
    }
    
    .searchBar .buttonModal {
        position: relative;
        float: right;
        align-items: center;
        justify-items: right;
    }
    
    .vegetableList {
        grid-area: vegetableList;
        background-color: rgb(45, 45, 45);
        color: whitesmoke;
        font-family: "BioRhyme", serif;
        font-size: 1.5rem;
    }
    
    .varietyList {
        grid-area: varietyList;
        /* width: 100vw; */
        /* box-sizing: content-box;
                            height: 50%;
                            overflow: scroll; */
        overflow: scroll;
        display: grid;
        
    }
    
    .calendarView {
        grid-area: calendarView;
        /* overflow: auto;
                            height: 50%; */
        height: 100%;
        overflow: scroll;
    }
    
    input {
        line-height: normal;
    }
    
    input[type="search"] {
        color: red;
        text-align: left;
        cursor: pointer;
        display: block;
        width: 20%;
        letter-spacing: 4px;
        /* text-shadow: 0 0 2px black; */
        word-spacing: 20px;
    }
    
    .fa-search:before {
        content: "\f002";
    }
    
     :after,
     :before {
        box-sizing: border-box;
    }
    
    .form-control {
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        color: #626c70;
        outline: none;
        padding: 0 12px;
        border-radius: 15px;
        font-size: 0.9rem;
        height: 30px;
        padding-left: 34px;
        width: 300px;
    }
    
    .input-group .fa {
        color: rgba(98, 108, 112, 0.5);
        position: relative;
        top: 0px;
        left: 30px;
        z-index: 11;
    }
    
    .fa {
        font: normal normal normal 14px/1 FontAwesome;
        font-size: inherit;
        text-rendering: auto;
    }
    
    .varieties {
        /* display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "varietyName varietyDescription varietyPhoto";
        height: auto;
        width: auto; */

        justify-items: center; 
        align-items: center; 
        border: 1px solid black;
        border-radius: 10px;
        padding: 5px;
        margin: 5px;
        font-family: "BioRhyme", serif;
    }
    
    .varietyName {
        /* grid-area: varietyName;
        text-align: center;
        align-items: center;
        justify-items: center; */
        margin-left: 5px;
    }
    
    .varietyName a {
        color: red;
    }
    
    .varietyDescription {
        /* grid-area: varietyDescription;
        text-align: center; */
        margin-left: 5px;
    }
    
    img {
        /* grid-area: varietyPhoto; */
        height: 100px;
        width: 100px;
        align-items: center;
            justify-content: center;
            text-align: center;
            float: center;
            margin-top: 5px;
            margin-left: 5px;
            border-radius: 25%;
    } 
    
    span {
        margin:10px;
    }

    ul {
        list-style: none;
    }
</style>
