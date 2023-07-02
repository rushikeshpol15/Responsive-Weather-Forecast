let btn=document.getElementById("btn");
let value="london";

let local=localStorage.getItem("first");
if(!local)
{
    // localStorage.setItem("first");
    getOutput("california");
}
let cityName=document.getElementById("cityName");

cityName.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){getOutput(cityName.value);}
})

btn.addEventListener("click",()=>{

value=cityName.value;
    getOutput(value);

})

async function getOutput(city)
{
    let min_temp=document.getElementById("min_temp");
    let max_temp=document.getElementById("max_temp");
    let Feels=document.getElementById("Feels");
    let cloudy=document.getElementById("cloudy");
    let wind=document.getElementById("wind");
    let humidity=document.getElementById("humidity");
    let location=document.getElementById("location");
    let temperature=document.getElementById("temperature");
    let time=document.getElementById("time");
    let day=document.getElementById("day");
    location.innerHTML= city;
    value=city;
    

let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${value}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '55fac3e189msh827abeb899ddf11p1e5584jsnbf5affb99b35',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
    
// {"cloud_pct": 100, "temp": 21, "feels_like": 22, "humidity": 80, "min_temp": 20, "max_temp": 
// 23, 
// "wind_speed": 4.12, "wind_degrees": 260, "sunrise": 1687923928, "sunset": 1687983700}
const Timeurl =` https://world-time-by-api-ninjas.p.rapidapi.com/v1/worldtime?city=${value}`;
const Timeoptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '55fac3e189msh827abeb899ddf11p1e5584jsnbf5affb99b35',
		'X-RapidAPI-Host': 'world-time-by-api-ninjas.p.rapidapi.com'
	}
};


try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);

    let data=JSON.parse(result); //converting string to object

    min_temp.innerHTML=data.min_temp;
    max_temp.innerHTML=data.max_temp;
    wind.innerHTML=parseFloat((data.wind_speed*3600)/1000).toFixed(2);
    cloudy.innerHTML=data.cloud_pct;
    humidity.innerHTML=data.humidity;
    Feels.innerHTML=data.feels_like;
    temperature.innerHTML=data.temp;
    if(temperature.innerHTML==="undefined"){alert("Please Enter Valid City");}

    document.getElementById("max_temps").innerHTML=data.max_temp;
    document.getElementById("min_temps").innerHTML=data.min_temp;
    document.getElementById("Feelss").innerHTML=data.feels_like;
    document.getElementById("cloudys").innerHTML=data.cloud_pct;
    document.getElementById("winds").innerHTML=parseFloat((data.wind_speed*3600)/1000).toFixed(2);
    document.getElementById("humiditys").innerHTML=data.humidity;
   

    const Timeresponse = await fetch(Timeurl, Timeoptions);

	const Timeresult = await Timeresponse.text();
	console.log(Timeresult);

    let TimeData=JSON.parse(Timeresult);


    let dayImage=document.getElementById("dayImage");
    let cloudImage=document.getElementById("cloudImage");

    if(TimeData.hour>12)
    {
        time.innerHTML=(TimeData.hour-12)+":"+TimeData.minute+" PM";
    }
    else{
        time.innerHTML=TimeData.hour+":" +TimeData.minute+" AM";
    }

    let hourTime=TimeData.hour;
    console.log(hourTime);
    
    if(hourTime>=6 && hourTime<16)
    {
        if(data.cloud_pct===100)
        {
            document.body.style.backgroundImage=" linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('day cloud.jpg')"
            dayImage.src="day cloud with rain.png";
            cloudImage.src="rain cloud.png";
        }
        else if(data.cloud_pct>=90&&data.cloud_pct<=95)
        {
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('day cloud.jpg')"
            dayImage.src="dayCloud.png";
            cloudImage.src="cloudy.png";
        }
        else if(data.temp>=1&&data.temp<=10 || wind>=35)
        {
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('morning.jpg')"
            dayImage.src="day wind cloud.png";
            cloudImage.src="wind cloud.png";

        }
        else if(data.temp<=0)
        {
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('morning.jpg')"
            dayImage.src="snow.png";
            cloudImage.src="snow cloud.png";

        }
        else{
            
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('morning.jpg')"
            dayImage.src="sun.png";
            cloudImage.src="normal cloud.png";
            
        }
    }
    else if(hourTime>=16&&hourTime<19)
    {
        if(data.cloud_pct===100)
        {
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('eveninggg.jpg')"
            // dayImage.src="eveningRain.png";
            dayImage.src="day cloud with rain.png";
            cloudImage.src="rain cloud.png";

        }
        else if(data.cloud_pct>=90&&data.cloud_pct<=95)
        {
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('eveninggg.jpg')"
            // dayImage.src="Evening.png";
            dayImage.src="dayCloud.png";
            cloudImage.src="cloudy.png";

        }
        else if(data.temp>=1&&data.temp<=10 || wind>=35)
        {
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('evening original.jpg')"
            dayImage.src="day wind cloud.png";
            cloudImage.src="wind cloud.png";

        }
        else if(data.temp<=0)
        {
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('evening original.jpg')"
            dayImage.src="snow.png";
            cloudImage.src="snow cloud.png";

        }
        else{
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('evening original.jpg')"
            dayImage.src="sunset.png";
            cloudImage.src="normal cloud.png";

        }
    }
    else 
    {
        if(data.cloud_pct===100)
        {
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('night cloud.jpg')"
            dayImage.src="night cloud rain.png";
            cloudImage.src="rain cloud.png";

        }
        else if(data.cloud_pct>=90&&data.cloud_pct<=95)
        {
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('night cloud.jpg')"
            dayImage.src="nightCLoud.png";
            cloudImage.src="cloudy.png";

        }
        else if(data.temp>=1&&data.temp<=10 || wind>=35)
        {
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('night.jpg')"
            dayImage.src="wind cloud.png";
            cloudImage.src="wind cloud.png";

        }
        else if(data.temp<=0)
        {
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('night.jpg')"
            dayImage.src="snow.png";
            cloudImage.src="snow cloud.png";

        }
        else{
            document.body.style.backgroundImage="linear-gradient(130deg,rgba(15, 14, 14, 0.204) 102%,rgba(235, 228, 228, 0.204)34%),url('night.jpg')"
            dayImage.src="moon.png";
            cloudImage.src="normal cloud.png";
        }
    }

    day.innerHTML=TimeData.day_of_week;
   

} catch (error) {
//    alert("invalid city");
	console.error(error);
    
}

}