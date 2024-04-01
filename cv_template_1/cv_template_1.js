let weCounter = 1;
let eduCounter = 1;
let skillscounter = 1;
function addNewSkillsField() {
    skillscounter++;
    const skillsContainer = document.getElementById('skills');
    const newskillsField = document.createElement('div');
    newskillsField.classList.add('skills-container', 'my-2');
    newskillsField.innerHTML = `
    <label for="">Skills</label>
          <div class="skills-container${skillscounter}">
          <input type="text" name="skills" id="skillsField${skillscounter}" placeholder="Enter Your Skills" class="form-control"/>
        </div>
        `;
        skillsContainer.appendChild(newskillsField);
}

function removeSkillsField(){
    const skillsContainer = document.getElementById('skills');
    if (skillscounter > 1) {
        skillsContainer.lastElementChild.remove();
        skillscounter--;
    }
}
function addNewWEField() {
    weCounter++;
    const weContainer = document.getElementById('we');
    const newWEField = document.createElement('div');
    newWEField.classList.add('work-exp-container', 'my-2');
    newWEField.innerHTML = `
        <div class="work-exp-container-company">
            <label for="companyField${weCounter}">Company:</label>
            <input type="text" id="companyField${weCounter}" placeholder="Enter Here" class="form-control companyField">
        </div>
        <div class="work-exp-container-position my-2">
            <label for="positionField${weCounter}">Position:</label>
            <input type="text" id="positionField${weCounter}" placeholder="Enter Here" class="form-control positionField">
        </div>
        <div class="work-exp-container-years my-2">
            <label for="fromField${weCounter}">From:</label>
            <input type="month" id="fromField${weCounter}" placeholder="YYYY-MM" class="form-control fromField">
            <label for="toField${weCounter}" class="mx-2">To:</label>
            <input type="month" id="toField${weCounter}" placeholder="YYYY-MM" class="form-control toField">
        </div>
    `;
    weContainer.appendChild(newWEField);
}

function removeWEField() {
    const weContainer = document.getElementById('we');
    if (weCounter > 1) {
        weContainer.lastElementChild.remove();
        weCounter--;
    }
}

function addNewEducationField() {
    eduCounter++;
    const eduContainer = document.getElementById('edu');
    const newEduField = document.createElement('div');
    newEduField.classList.add('edu-container', 'my-2');
    newEduField.innerHTML = `
        <div class="edu-container-school">
            <label for="schoolField${eduCounter}">School:</label>
            <input type="text" id="schoolField${eduCounter}" placeholder="Enter Here" class="form-control schoolField">
        </div>
        <div class="edu-container my-2">
            <div class="edu-container-school">
                <label for="courseField${eduCounter}">Course:</label>
                <input type="text" id="courseField${eduCounter}" placeholder="Enter Here" class="form-control courseField">
            </div>
            <div class="edu-container-years my-2">
                <label for="fromEduField${eduCounter}">From:</label>
                <input type="month" id="fromEduField${eduCounter}" placeholder="YYYY-MM" class="form-control fromEduField">
                <label for="toEduField${eduCounter}" class="mx-2">To:</label>
                <input type="month" id="toEduField${eduCounter}" placeholder="YYYY-MM" class="form-control toEduField">
            </div>
        </div>
    `;
    eduContainer.appendChild(newEduField);
}

function removeEducationField() {
    const eduContainer = document.getElementById('edu');
    if (eduCounter > 1) {
        eduContainer.lastElementChild.remove();
        eduCounter--;
    }
}



// Function to validate if a given string is a valid email address
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function generateCV() {
    // Check if form fields exist
    let nameField = document.getElementById("nameField");
    let emailField = document.getElementById("emailField");
    let contactField = document.getElementById("contactField");
    let addressField = document.getElementById("addressField");
    let fbField = document.getElementById("fbField");
    let instaField = document.getElementById("instaField");
    let linkedinField = document.getElementById("linkedinField");
    let githubField = document.getElementById("githubField");
    let objectiveField = document.getElementById("objective");

    if (!nameField || !emailField || !contactField || !addressField ||
        !fbField || !instaField || !linkedinField || !githubField ||
        !objectiveField) {
        console.error("One or more form fields are missing.");
        return;
    }

    // Setting Profile Picture
    let file = document.getElementById("profileField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);
     
    // set the image to Template
     reader.onloadend = function () {
         document.getElementById('profileT').src = reader.result;
     };

    // Populate CV template
    
    document.getElementById('headingT').innerHTML = nameField.value;
    document.getElementById("nameT").innerHTML = nameField.value;
    document.getElementById("emailT").innerHTML = emailField.value;
    document.getElementById("contactT").innerHTML = contactField.value;
    document.getElementById("addressT").innerHTML = addressField.value;
    document.getElementById("fbT").href = fbField.value;
    document.getElementById("instaT").href = instaField.value;
    document.getElementById("linkedinT").href = linkedinField.value;
    document.getElementById("githubT").href = githubField.value;
    document.getElementById("objectiveT").innerHTML = objectiveField.value;
    document.getElementById("skillsT").innerHTML =  skillsField.value; 
    // Work Experience
    let weList = document.getElementById("weT");
    weList.innerHTML = ""; // Clear previous entries
    let weContainers = document.querySelectorAll("#we .work-exp-container");
    weContainers.forEach(container => {
        let companyField = container.querySelector(".companyField");
        let positionField = container.querySelector(".positionField");
        let fromField = container.querySelector(".fromField");
        let toField = container.querySelector(".toField");
        if (companyField && positionField && fromField && toField) {
            let company = companyField.value;
            let position = positionField.value;
            let from = fromField.value;
            let to = toField.value;
            let listItem = document.createElement("li");
            listItem.textContent = `${position} at ${company}, ${from} to ${to}`;
            weList.appendChild(listItem);
        }
    });

// Education
let eduList = document.getElementById("eduT");
eduList.innerHTML = ""; // Clear previous entries
let eduContainers = document.querySelectorAll("#edu .edu-container");
eduContainers.forEach(container => {
    let schoolField = container.querySelector(".schoolField");
    let courseField = container.querySelector(".courseField"); 
    let fromEduField = container.querySelector(".fromEduField");
    let toEduField = container.querySelector(".toEduField");
    if (schoolField && courseField && fromEduField && toEduField) {
        let school = schoolField.value;
        let course = courseField.value;
        let from = fromEduField.value;
        let to = toEduField.value;
        let listItem = document.createElement("li");
        listItem.textContent = `${course} at ${school}, ${from} to ${to}`;
        eduList.appendChild(listItem);
    }

});

let skillsList = document.getElementById("skillsT");
    skillsList.innerHTML = ""; // Clear previous entries
    let skillsContainers = document.querySelectorAll("#skills .skills-container");
    skillsContainers.forEach(container => {
        let skillsField = container.querySelector("input[type='text']");
        if (skillsField && skillsField.value.trim() !== "") {
            let skills = skillsField.value;
            let listItem = document.createElement("li");
            listItem.textContent = `${skills}`;
            skillsList.appendChild(listItem);
        }
    });
document.getElementById('cv-form').styledisplay='none'
document.getElementById('cv-template').style.display='block'

}
function printCV() {
    const element = document.getElementById('cv-template');
    const options = {
        margin: 0.5,
        filename: 'cv.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait', compressPDF: true }
    };
    html2pdf().set(options).from(element).toPdf().get('pdf').then(function(pdf) {
        // Save the PDF
        pdf.save();

        // Open print dialog
        setTimeout(function() {
            window.print();
        }, 1000); // Delay to ensure PDF is saved before printing
    });
}

