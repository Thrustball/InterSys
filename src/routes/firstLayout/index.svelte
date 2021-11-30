<div class="row" style="padding:1%; background-color: #4d94ff;">
    <div class="col-8 text-center">Eisenach, 20.Juli 2021</div>
    <div class="col-4 text-center">{minS}:{secS}:{ms}</div>
</div>

<div class="row">
</div>

<script>
    let msAbs = 0;  

    setInterval(() => {msAbs++;},100);

    $: ms = msAbs % 10;
    $: seconds = Math.floor((msAbs / 10)) % 60;
    $: minutes = Math.floor(msAbs / 600);

    $: secS = seconds < 10 ? "0" + seconds : seconds;
    $: minS = minutes < 10 ? "0" + minutes : minutes;

</script>