<?php
include("connect.php");
$entry = 1;
if (isset($_POST['submit'])) {
    $password = sha1($_POST["password"]);
    $username = $_POST["username"];

    $query = "select * from Users where USERNAME='$username' and PASSWORD_HASH='$password'";
    $res = $conn->query($query);
    echo "hi";
    if (mysqli_num_rows($res) > 0) {
        $row = mysqli_fetch_assoc($res);
        $user = $row['USERNAME'];
        $_SESSION["user"] = $user;
        echo "hi";
        echo ("<SCRIPT LANGUAGE='JavaScript'>
                            localStorage.setItem('username', '$username');
                            window.location.href='welcome.php'
							</SCRIPT>");
    } else {
        echo "hi2";
        echo "<script>window.alert('Invlaid Credentials!!')
							  window.location.href='login.php'</script>";
    }
}
