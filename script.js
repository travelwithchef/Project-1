document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("clickMe");
  const output = document.getElementById("output");

  btn.addEventListener("click", function () {
    output.textContent = "You clicked the button!";
  });
});
