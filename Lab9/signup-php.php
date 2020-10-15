<?php
include("connect.php");
$entry = 1;
if (isset($_POST['submit'])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $password_hash = sha1($_POST["password"]);
    $phone = $_POST["phone"];
    $check = "select * from Users WHERE USERNAME='$username'";
    $res = $conn->query($check);

    $row = mysqli_fetch_row($res);
    if (mysqli_num_rows($res) > 0) {
        $entry = 0;
        echo ("<SCRIPT LANGUAGE='JavaScript'>
							window.alert('User Already Exists! Please Login')
							window.location.href='login.php'
							</SCRIPT>");
    }

    if (strlen($password) < 8) {
        $entry = 0;
        echo ("<script>window.alert('Password must be Atleast 8 characters!!')
							  window.location.href='signup.php'</script>");
    }

    if ($entry == 1) {
        $sql = "insert into Users(USERNAME, PASSWORD_HASH, PHONE) values ('$username','$password_hash','$phone')";
        if (mysqli_query($conn, $sql)) {
            $_SESSION["username"] = $username;
            echo "<script>window.alert('Record created successfully')
						window.location.href='login.php'</script>";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    }
}
