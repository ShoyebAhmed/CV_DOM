function workplace_info(){
	let x=document.getElementById("workplace");
	if(window.getComputedStyle(x,null).getPropertyValue("display")==="none"){
	x.style.display="block";
	document.getElementById("workplace_2").style.display="block";
}
else{
	x.style.display="none";
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

	let t1=document.getElementById("edu1");
	if(window.getComputedStyle(t1, null).getPropertyValue("display") === 'none'){
		t1.style.display="block";
		document.getElementById("img1").src="collapse.png";
	}
	else{
		t1.style.display="none";
		document.getElementById("img1").src="expand.png";
	}
}

function edu_2_info(){
	let t2=document.getElementById("edu2");
	if(window.getComputedStyle(t2, null).getPropertyValue("display") === 'none'){
          t2.style.display="block";
          document.getElementById("img2").src="collapse.png";
	}
	else{
	t2.style.display="none";
	document.getElementById("img2").src="expand.png";
}
}
function edu_3_info(){
	let t3=document.getElementById("edu3");
	if(window.getComputedStyle(t3, null).getPropertyValue("display") === 'none'){
          t3.style.display="block";
          document.getElementById("img3").src="collapse.png";
	}
	else{
	t3.style.display="none";
	document.getElementById("img3").src="expand.png";
}
}
function tech_skill_info(){
	let t_tech= document.getElementById("tech_skill");
	if(window.getComputedStyle(t_tech,null).getPropertyValue("display")==='none'){
		t_tech.style.display="block";
		document.getElementById("img4").src="collapse.png";
	}
	else{
		t_tech.style.display="none";
		document.getElementById("img4").src="expand.png";
	}
}
function prog_skill_info(){
	let t_prog=document.getElementById("prog_skill");
	if(window.getComputedStyle(t_prog,null).getPropertyValue("display")==="none"){
		t_prog.style.display="block";
		document.getElementById("img5").src="collapse.png";
	}
	else{
		t_prog.style.display="none";
		document.getElementById("img5").src="expand.png";
	}
}
function participate_info(){
	let t_par=document.getElementById("participate");
	if(window.getComputedStyle(t_par,null).getPropertyValue("display")==="none"){
		t_par.style.display="block";
		document.getElementById("img6").src="collapse.png";
	}
	else{
		t_par.style.display="none";
		document.getElementById("img6").src="expand.png";
	}
}
function projects_info(){
	let t_proj= document.getElementById("projects");
	if(window.getComputedStyle(t_proj,null).getPropertyValue("display")==="none"){
		t_proj.style.display="block";
		document.getElementById("img7").src="collapse.png";
	}
	else{
		t_proj.style.display="none";
		document.getElementById("img7").src="expand.png";
	}
}
function gd_hlt(){
  let r=document.getElementById("gd_hlth");
  if(window.getComputedStyle(r,null).getPropertyValue("display")==="none"){
  	r.style.display="block";
  }
  else{
  	r.style.display="none";
  }
}
function uplimage(){
  let r1=document.getElementById("upl");
  if(window.getComputedStyle(r1,null).getPropertyValue("display")==="none"){
  	r1.style.display="block";
  }
  else{
  	r1.style.display="none";
  }
}
function course_reg(){
  let r2=document.getElementById("course");
  if(window.getComputedStyle(r2,null).getPropertyValue("display")==="none"){
  	r2.style.display="block";
  }
  else{
  	r2.style.display="none";
  }
}
function hybrid(){
  let r3=document.getElementById("hyb");
  if(window.getComputedStyle(r3,null).getPropertyValue("display")==="none"){
  	r3.style.display="block";
  }
  else{
  	r3.style.display="none";
  }
}
function research_info(){
	let t_res=document.getElementById("res");
	if(window.getComputedStyle(t_res,null).getPropertyValue("display")==="none"){
		t_res.style.display="block";
		document.getElementById("img8").src="collapse.png";
	}
	else{
		t_res.style.display="none";
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