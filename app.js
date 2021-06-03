function workplace_info(){
	let x=document.getElementById("workplace").style.display;
	if(x==="none"){
	document.getElementById("workplace").style.display="block";
	document.getElementById("workplace_2").style.display="block";
}
else{
	document.getElementById("workplace").style.display="none";
	document.getElementById("workplace_2").style.display="none";
}
}

function edu_info(){
	let t=document.getElementById("edu");
	if(t==="none"){
		document.getElementById("edu").style.display="block";
		
	}
}
function edu_1_info() {

	let t1=document.getElementById("edu1").style.display;
	if(t1==="none"){
		document.getElementById("edu1").style.display="block";
		document.getElementById("img1").src="collapse.png";
	}
	else{
		document.getElementById("edu1").style.display="none";
		document.getElementById("img1").src="expand.png";
	}
}
function edu_2_info(){
	let t2=document.getElementById("edu2").style.display;
	if(t2==="none"){
          document.getElementById("edu2").style.display="block";
          document.getElementById("img2").src="collapse.png";
	}
	else{
	document.getElementById("edu2").style.display="none";
	document.getElementById("img2").src="expand.png";
}
}
function edu_3_info(){
	let t3=document.getElementById("edu3").style.display;
	if(t3==="none"){
          document.getElementById("edu3").style.display="block";
          document.getElementById("img3").src="collapse.png";
	}
	else{
	document.getElementById("edu3").style.display="none";
	document.getElementById("img3").src="expand.png";
}
}
function tech_skill_info(){
	if(document.getElementById("tech_skill").style.display==="none"){
		document.getElementById("tech_skill").style.display="block";
		document.getElementById("img4").src="collapse.png";
	}
	else{
		document.getElementById("tech_skill").style.display="none";
		document.getElementById("img4").src="expand.png";
	}
}
function prog_skill_info(){
	if(document.getElementById("prog_skill").style.display==="none"){
		document.getElementById("prog_skill").style.display="block";
		document.getElementById("img5").src="collapse.png";
	}
	else{
		document.getElementById("prog_skill").style.display="none";
		document.getElementById("img5").src="expand.png";
	}
}
function participate_info(){
	if(document.getElementById("participate").style.display==="none"){
		document.getElementById("participate").style.display="block";
		document.getElementById("img6").src="collapse.png";
	}
	else{
		document.getElementById("participate").style.display="none";
		document.getElementById("img6").src="expand.png";
	}
}
function projects_info(){
	if(document.getElementById("projects").style.display==="none"){
		document.getElementById("projects").style.display="block";
		document.getElementById("img7").src="collapse.png";
	}
	else{
		document.getElementById("projects").style.display="none";
		document.getElementById("img7").src="expand.png";
	}
}
function gd_hlt(){
  let r=document.getElementById("gd_hlth").style.display;
  if(r==="none"){
  	document.getElementById("gd_hlth").style.display="block";
  }
  else{
  	document.getElementById("gd_hlth").style.display="none";
  }
}
function uplimage(){
  let r=document.getElementById("upl").style.display;
  if(r==="none"){
  	document.getElementById("upl").style.display="block";
  }
  else{
  	document.getElementById("upl").style.display="none";
  }
}
function course_reg(){
  let r=document.getElementById("course").style.display;
  if(r==="none"){
  	document.getElementById("course").style.display="block";
  }
  else{
  	document.getElementById("course").style.display="none";
  }
}
function hybrid(){
  let r=document.getElementById("hyb").style.display;
  if(r==="none"){
  	document.getElementById("hyb").style.display="block";
  }
  else{
  	document.getElementById("hyb").style.display="none";
  }
}
function research_info(){
	if(document.getElementById("res").style.display==="none"){
		document.getElementById("res").style.display="block";
		document.getElementById("img8").src="collapse.png";
	}
	else{
		document.getElementById("res").style.display="none";
		document.getElementById("img8").src="expand.png";
	}
}
function show_weather(){
let url= 'https://api.openweathermap.org/data/2.5/weather?q=Khulna&appid=b2b674ac7ac03d339ca9db80db6ad763&units=metric';
axios.get(url).then(function(response){
  temp = response.data.main.temp;
        feel = response.data.main.feels_like;
        humidity = response.data.main.humidity;
        wind = response.data.wind.speed;
        pressure= response.data.main.pressure;

        document.getElementById("temp").innerHTML = temp + "°C";
        document.getElementById("feel").innerHTML = feel + "°C";
        document.getElementById("humidity").innerHTML = humidity + "%";
        document.getElementById("wind").innerHTML = temp + "km/h";
        document.getElementById("pressure").innerHTML= (pressure/1000) + " atmosphere";
        document.getElementById("weatherInfo").style.display = "block";

        setTimeout(function() {
            document.getElementById("weatherInfo").style.display = "none";
        }, 5000);

        console.log(response.data);
}).catch(function(error){
  console.log(error);
});
}