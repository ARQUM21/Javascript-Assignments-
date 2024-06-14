var email = document.getElementById("email");
var password = document.getElementById("password");
var user_email = document.getElementById("user_email");
var login_container = document.getElementById("login_container");
var home_container = document.getElementById("home_container");
var note = document.getElementById("note");


function loginUser() {
  if (!email.value || !password.value)
    return alert("Please add email and password.");
  localStorage.setItem("email", email.value);
  checkIsUserLogin();
}


function checkIsUserLogin() {
  var email = localStorage.getItem("email");
  if (email) {
    login_container.style.display = "none";
    home_container.style.display = "block";
    user_email.innerText = email;
    displayUserNotes();
  } else {
    login_container.style.display = "block";
    home_container.style.display = "none";
  }
}

checkIsUserLogin();


function logout() {
  localStorage.removeItem("email");
  checkIsUserLogin();
}


function submitNote() {
  var email = localStorage.getItem("email");
  var timeupdate = new Date().toLocaleString();

  var obj = {
    email: email,
    note: note.value,
    time: timeupdate
  };

  saveValueToLocalStorage(obj);
  note.value = "";
}



function saveValueToLocalStorage(obj) {
  var notes = localStorage.getItem("notes");
  console.log("notes from local storage=>", notes);

  if (notes) {
    notes = JSON.parse(notes);
    notes.push(obj);
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    notes = [obj];
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }

  displayUserNotes();
}


function displayUserNotes() {
    var notes = localStorage.getItem("notes");
    var list = document.getElementById("list");
    var currentUserEmail = localStorage.getItem("email");
    // var timeupdate = new Date().toLocaleString();
   
  

    if (notes) {
      list.innerHTML = "";
      notes = JSON.parse(notes);
      console.log(notes);

      notes.forEach(function (data, ind) {
        console.log("data=>", data);

        // Check if current user is admin
        if (currentUserEmail === "admin@gmail.com") {

          // Display notes from all emails
          var liElement =
          ` <li class="note-box border rounded p-2 my-2" ;>
            <div class="note-content"  >
              <p class = "font-medium">${data.note}</p> 
              <div class="center-email">
                <p>࿐×°----------------------------------°×࿐</p>
                <p>${data.email}</p>
              </div>
            </div>
              <div class="button-group">
                  <p class="note-time">${data.time}</p>
                  <button onclick="editNote(${ind})"  class="btne  btn-edit">Edit</button>
                  <button onclick="deleteNote(${ind})" class="btnd  btn-delete">Delete</button>
              </div>
          </li>`;

          list.innerHTML += liElement;
        } 

        else {
          // Display notes only from current user's email
          if (data.email === currentUserEmail) {
            var liElement =
       ` <li class="note-box border rounded p-2 my-2" ;>
            <div class="note-content"  >
              <p class = "font-medium">${data.note}</p> 
              <div class="center-email">
                <p>࿐×°----------------------------------°×࿐</p>
                <p>${data.email}</p>
              </div>
            </div>
            <div class="button-group">
                <p class="note-time">${data.time}</p>
                <button onclick="editNote(${ind})"  class="btn-edit">Edit</button>
                <button onclick="deleteNote(${ind})" class="btn-delete">Delete</button>
            </div>
        </li>`;

            list.innerHTML += liElement;
          }
        }
      });
    }
  }

displayUserNotes();



function editNote(index) {
  var notes = JSON.parse(localStorage.getItem("notes"));
  var currentNote = notes[index];
  var newNoteText = prompt("Edit note:", currentNote.note);
  
  if (newNoteText !== null) {
    notes[index].note = newNoteText;
    currentNote.time = new Date().toLocaleString(); 
    localStorage.setItem("notes", JSON.stringify(notes));
    displayUserNotes();
  }
}

function deleteNote(index) {
  var notes = JSON.parse(localStorage.getItem("notes"));
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayUserNotes();
}




///Assignment///
//1.Login or home ka page banana he
//2.Login pe email save krwani he local storage mein
//3.checkUserLogin ka function banana he , jo check kre ke email he ya nahn
// agr email ho to usko home ka page show krwaden warna email ka
//4.Phr Notes ki UI banaenge
//5.Submit note ka function banake isko local storage mein save krwaenge
//6.Local storage se value leke display krwaenge.
//7.Logout ka function  bana lena