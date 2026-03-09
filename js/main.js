// Load header
// fetch("header.html")
//   .then(r => r.text())
//   .then(html => {
//     document.getElementById("site-header").innerHTML = html;

//     // Menu toggle AFTER header loads
//     document.getElementById("menuBtn").addEventListener("click", () => {
//       document.getElementById("navMenu").classList.toggle("show");
//     });
//   });

// Load footer
fetch("footer.html")
  .then(r => r.text())
  .then(html => {
    document.getElementById("site-footer").innerHTML = html;
  });
