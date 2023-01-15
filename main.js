document.getElementById('uploadfile').onchange = function () {
    let name = this.value.split("fakepath")[1].replace(/\\/g, '');
    console.log(name)
    console.log('Selected file: ' + this.value);
    document.getElementById("filenamecontainer").style.display = "block";
    document.getElementById("filename").innerHTML=`<span >${name} </span><i class="fa fa-trash-o" aria-hidden="true" onclick="deleteFile()"></i> `;
    document.getElementById("form").style.display = "none";

  };
  function deleteFile(){
    console.log("ggg")
    document.getElementById("filenamecontainer").style.display = "none";
    document.getElementById("uploadfile").value = null;
    document.getElementById("form").style.display = "block";
  }
  document.getElementById("filetext").addEventListener("mouseover", function(e) {
    console.log("bbb")
     document.getElementById("uploadfile").classList.add("hovered");
    // if (parent && parent.tagName === "LI" && parent.classList.contains("dropdown-item")) {
    //     const parent = e.target.parentElement;
    //     parent.children[1].classList.add("active");
    // }
});
document.getElementById("filetext").addEventListener('mouseout', () => {
  document.getElementById("uploadfile").classList.remove("hovered");
});
