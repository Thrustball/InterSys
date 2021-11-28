<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet">

<div class="row">
    <div class="col-8 text-center">Eisenach, 20.Juli 2021</div>
    <div class="col-4 text-center">{minutes}:{seconds}:{ms}</div>
</div>
<div class="row">
    <div class="col-md-12 text-center">
        <form method="post" action="/submit">
            <label for="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName">
            <br>
            <button type="submit">Submit</button>
        </form>
    </div>
</div>

<script>
let msAbs = 0;  
 
setInterval(() => {msAbs++;},100);

$: ms = msAbs % 10;
$: seconds = Math.floor((msAbs / 10)) % 60;
$: minutes = Math.floor(msAbs / 600);


</script>
