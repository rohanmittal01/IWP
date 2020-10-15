<html>

<head>
  <meta charset="utf-8" />
  <title>Rohan Mittal</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <style>
    .login {
      width: 360px;
      margin: 50px auto;
      font: Cambria, "Hoefler Text", "Liberation Serif", Times,
        "Times New Roman", serif;
      border-radius: 10px;
      border: 2px solid #ccc;
      padding: 10px 40px 25px;
      margin-top: 70px;
    }

    input[type="text"],
    input[type="password"],
    input[type="number"] {
      width: 99%;
      padding: 10px;
      margin-top: 8px;
      border: 1px solid #ccc;
      padding-left: 5px;
      font-size: 16px;
      font-family: Cambria, "Hoefler Text", "Liberation Serif", Times,
        "Times New Roman", serif;
    }

    input[type="submit"] {
      width: 100%;
      background-color: #009;
      color: #fff;
      border: 2px solid #06f;
      padding: 10px;
      font-size: 20px;
      cursor: pointer;
      border-radius: 5px;
      margin-bottom: 15px;
    }
  </style>
</head>

<body>
  <div class="login">
    <h1 style="text-align:center">Login</h1>
    <form action="login-php.php" method="POST" style="text-align:center;">
      <input type="text" placeholder="Username" id="username" name="username"><br /><br />
      <input type="password" placeholder="Password" id="password" name="password"><br /><br />
      <input type="submit" value="Signup" name="submit">
      <div style="text-align: center">
        Not Signed up?
        <a href="signup.php" style="text-decoration: none; background-color: brown; color: white; padding: 5px; border:1px; border-radius: 5px;">Sign Up</a>
      </div>
      <!-- Error Message -->
</body>
</html>