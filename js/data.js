

/* ------------------------------------JSON------------------------------------- */
  


async function getJson() {
    const request = new Request('json/data.json');
    const response = await fetch('json/data.json');
    const cvSection = await response.json();

    console.log(cvSection);
    return cvSection;
}


const addToCv = (cvSection) => {
    // EMPLOYMENT
    let employmentsHTML = '';
    cvSection.employments.forEach(element => {
        let listItem = `
        <li>
        <strong>${element.workplace}: </strong>
        <br>${element.time}
        </li>`;

        employmentsHTML += listItem
        console.log(cvSection.employments);
    });
    document.querySelector('.emp-list').innerHTML = employmentsHTML

    //CERTIFICATIONS
    let certificationsHTML = '';
    cvSection.certifications.forEach(element => {
        let listItem = `
        <li>${element.cert}: 
        <br>${element.time}
        </li>`;

        certificationsHTML += listItem;
        console.log(cvSection.certifications);
    })
    document.querySelector('.certs-list').innerHTML = certificationsHTML

    //EDUCATION
    let educationHTML = '';
    cvSection.education.forEach(element => {
        let listItem = `
        <li><strong>${element.school}: </strong><br>${element.time}</li>`;

        educationHTML += listItem;
        console.log(cvSection.education);
    })
    document.querySelector('.edu-list').innerHTML = educationHTML

    //PROGRAMMING LANGUAGES
    let programmingHTML = '';
    cvSection.programming.forEach(element => {
        let listItem = `
        <li>${element.prLanguage}</li>`;

        programmingHTML += listItem;
        console.log(cvSection.programming);
    })
    document.querySelector('.lang1-list').innerHTML = programmingHTML

    //SPEAKING LANGUAGES
    let speakHTML = '';
    cvSection.speak.forEach(element => {
        let listItem = `
        <li>${element.spLanguage}</li>`;

        speakHTML += listItem;
        console.log(cvSection.speak);
    })
    document.querySelector('.lang2-list').innerHTML = speakHTML

    //SKILLS
    let skillsHTML = '';
    cvSection.skills.forEach(element => {
        let listItem = `
        <li>${element.skill}</li>`;

        skillsHTML += listItem;
        console.log(cvSection.skills);
    })
    document.querySelector('.skill-list').innerHTML = skillsHTML


}

const cvSection = await getJson();
addToCv(cvSection);














/* let url = 'data.json';

const employments = document.querySelector(".employment-list");
const certifications = document.querySelector(".certs-list");

async function getJson() {
    let response = await fetch(url);
    console.log(response);

    if (response.ok) {
        let data = await response.json();
        console.log(data);

        for (let i = 0; i < data.employments.length; i++) {
            console.log("hello");
            let listItem = document.createElement('li');
            let para = document.createElement('p');
            listItem.innerHTML = data.employments[i].workplace + ': ' + data.employments[i].time;
            
            console.log(listItem);
            employments.appendChild(listItem);

        }

    }
}


getJson();


async function getJsonAgain() {
    let response = await fetch(url);
    console.log(response);

    if (response.ok) {
        let data = await response.json();
        console.log(data);


        for (let i = 0; i < data.certifications.length; i++) {
            console.log("hello");
            let listItem = document.createElement('li');
            let breakLine = document.createElement('br');
            listItem.innerHTML = data.certifications[i].cert + ': ' + breakLine + data.certifications[i].time;
            console.log(listItem);
            certifications.appendChild(listItem);
        }


    } else {
        console.log('HTTP-Error: ' + response.status);
    }
}


getJsonAgain(); */