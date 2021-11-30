<svelte:head>
    <title>Demographie</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 
</svelte:head>



<main class="w3-display-topmiddle">
<h1 >Demographie</h1>
<p>Angaben sind nur für die Auswertung und notwendig.</p>
<form action="/posttest" method="post" >
    <label for="age">Alter:</label>
    <input type="number" min="0" max="100" required=1 value=18 id="age" name="age"><br>

    Geschlecht:
    <input type="radio" id="male" name="sex" value="male" required=true>
    <label for="male">Männlich</label>
    <input type="radio" id="female" name="sex" value="female" required=true>
    <label for="female">Weiblich</label>
    <input type="radio" id="diverse" name="sex" value="diverse" required=true>
    <label for="diverse">Diverse</label><br>
    <input type="submit" value="Submit">
</form> 
</main>