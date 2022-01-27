let container = document.querySelector(".container");
function loadData() {
  const response = fetch("data.json");
  response.then(function (res) {
    res.json().then(function (data) {
      // data=data?.reverse() ||[];
      setTimeout(() => {
        renderDataOnPage(data);
      }, 2000);
    });
  });
}
loadData();
let df = document.createDocumentFragment();
function renderDataOnPage(data = []) {
  data.forEach((data) => {
    let item = document.createElement("div");
    item.classList.add("item");
    let infoStr = " ";
    data.info.forEach(function (info) {
      infoStr += `<li>${info}</li>`;
    });
    str = `       
                <div class="title">
                    <h2>${data.title}</h2>
                </div>
                <div class="timeline"> 
                    <ul>
                        ${infoStr}
                    </ul>
                </div>                
                <div class="btn">
                 <button>Source Code</button>
                </div>
                <div class="video">
                    <iframe src="${data.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>       
             `;
    item.insertAdjacentHTML("beforeend", str);
    item.querySelector("button").disabled = !data.sc;
    df.append(item);
  });
  container.append(df);
  document.querySelector(".loading").style.display = "none";
  container.style.opacity = 1;
}

// window.addEventListener("resize",function(){
//     container.style.opacity=0;
//     setTimeout(() => {
//         container.style.opacity=1;
//     }, 100);
// });
// document.querySelector("#btnMode").addEventListener("click",function(){
//     container.style.background="black";
//     container.style.color="#fff";
//     container.querySelector(".item").style.background="black";
//     container.querySelector(".item").style.border="1px solid #fff";
//     container.querySelector("h2").style.background="black";

// });
