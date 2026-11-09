let bloodPressureChart = null;

function renderBloodPressureChart(history) {

    const canvas = document.getElementById("blood-pressure-chart");

    if (!canvas || typeof Chart === "undefined") {
        console.error("Chart.js not loaded.");
        return;
    }

    // Sort history chronologically
    const sortedHistory = [...history].sort((a, b) => {
        return new Date(`${a.month} 1, ${a.year}`) -
               new Date(`${b.month} 1, ${b.year}`);
    });

    // Get latest 6 records
    const recentHistory = sortedHistory.slice(-6);

    const labels = recentHistory.map(item =>
        `${item.month.substring(0, 3)}, ${item.year}`
    );

    const systolic = recentHistory.map(item =>
        item.blood_pressure.systolic.value
    );

    const diastolic = recentHistory.map(item =>
        item.blood_pressure.diastolic.value
    );

    if (bloodPressureChart) {
        bloodPressureChart.destroy();
    }

    bloodPressureChart = new Chart(canvas, {

        type: "line",

        data: {
            labels: labels,

            datasets: [

                {
                    label: "Systolic",
                    data: systolic,

                    borderColor: "#E66A9B",
                    backgroundColor: "#E66A9B",

                    borderWidth: 3,
                    pointRadius: 5,
                    pointHoverRadius: 7,

                    tension: 0.4
                },

                {
                    label: "Diastolic",
                    data: diastolic,

                    borderColor: "#8064C8",
                    backgroundColor: "#8064C8",

                    borderWidth: 3,
                    pointRadius: 5,
                    pointHoverRadius: 7,

                    tension: 0.4
                }

            ]
        },

        options: {

            responsive: true,
            maintainAspectRatio: false,

            interaction: {
                intersect: false,
                mode: "index"
            },

            plugins: {

                legend: {
                    display: false
                },

                tooltip: {
                    enabled: true
                }

            },

            scales: {

                x: {
                    grid: {
                        display: false
                    }
                },

                y: {
                    min: 60,
                    max: 180,

                    ticks: {
                        stepSize: 20
                    },

                    grid: {
                        color: "#e5e0ef"
                    }
                }

            }

        }

    });

}