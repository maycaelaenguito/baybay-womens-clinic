// Add to Local Storage
const form = document.querySelector('#patientForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#firstName').value;
  const middleName = document.querySelector('#middleName').value;
  const lastName = document.querySelector('#lastName').value;
  const address = document.querySelector('#address').value;
  const mobileNumber = document.querySelector('#mobileNumber').value;
  const birthDate = document.querySelector('#birthDate').value;
  const gender = document.querySelector('#gender input[name="exampleRadios"]:checked').value;
  const medicalHistory = document.querySelectorAll('#medicalHistory input[type="checkbox"]');
  const currentSymptoms = document.querySelector('#currentSymptoms').value;
  const takingMedicationsRadio = document.querySelector('#takingMedications input[name="medication"]:checked').value;
  const takingMedicationsText = document.querySelector('#takingMedications').value;

  let medical = [];

    for (let i = 0; i < medicalHistory.length; i++) {
        if (medicalHistory [i].checked) {
            let history= medicalHistory [i].value;
            medical.push(history);
      }
  }

  // Check if existing data already exists in local storage
  let existingData = JSON.parse(localStorage.getItem('patientData'));

  // If existing data does not exist, initialize an empty array
  if (!existingData) {
    existingData = [];
  }

  // Append the new patient data to the existing data array
  existingData.push({
    firstName,
    middleName,
    lastName,
    address,
    mobileNumber,
    birthDate,
    gender,
    medical,
    currentSymptoms,
    takingMedicationsRadio,
    takingMedicationsText
  });

  // Save the updated data back to local storage
  localStorage.setItem('patientData', JSON.stringify(existingData));

  console.table(existingData);
  alert('You have submitted your form successfully!');
});


// show inbox
function showInbox() {
  document.getElementById("inbox").style.display = "block";
}

function hideInbox() {
  document.getElementById("inbox").style.display = "none";
}