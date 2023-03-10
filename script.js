// Get the file names from the server using AJAX
function getFileNames() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      displayFileNames(this.responseText);
    }
  };
  xhttp.open("GET", "getFiles.php", true);
  xhttp.send();
}

// Display the file names in a list on the webpage
function displayFileNames(fileNames) {
  var fileList = document.getElementById("fileList");
  var files = fileNames.split("\n");
  for (var i = 0; i < files.length; i++) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.setAttribute("href", files[i]);
    a.innerHTML = files[i];
    li.appendChild(a);
    fileList.appendChild(li);
  }
}

// Call the getFileNames function when the webpage loads
window.onload = function() {
  getFileNames();
};
