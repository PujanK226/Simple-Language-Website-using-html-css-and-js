/*JS for image slider */
var i = 0;
var imageArray = [];


imageArray[0] = '../images/class1.jpg';
imageArray[1] = '../images/class3.jpg';
imageArray[2] = '../images/class2.webp';
imageArray[3] = '../images/services.jpg';

function changeImg() {
    document.imageSlider.src = imageArray[i];
    if (i < imageArray.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', 3000);
}
window.onload = changeImg;

/* local storage  */
function clicksubmit() {

    let fname = document.querySelector('#fname').value;
    let lname = document.querySelector('#lname').value;
    let email = document.querySelector('#email').value;
    let message = document.querySelector('#subject').value;

    if (fname === '' && lname === '' && email === '' && message === '') {
        alert("you cannot leave field blank");


    } else {
        if (localStorage.contact === undefined) {
            localStorage.setItem('contact', JSON.stringify([]))
        }

        let x = document.getElementById('contact-from');
        x.addEventListener('submit', e => {
            e.preventDefault();
            let local = JSON.parse(localStorage.getItem('contact'));
            let fname = document.querySelector('#fname').value;
            let lname = document.querySelector('#lname').value;
            let email = document.querySelector('#email').value;
            let message = document.querySelector('#subject').value;
            let objects = {
                'fname': fname, 'lname': lname, 'email': email, 'message': message
            };
            local.push(objects);
            localStorage.setItem('contact', JSON.stringify(local));
            alert(`Thank you ${fname} ${lname} your message is sent. We will contact you soon 🤴`);
            let mystring = JSON.stringify(local);
            console.log(mystring);


            e.target.reset();
        })
    }


}


const con = document.querySelector('#fatchedData')
fetch('http://localhost:5555/contact')

    .then(response => response.json())
    .then(data => {
        let content = ''
        data.forEach(item => {
            content += `<div class="jsondata">

            
            
        <h4>Name: ${item.fullname}</h4>
        <h4>Email: ${item.email}</h4>
        <h4>Number:${item.number}</h4>
        <h4>Address:${item.address}</h4>
        <h4>Option:${item.select}</h4>
		<h4>Message:${item.message}</h4>
		</div>`

        })
        con.innerHTML = content
    })



document.getElementById("time").innerHTML = Date();


let form_reg = document.querySelector('#registerform');
form_reg.addEventListener('submit', e => {
    e.preventDefault();
    let fullname = document.querySelector('#fullname').value;
    let email = document.querySelector('#email-reg').value;
    let number = document.querySelector('#number').value;
    let address = document.querySelector('#address').value;
    let select = document.querySelector('#select').value;
    let message = document.querySelector('#area-reg').value;
    let contact = {
        fullname: fullname,
        email: email,
        number: number,
        address: address,
        select: select,
        message: message



    };
    /*Axios and Promises    */
    axios.post('http://localhost:5555/contact', contact).then(() => {
        console.log('success')
    }).catch((e) => {
        console.log("there is error" + e);
    })
    e.target.reset();



});

document.getElementById("MyForm").style.display = "none";
function openForm() {
    document.getElementById("MyForm").style.display = "flex";
    document.getElementById("opn-btn").style.display = "none"
}

function closeForm() {

    document.getElementById("MyForm").style.display = "none";
    document.getElementById("opn-btn").style.display = "flex"
}
let pop = document.getElementById('MyForm')
pop.addEventListener('submit', e => {
    e.preventDefault();
    let num = document.getElementById('number-pop').value;
    let n = num.toString().length;
    if (n != 10) {
        document.getElementById('error').innerHTML = "Please check the number format";
    }
    e.target.reset();
})




