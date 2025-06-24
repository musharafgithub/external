<?php
echo "<br>Your name is: " . $_POST["name"] . "<br>";
echo "Your password is: " . $_POST["password"] . "<br>";
echo "Your email is: " . $_POST["email"] . "<br>";
echo "Your gender is: " . $_POST["gender"] . "<br>";

echo "<br>Your known languages are:<br>";
if (!empty($_POST["Languages"])) {
    foreach ($_POST["Languages"] as $language) {
        echo $language . "<br>";
    }
} else {
    echo "None";
}
?>
