
let projects= [] 


function addproject(){
	let projectname = document.getElementById('input-project-name').value;
	let startdate = document.getElementById('input-start-date').value;
	let enddate = document.getElementById('input-end-date').value;
		
	const date1 = new Date(startdate);
	const date2 = new Date(enddate);

	const time = Math.abs(date2 - date1);
	let days = Math.ceil(time / (1000 * 60 * 60 *24) );
	console.log(days);
	let bulan = 0;
	if(days<30){
		days=days;
	}else 
	{	do{
			bulan++;
			days-=30;	
		}while(days>=30);
	}
		
	console.log(days);
	let techno = document.querySelectorAll('.technologi');
	console.log(techno);
	
	let description = document.getElementById('input-description').value;

	
	
	
	let image = document.getElementById('upload-project-img').files[0];

	image = URL.createObjectURL(image)
	
	console.log(projectname);
	console.log(startdate);
	console.log(days);
	let project={
		projectname: projectname,
		startdate: startdate,
		enddate: enddate,
		description:description,
		image: image,
		days:days,
		bulan:bulan,
		
	}
	projects.push(project)
	
	renderProject()
}

	
function renderProject(){
	let projectWrapper = document.getElementById('contents');
	
	projectWrapper.innerHTML = ''

	for(let i=0; i<projects.length; i++){
		projectWrapper.innerHTML += ` 
		<div class= "project-list-item">
			<div class="project-image">
				<img src="${projects[i].image}" alt=""/>
			</div>
			<div class="project-content">
				<div class="name-project">
					<h1>${projects[i].projectname}</h1>
				</div>
				<div class="duration">
					durasi  ${projects[i].bulan}Bulan  ${projects[i].days} hari
				</div>
				<div class="description">
					<p>${projects[i].description}</p>
				</div>
				<div class="techno">

				</div>
				<div class="group-button">
					<button class="btn-edit"> Edit </button>
					<button class="btn-delete">Delete</button>
				</div>
			</div>
		</div>`
	}	



}





function displaytechno(){
	let cektechno= document.forms["project"].elements["technologi"];
	let isitechno="";
	for (i=0; i<cektechno.length;i++){
		if(cektechno[i].checked==true){
			isitechno += cektechno[i].value+"<br>"
		}
	}

}