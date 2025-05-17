const dataSets = {
  sales: [
    { label: "Jan", value: 120 },
    { label: "Feb", value: 150 },
    { label: "Mar", value: 180 },
    { label: "Apr", value: 90 },
    { label: "May", value: 200 },
    { label: "Jun", value: 160 },
    { label: "Jul", value: 130 },
  ],
  visits: [
    { label: "Jan", value: 300 },
    { label: "Feb", value: 400 },
    { label: "Mar", value: 350 },
    { label: "Apr", value: 500 },
    { label: "May", value: 600 },
    { label: "Jun", value: 450 },
    { label: "Jul", value: 700 },
  ],
  expenses: [
    { label: "Jan", value: 80 },
    { label: "Feb", value: 70 },
    { label: "Mar", value: 90 },
    { label: "Apr", value: 60 },
    { label: "May", value: 100 },
    { label: "Jun", value: 85 },
    { label: "Jul", value: 75 },
  ],
};

const chart = document.getElementById("barChart");
const buttons = document.querySelectorAll(".controls button");

let currentDataSet = "sales";

function renderChart(data) {
  chart.innerHTML = "";
  const maxValue = Math.max(...data.map(d => d.value));
  
  data.forEach(({ label, value }) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = "0px";
    bar.title = `${label}: ${value}`;

    const valueLabel = document.createElement("div");
    valueLabel.classList.add("bar-value");
    valueLabel.textContent = value;

    const labelDiv = document.createElement("div");
    labelDiv.classList.add("bar-label");
    labelDiv.textContent = label;

    bar.appendChild(valueLabel);
    bar.appendChild(labelDiv);
    chart.appendChild(bar);

    // Animate bar growing
    setTimeout(() => {
      bar.style.height = `${(value / maxValue) * 100}%`;
    }, 100);
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.set === currentDataSet) return;

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentDataSet = btn.dataset.set;
    renderChart(dataSets[currentDataSet]);
  });
});

// Initial render
renderChart(dataSets[currentDataSet]);
