function checkinfo() {
  const Username = document.getElementById("username").value;
  const paragraph = document.querySelector("p");
  const Password = document.getElementById("password").value;
  if (Username === "Harrrobe" && Password === "Food") {
    paragraph.innerHTML = "Login Success! Redirecting...";
   location.href = "C:UsersadminOneDriveDesktopNew folderhtml2.html";
  } else if (Username === "Harrrobe") {
    paragraph.innerHTML = "Wrong Password";
  } else {
    paragraph.innerHTML = "Wrong Password/Username";
  }
}
