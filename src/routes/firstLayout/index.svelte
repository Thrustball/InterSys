<!-- <style>
    .list-group{
        max-height: 300px;
        max-width: 20%;
        margin-bottom: 10px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
}
</style> -->

<script context="module">
 
    export async function load({ page, fetch, session, stuff }) {
        const url = "/firstLayout/cityList";
        // const res = fetch(url);
        // var ar = await fetch("/firstLayout/cityList").then(x => x.text());
        var response = await fetch(url);
        var b = await response.json(); // .json() is asynchronous and therefore must be awaited
        // console.log(stuff);
        if (response.ok) {
            // console.log("Loading okay " + Object.keys(b).length);
            // var l = Object.keys(b).length;
			return {
				props: {
					cities: b,
                    // lenCities: 2054,
                    // test: "noodle",
                    // article: 123,
				}
			};
            return {};
		}
        return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
    }
    // console.log(article);
</script>

<script>

    // export let test;
    export let cities;
    var lenCities = 2054;

    // console.log(lenCities);
    var cA = convertToArray(cities, lenCities);
    function convertToArray(cA, lC) {
        var citiesArr = [];
        for(var i = 0; i < lC; i++) {
            citiesArr.push(cA[i]);
        }
        return citiesArr;
    }



    let msAbs = 0;     
    setInterval(() => {msAbs++;},100);

    $: ms = msAbs % 10;
    $: seconds = Math.floor((msAbs / 10)) % 60;
    $: minutes = Math.floor(msAbs / 600);

    $: secS = seconds < 10 ? "0" + seconds : seconds;
    $: minS = minutes < 10 ? "0" + minutes : minutes;
    
    function generateDateList() {
        const listDate = [];
        const startDate ='2021-01-01';
        const endDate = '2021-12-31';
        const dateMove = new Date(startDate);
        let strDate = startDate;

        while (strDate < endDate) {
            strDate = dateMove.toISOString().slice(0, 10);
            var strDateAr = strDate.split("-");
            var strDate2 = strDateAr.reverse().join(".");
            listDate.push(strDate2);
            dateMove.setDate(dateMove.getDate() + 1);
        };
        return listDate;
    }   

    var dateList = generateDateList();



    function getTimeList() {
        var timeList = [];
        const startDate ='2021-01-02 01:00';
        const dateMove = new Date(startDate);
        var strDate = "";

        for(var i = 0; i < 144; i++) {
            strDate = dateMove.toISOString().slice(11, 16);
            timeList.push(strDate);
            dateMove.setMinutes(dateMove.getMinutes() + 10);
        }
        return timeList;

    }
    // var timeList = [];
    var timeList = getTimeList();
    var cityClicks = 0;
    var dateClicks = 0;
    var timeClicks = 0;

    var choosenCity = cA[Math.floor(Math.random() * lenCities)];
    var choosenDate = dateList[Math.floor(Math.random() * dateList.length)]
    var choosenTime = timeList[Math.floor(Math.random() * timeList.length)]
    
import { update_await_block_branch } from 'svelte/internal';
    import { count } from '/src/routes/stores/store1.js'
    // count.subscribe((value) => console.log(value));



</script>

<div class="row" style="padding:1%; background-color: #4d94ff;">
    <div class="col-10 text-center container-fluid">
        <div class="col">{choosenCity}</div> 
        <div class="col">{choosenDate} {choosenTime}</div>
    </div>
    <div class="col-2 text-center">{minS}:{secS}:{ms}</div>
</div>

<!-- List of All Cities -->

<div class="row">
    <div class="col-sm-4 text-center">
        <label for="cities">Select a City:</label><br>
        <select name="cities" id="cities" on:click={() => cityClicks++}>
            {#each cA as city}
                <option value={city.toLowerCase()}>{city}</option>
            {/each}
        </select> 
    </div>
<!-- List with Dates -->
    <div class="col-sm-4 text-center">
        <label for="dates">Select a Date:</label><br>
        <select name="dates" id="dates" class="custom-select" on:click={() => dateClicks++}>
            {#each dateList as d}
                <option value={d}>{d}</option>
            {/each}
        </select> 
    </div>

<!-- List with Times -->
    <div class="col-sm-4 text-center">
        <label for="times">Select a Time:</label><br>
        <select name="times" id="times"> on:click={() => timeClicks++}
            {#each timeList as d}
                <option value={d}>{d}</option>
            {/each}
        </select>
    </div>
</div>

<!-- <button on:click={() => {$count += 1;}}>Test: {$count}</button>
<form action="/firstLayout/post" method="get">
    <input type="submit" value="Submit">
</form> -->