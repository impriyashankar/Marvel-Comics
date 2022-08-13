var config = {
  API_KEY: '6fa97fe0778b03c39def870aebc37146'
}

const API_KEY = config.API_KEY;

const url = 'https://gateway.marvel.com/v1/public/comics';

let ts = 1;
let prvKey = '972fe24abd03a89c43ec5df3bf6fbb38e02520af';

let apiHash = CryptoJS.MD5(ts+prvKey+API_KEY).toString();
const list = document.querySelector('#comicsList');
const searchForm = document.querySelector('#searchForm');


// document.addEventListener('DOMContentLoaded',(event) => {
//   console.log("hello");
//   fetch(`${url}?ts=1&apikey=${API_KEY}&hash=${apiHash}`)
//   .then(response => response.json())
//   .then(res => {
//     res.data.results.forEach((item) => {
//       console.log(item);
//       let imgSrc = `${item.thumbnail.path}.jpg`;
//       //console.log(imgSrc);
//       list.insertAdjacentHTML("beforeend",`<li><h3>${item.title}</h3><img src="${imgSrc}"/></li>`);




//   })
// });


// });

searchForm.addEventListener('submit',(event) => {
  const searchValue = document.querySelector('#inputVal').value;

  event.preventDefault();

  console.log(searchValue);
  //alert(searchValue);
  fetch(`${url}?ts=1&apikey=${API_KEY}&hash=${apiHash}`)
  .then(response => response.json())
  .then(res => {
    res.data.results.forEach((item) => {
      console.log(item);
      let imgSrc = `${item.thumbnail.path}.jpg`;
      //console.log(imgSrc);
      if(item.title.toLowerCase().includes(searchValue)) {
        list.insertAdjacentHTML("beforeend",`<li><h3>${item.title}</h3><img src="${imgSrc}"/></li>`);
      }





  })

  document.querySelector('#inputVal').value ='';
});



});
