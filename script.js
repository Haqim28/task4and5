const emailReciver = 'amirul281000@gmail.com'

function submitForm(){
	/* Mengambil data dari form  */
	let name= document.getElementById('input-name').value
	let email= document.getElementById('input-email').value
	let phone= document.getElementById('input-phone').value
	let subject= document.getElementById('choose-subject').value
	let message= document.getElementById('input-message').value

	console.log(name); 
	console.log(email);
	console.log(phone);
	console.log(subject);
	console.log(message);
	
	/* Validasi form*/
	if(name==''){ return alert('Name input fields must be not empty');}
	else if(email==''){ return alert('Email input fields must be not empty');}	
	else if(phone==''){ return alert('Phone input fields must be not empty');}	
	else if(subject==''){ return alert('Subject input fields must be not empty');}
	else if(message==''){ return alert('Message input fields must be not empty');}		

	const a = document.createElement('a');
	
	/* mengirim data  ke software mail  */
	a.href = `mailto:${emailReciver}?subject=${subject}&body= Hello my name ${name},${subject},${message}`;
	a.target= '_blank'
	a.click();	
	
	/* Menyimpan data dalam bentuk object */
	const dataObject = {
		name,
		email,
		phone,
		subject,
		message
	}
	console.log(dataObject);
}