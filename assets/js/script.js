const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const theme = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click', () => {
   debugger
   sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
   sideMenu.style.display = 'none';
});

theme.addEventListener('click', () => {
   document.body.classList.toggle('dark-theme');
   theme.querySelector('span:nth-child(1)').classList.toggle('active');
   theme.querySelector('span:nth-child(2)').classList.toggle('active');
});

Orders.forEach(order => {
   const tr = document.createElement('tr');
   const trContent = `
         <td>${order.productName}</td>
         <td>${order.productPrice}</td>
         <td>${order.quantity}</td>
         <td>${order.orderDate}</td>
         <td class="${order.orderStatus === 'Declined' ? 'danger' : order.orderStatus === 'Pending' ? 'warning': 'primary'}">${order.orderStatus}</td>
         <td class="primary">Details</td>`

   tr.innerHTML = trContent;
   document.querySelector('table tbody').appendChild(tr);
});