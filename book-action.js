


const bookhead=document.querySelector("#book-head a");
// console.log(bookhead);
bookhead.addEventListener("click",function(ev){
    ev.preventDefault();
    console.log("Does not show",ev.target.textContent);
}); 



//delete books
var bookbody=document.querySelector("#parent #book-body");

bookbody.addEventListener("click",function(e){
    if(e.target.className=="delete")
    {
        const li=e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});



var getform=document.forms["add-book"];
var bookabc=document.querySelector("#book-list #lk");
getform.addEventListener("submit",function(ev)
{
    ev.preventDefault();
    var value=document.querySelector('input[type="text"]').value;
    
    
    if(value=="")
        alert("Enter Book name");
    else{

    
    var li=document.createElement("li");
    var bookName=document.createElement("span");
    var deleteBtn=document.createElement("span");


    li.classList.add("book-name")
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    //add value in bookname and add delete button
    bookName.textContent=value;
    deleteBtn.textContent="delete";  

    //bookname and deletebtn is add using appendChild() method
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    bookabc.appendChild(li);
    
    }    
    document.querySelector('input[type="text"]').value="";

});



var hideBook=document.querySelector("#check");
hideBook.addEventListener("change",function(){

    if(hideBook.checked)
    {
        bookabc.style.display="none";
    }
    else
    {
        bookabc.style.display="initial";
    }

});




//creating search filter

var searchBook=document.forms["add-book"].querySelector("#search");

searchBook.addEventListener("keyup",function(){

    
    var valueSearch=searchBook.value.toLowerCase();
    // console.log(valueSearch);
    var li=document.getElementsByTagName('li');
    Array.from(li).forEach(function(b){

        const val2=b.firstElementChild.textContent;
        if(val2.toLowerCase().indexOf(valueSearch)!=-1)
        {
            b.style.display="block";
        }
        else
        {
            b.style.display="none";
        }
    });
});


