let docApi = `https://dog.ceo/api/breeds/list/all`;

let select = document.getElementById("select");

fetch(docApi)
  .then((res) => res.json())
  .then((data) => {
    let docObjApi = data.message;
    let docApiKeys = Object.keys(docObjApi);
    docApiKeys.map((key) => {
      let opt = document.createElement("option");
      opt.value = key;
      opt.innerText = key;
      select.appendChild(opt);
    });
});

select.addEventListener('change', function (e){
    e.preventDefault()
    let docImg = e.target.value;
    console.log(docImg);
    // docImg.style.textTransform = 'capitalize'
    document.getElementById('img').style.display = 'block'
    let docApiImg = `https://dog.ceo/api/breed/${docImg}/images/random`;
    let addImg = document.getElementById('img')
    fetch(docApiImg)
    .then((ress) => ress.json())
    .then((data) =>{
        addImg.src = data.message
    })
})
