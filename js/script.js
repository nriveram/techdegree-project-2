/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
   const itemsPerPage = 9; 
   const start = (page * itemsPerPage) - itemsPerPage;
   const end = (page * itemsPerPage);
   const studentList = document.querySelector('.student-list'); 
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= start && i < end) {
         const html = `<li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">Joined ${list[i].registered.date}</span>
         </div>
       </li>`; 
       studentList.insertAdjacentHTML("beforeend", html);
      }

   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const studentsPerPage = 9;
   const numOfButtons = Math.ceil(list.length / studentsPerPage);
   const ul = document.querySelector('.link-list'); 
   ul.innerHTML = ''; 

   for (let i = 1; i <= numOfButtons; i++) {
      const html = `
      <li>
        <button type="button">${i}</button>
      </li>`; 
      ul.insertAdjacentHTML("beforeend", html);

   }

   /*
   let activeButton = ul.querySelector('button')
   activeButton.className = 'active';

   ul.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         activeButton.className = ''; 
         e.target.className = 'active'; 
         activeButton = e.target;
         showPage(list, activeButton.innerHTML);
      }
   });
   */
   
   ul.querySelector("button").classList.add("active");

   ul.addEventListener('click', (e) => {
      const activeButton = ul.querySelector(".active");
      const buttonClicked = e.target.closest("button");
      if (activeButton && buttonClicked) {
         activeButton.classList.remove("active");
      }
      if (buttonClicked) {
         buttonClicked.classList.add("active");
         showPage(list, buttonClicked.innerHTML);
       }


   }); 
   
}


// Call functions
addPagination(data);
showPage(data, 1);