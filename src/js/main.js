// Cache DOM elements
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const theme = document.querySelector(".theme-toggler");
const tableBody = document.querySelector("table tbody");

// Event listeners
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});



theme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  theme.querySelectorAll("span").forEach((span) => {
    span.classList.toggle("active");
  });
});

// Render orders
Orders.forEach((order) => {
  const trEl = document.createElement("tr");
  const tdStatusClassName = `class="${
    order.orderStatus === "Declined"? "danger" : 
    order.orderStatus === "Pending" ? "warning" : "primary"
  }"`;
  const trContent = `
      <td>${order.productName}</td>
      <td>${order.productPrice}</td>
      <td>${order.quantity}</td>
      <td>${order.orderDate}</td>
      <td ${tdStatusClassName}>${order.orderStatus}</td>
      <td class="primary">Details</td>`;

  trEl.innerHTML = trContent;
  tableBody.appendChild(trEl);
});