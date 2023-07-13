const wrapperAlbum = document.querySelector(".album");
const album = wrapperAlbum.getElementsByClassName("album-images");

for (var albI = 0; albI < album.length; albI++){
  const albImg = document.createElement("img");
  const albTitle = document.createElement("marquee");
  albTitle.classList.add("album-title");
  $(albTitle).attr("scrollamount","3");
  albImg.classList.add("album-image");
  albImg.src = $(album[albI]).attr("data-albm-img");
  var content = $(album[albI]).attr("data-albm-title");
  albTitle.innerText = content;
  $(album[albI]).append(albImg);
  $(album[albI]).append(albTitle);
  console.log("Index of album: " + albI);
  
  album[albI].addEventListener("click", function (){
    $("._album-ui").addClass("active");
    const showTitle = $(this).attr("data-albm-title"),
      showDesc = $(this).attr("data-albm-desc"),
      showImg = $(this).attr("data-albm-img");
      
    console.log(showTitle, showImg, showDesc)
      
    // Memunculkan nilai atribut pada saat di klik
    document.querySelector("._album-ui ._title").innerText = showTitle;
    document.querySelector("._album-ui ._img img").src = showImg;
    document.querySelector("._album-ui ._description p").innerText = showDesc;
  });
}

function closeInfo(){
  $("._album-ui").removeClass("active");
}