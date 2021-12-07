<style>
    .list-group{
        max-height: 300px;
        max-width: 20%;
        margin-bottom: 10px;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
}
</style>

<script context="module">

    export async function load({ page, fetch, session, stuff }) {
        const url = "/firstLayout/cityList";
        // const res = fetch(url);
        // var ar = await fetch("/firstLayout/cityList").then(x => x.text());
        var response = await fetch(url);
        var body = await response.text(); // .json() is asynchronous and therefore must be awaited
        // console.log(stuff);
        if (response.ok) {
            console.log("Loading okay");
			return {
				props: {
					article: body
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
    export const article = "";
    let msAbs = 0;  

    setInterval(() => {msAbs++;},100);

    $: ms = msAbs % 10;
    $: seconds = Math.floor((msAbs / 10)) % 60;
    $: minutes = Math.floor(msAbs / 600);

    $: secS = seconds < 10 ? "0" + seconds : seconds;
    $: minS = minutes < 10 ? "0" + minutes : minutes;

</script>

<div class="row" style="padding:1%; background-color: #4d94ff;">
    <div class="col-8 text-center">Eisenach, 20.Juli 2021</div>
    <div class="col-4 text-center">{minS}:{secS}:{ms}</div>
</div>

<div class="row">
    <div class="panel panel-primary" id="result_panel">
        <div class="panel-heading"><h3 class="panel-title">Places</h3>
        </div>
        <div class="panel-body">
            <ul class="list-group">
                <li class="list-group-item"><strong>Signature
                    Accommodations</strong>(1480m)
                </li>
            </ul>
        </div>
    </div>
</div>
