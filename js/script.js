/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const studentsPerPage = 9; 
/**
 * `showPage` function - This function will create and insert/append 
 * the elements needed to display a "page" of nine students
 * @param {list, page} 
 */


function showPage(list, page) {
   // calculates the start and end indexes 
   const start = (page * studentsPerPage) - studentsPerPage;
   const end = (page * studentsPerPage);
   const studentList = document.querySelector('.student-list'); 
   studentList.innerHTML = '';
   // creates DOM element to display student info 
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

/**
 * `addPagination` function - This function will create and insert/append the 
 * elements needed for the pagination buttons
 * @param {list}
 */
function addPagination(list) {
   // calculates the number of pages 
   const numOfButtons = Math.ceil(list.length / studentsPerPage);
   const linkList = document.querySelector('.link-list'); 
   linkList.innerHTML = ''; 

   // loops through the number of pages and adds the DOM elements to the page 
   for (let i = 1; i <= numOfButtons; i++) {
      const html = `
      <li>
        <button type="button">${i}</button>
      </li>`; 
      linkList.insertAdjacentHTML("beforeend", html);

   }
   // adds an active class to the first button 
   linkList.querySelector('button').className = 'active';

   linkList.addEventListener('click', (e) => {
      const activeButton = linkList.querySelector('.active');
      const buttonClicked = e.target;
      if (buttonClicked.tagName === 'BUTTON') {
         // updates active button to button that was clicked by event listener
         activeButton.className = ''; 
         buttonClicked.className = 'active'; 
         // updates new page with new students
         showPage(list, buttonClicked.innerHTML);
      } 
   });
   
   /*
   linkList.querySelector("button").classList.add("active");

   linkList.addEventListener('click', (e) => {
      const activeButton = linkList.querySelector(".active");
      const buttonClicked = e.target.closest("button");
      if (activeButton && buttonClicked) {
         activeButton.classList.remove("active");
      }
      if (buttonClicked) {
         buttonClicked.classList.add("active");
         showPage(list, buttonClicked.innerHTML);
       }
   }); 
   */
   
}

// Call functions
addPagination(data);
showPage(data, 1);