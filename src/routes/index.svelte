<svelte:head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</svelte:head>
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" rel="stylesheet"> -->


<div class="row">
    <div class="col-md-12 text-center">
        <form method="post" action="/submit">
            <div class="form-group text-left">
                <label for="firstName">First Name:</label><br>
                <input type="text" name="firstName" id="firstName"><br>

            </div>
            <div class="form-group">
                <label for="Age">Alter:</label><br>
                <input type="number" name="age" id="age"><br>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</div>

