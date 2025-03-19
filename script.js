const shelf=document.querySelector(".shelf");
const newbtn=document.querySelector("button");
const dialog=document.querySelector("dialog")

const mylib=[];

function book(name,read,author){
    this.author= author;
    this.Title= name;
    this.read= read;
    this.id= crypto.randomUUID();
    this.showid= function(){
        console.log(this.id);
    };
}

function addtolib(name,read,author){
    const book1= new book(name,read,author);
    mylib.push(book1);
}

addtolib("wolf",true,"harsh");
addtolib("wolf",true,"harsh");

function display(){

    shelf.innerHTML = ""; 

    for (let i = 0; i < mylib.length; i++) {
        const books=document.createElement("tr");
        books.classList.add("book");

        books.innerHTML = `
            <td>${mylib[i].Title}</td>
            <td>Author: ${mylib[i].author}</td>
            <td>Read: ${mylib[i].read ? "Yes" : "No"}</td>
            <td>ID: ${mylib[i].id}</td>
        `;
        shelf.appendChild(books);
    }
}
display();
//new button




newbtn.addEventListener("click", ()=>{

    dialog.showModal()
});

const   confirmBtn=document.querySelector("#submit")
    confirmBtn.addEventListener("click", (event) => {
        event.preventDefault(); 
        const name = document.getElementById("name").value;
        const author = document.getElementById("author").value;
        const read = document.getElementById("read").checked;
        addtolib(name,read,author);
        display();
        dialog.close();
      });