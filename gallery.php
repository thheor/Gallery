<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
    // echo '<p class="text">new hello from php</p>';

    $dirname = "img/gal/all_photos/";
    $images = glob($dirname."*.png");

    echo '<section class="main">';
    
    echo '<div class="box">
            <div class="album">';
    foreach($images as $image) {
        echo '<img src="'.$image.'" class="img">';
    }
    echo '</div>
        </div>';
    
    echo '<div class="date" id="date">
            <button onclick="displayPhotos(9)">Years</button>
            <button onclick="displayPhotos(8)">Months</button>
            <button onclick="displayPhotos(7)">Days</button>
            <button onclick="displayPhotos(10)">All Photos</button>
        </div>';

    echo '</section>'
    ?>
    <script src="script.js" type="module"></script>
</body>
</html>