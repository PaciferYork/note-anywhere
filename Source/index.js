// If user adds a note, add it to the localStorage  
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});

function showNotes(){
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  }
  else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html+= `
    <div id="notes" class="row container-fluid">
      <div class="card mx-4 my-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">${element}</p>
          <button id="${index}"onclick="deleteNote(this.id)" href="#" class="btn btn-outline-danger">Delete this note!</button>
        </div>
      </div>
    </div>  
          `
    
  });


  let notesElm = document.getElementById('notes');
  if (notesObj.length!=0){
    notesElm.innerHTML = html;
  }
  else{
    notesElm.innerHTML=`<b><center>Nothing to show! Please add a note first.</center></b>`
  }
}


function deleteNote(index) {
    // console.log("I am deleting", index);
  
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }
  
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
  }

