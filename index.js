const inputfields=document.querySelectorAll("input");
const btn=document.querySelectorAll("button");

const data=[];
btn[1].onclick=()=>{
	let name=inputfields[0].value;
	let email=inputfields[1].value;
	let phone=inputfields[2].value;
	data.push({name, email, phone});
	console.log(data);
}

