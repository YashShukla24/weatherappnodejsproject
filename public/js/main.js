const  submitBtn = document.getElementById('submitBtn');
const cityname=document.getElementById('cityname');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const getInfo = async(event) =>{
    event.preventDefault();
    // alert("hi");
    let cityVal=cityname.value;

    // alert(cityVal);

//   let url = `http://api.openweathermap.org/data/2.5/weather?q=dewas&appid=0c8879872c2b309ac183e3fd61ec3dae`;
  if(cityVal == ""){
    city_name.innerText=`plz write the name before search`;
    datahide.classList.add('data_hide');
  }else{
    try{
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0c8879872c2b309ac183e3fd61ec3dae`;
 const response =await fetch(url);
 const data = await response.json();

const arrData =[data];
// alert(arrData[0].weather[0].main);
city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
temp_real_val.innerText = arrData[0].main.temp;
// temp_status.innerText = arrData[0].weather[0].main;
const weathercon = arrData[0].weather[0].main
if (weathercon == "Clear") {
  temp_status.innerHTML =
    " <i class='fas fa-sun' style='color: rgb(255, 255, 0)''></i>";
} else if (weathercon == "Rain") {
  temp_status.innerHTML =
    "<i class='fas fa-cloud-rain'style='color:blue'></i>";
} else if (weathercon == "Clouds") {
  temp_status.innerHTML =
    "<i class='fas fa-cloud' style='color:white'></i>";
} else {
  temp_status.innerHTML =
    "<i class='fas fa-sun' style='color: rgb(255, 255, 0)''></i>";
}
datahide.classList.remove('data_hide');

    }
  catch{
    city_name.innerText=`plz enter the city name properly`;
    datahide.classList.add('data_hide');
  }
}
}
submitBtn.addEventListener('click',getInfo);