document.addEventListener("DOMContentLoaded", () => {
    initialiseDashboard();
});


async function initialiseDashboard() {

    try {

        const patients = await fetchPatients();

        // Select Jessica Taylor only
        const jessica = patients.find(patient =>
            patient.name === "Jessica Taylor"
        );

        if (!jessica) {
            throw new Error("Jessica Taylor not found!");
        }

        console.log("Jessica Taylor:", jessica);

        displayPatient(jessica);

    } catch (error) {

        console.error(error);

        alert("Unable to load patient data. Check the console.");

    }

}


// DISPLAY PATIENT INFORMATION
function displayPatient(patient) {

    // Patient profile
    document.getElementById("patient-list").innerHTML = `
        <div class="patient-item">
            <img src="${patient.profile_picture}" alt="Jessica Taylor">

            <div>
                <strong>${patient.name}</strong>
                <small>${patient.gender}, ${patient.age}</small>
            </div>
        </div>
    `;


    // Profile information
    document.getElementById("patient-photo").src =
        patient.profile_picture;

    document.getElementById("patient-name").textContent =
        patient.name;

    document.getElementById("patient-dob").textContent =
        formatDate(patient.date_of_birth);

    document.getElementById("patient-gender").textContent =
        patient.gender;

    document.getElementById("patient-phone").textContent =
        patient.phone_number;

    document.getElementById("patient-emergency").textContent =
        patient.emergency_contact;

    document.getElementById("patient-insurance").textContent =
        patient.insurance_type;


    // Latest diagnosis history
    const history = patient.diagnosis_history;

    const latest = history[history.length - 1];


    // Blood pressure
    document.getElementById("systolic-value").textContent =
        latest.blood_pressure.systolic.value;

    document.getElementById("systolic-level").textContent =
        latest.blood_pressure.systolic.levels;

    document.getElementById("diastolic-value").textContent =
        latest.blood_pressure.diastolic.value;

    document.getElementById("diastolic-level").textContent =
        latest.blood_pressure.diastolic.levels;


    // Respiratory rate
    document.getElementById("respiratory-value").textContent =
        latest.respiratory_rate.value;

    document.getElementById("respiratory-level").textContent =
        latest.respiratory_rate.levels;


    // Temperature
    document.getElementById("temperature-value").textContent =
        latest.temperature.value;

    document.getElementById("temperature-level").textContent =
        latest.temperature.levels;


    // Heart rate
    document.getElementById("heart-value").textContent =
        latest.heart_rate.value;

    document.getElementById("heart-level").textContent =
        latest.heart_rate.levels;


    // Diagnostic list
    displayDiagnostics(patient.diagnostic_list);


    // Lab results
    displayLabResults(patient.lab_results);


    // Blood pressure chart
    renderBloodPressureChart(history);

}


// DIAGNOSTIC LIST
function displayDiagnostics(diagnostics) {

    const tbody = document.getElementById("diagnostic-rows");

    tbody.innerHTML = "";

    diagnostics.forEach(item => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${item.status}</td>
        `;

        tbody.appendChild(row);

    });

}


// LAB RESULTS
function displayLabResults(results) {

    const list = document.getElementById("lab-results");

    list.innerHTML = "";

    results.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${typeof item === "string" ? item : item.name}</span>
            <span>⇩</span>
        `;

        list.appendChild(li);

    });

}


// DATE FORMAT
function formatDate(dateString) {

    if (!dateString) return "N/A";

    const date = new Date(dateString);

    if (isNaN(date.getTime())) return "N/A";

    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC"
    });
}