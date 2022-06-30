class Book{
    constructor(name, author, type){
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display{

    add(book){
       let tableBody = document.getElementById('tableBody');
        let uiString = `
        <tr>
            
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>
        
        `
        tableBody.innerHTML += uiString;



    }
    clear(){
       let libraryForm = document.getElementById('libraryForm');
       libraryForm.reset();
    }
    validate(book){
        if (book.name.length < 2 || book.author.length<2)
        {
            return false;
        }else{
            return true;
        }
    }
    show(type, displayMessage){
        let message = document.getElementById('message');
        message.innerHTML = `
        
        
        <div id="message">
        <div class="alert alert-warning alert-${type}dismissible fade show" role="alert">
            <strong>Message: </strong> ${displayMessage}You should check in on some of those fields below.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        
        </div>`
        
        setTimeout(function(){
            message.innerHTML = '';
        },2000);
    }

    
    
}
let libraryForm = document.getElementById('libraryForm');
    libraryForm.addEventListener('submit', libraryFormSubmit);
    
    function libraryFormSubmit(e) {

        let name = document.getElementById('bookName').value;
        let author =document.getElementById('author').value;
        let type;
    
        let fiction =document.getElementById('fiction');
        let programming =document.getElementById('programming');
        let cooking =document.getElementById('cooking');
    
        if(fiction.checked){
            type = fiction.value;
        } else if(programming.checked){
            type = programming.value; 
        }else if(cooking.checked){
            type = cooking.value; 
        }
    
    
        let book = new Book(name, author, type);
        console.log(book);
    
        let display = new Display();
        if(display.validate(book)){
            display.add(book);
            display.clear();
        display.show('success', 'your book has been successfully added');
        
    
        }else {
            display.show('error', 'Sorry your bookcannot be added');
        }
        e.preventDefault();  //The nature of a form is to reload the page after submitting it. this line of code prevents the page from reloading.
    }
