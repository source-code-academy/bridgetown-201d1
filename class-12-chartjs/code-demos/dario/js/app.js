"use strict";
const canvas = document.getElementById("theCanvas");
const ctx = canvas.getContext("2d");

const chart = {
  type: "bar",
  // label: "# of likes",
  data: {
    labels: ["cow", "dog", "pig", "cat", "giraffe"],
    datasets: [
      {
        label: "# of likes",
        data: [5, 2, 7, 4, 5],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1
      }
    ]
  }
};

new Chart(ctx, chart);
