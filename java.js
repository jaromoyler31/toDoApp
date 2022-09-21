//make things Hide
var x = document.querySelector(".hide"); 
x.style.display ="none";


function makeNewList(){ //Main Function for Creating NewList

    var listName = document.querySelector(".input")//git input text and names it ListName
    var newList = listName.value; //New list is holding value of list Name
    var isEmpty = newList.length == 0; //chekcing if empty
    var tittle = document.querySelector(".b_tittle"); // tittle of list
    
    


    if(isEmpty){ //checking if empty
        alert("Need a list Name")
    } else{ //if not do all of this
        listName.value = ""; //sets input to no text
        
        x.style.display = "block"; // makes things visible

        //making new div : )

        const div = document.createElement("div"); //create a div 
        div.classList.add("color", newList) //gives div class of newList and color
        div.addEventListener("click", function(e){ //gives them the function if they are clicked to change background to gray 
            var element = e.target;
            element.style.backgroundColor ="rgb(181, 181, 181)";
            x.style.display = "block";
            tittle.textContent =newList;
            
        })

        document.querySelector(".list_name").prepend(div); //put new div in list_anmes Before any other divs in it
        document.querySelector(".color").style.backgroundColor ="rgb(181, 181, 181)"; // sets background to gray

        if (newList.length>15){ // check to see how long the text is to make sure it not to big
            const textnode = document.createTextNode(newList.slice(0,15)+"...");
            div.appendChild(textnode);

        }
        else{
            const textnode = document.createTextNode(newList);
            div.appendChild(textnode);
        }

        //tittle
        if (newList.length>30){ // check to see how long the text is to make sure it not to big
            tittle.textContent =newList.slice(0,30)+"...";
        } else{
            tittle.textContent =newList;
        }
        
        const div_checkbox =document.createElement("div")
        div_checkbox.classList.add(newList)
        document.querySelector(".check_box").append(div_checkbox)

    }
}
 
function add(){ //Adds new element (Checkbox)
    var input_task = document.querySelector(".task").value;
    var isEmpty = input_task.length == 0; //chekcing if empty
    var task =document.querySelector(".task").value;
    
    var listName = document.querySelector(".input")//git input text and names it ListName
    var newList = listName.value; //New list is holding value of list Name
    

    if (isEmpty){
        alert("Name a Task First")
    }else{

        document.querySelector(".task").value = ""; //sets input box with no text
        const div = document.createElement("div");    //div with each check box and text inside
        div.classList.add("checkpoint", "row" ) //gave the div the name of Checkpoint
        document.querySelector(".check_box").prepend(div); //putting checkpoint in check_box
        var checkBox = document.createElement("input"); //creating varable name checkBox that is a input
        checkBox.type = "checkbox"; //making the input a check box input
        checkBox.classList.add("col-sm") //giving it a class name of col-sm
        document.getElementsByClassName(listName).prepend(checkBox);
        var endup =document.querySelector(".checkpoint")
        endup.textContent = task;
        document.querySelector(".checkpoint").prepend(checkBox)

    }


}

function exitOut(){ //Hides things
    document.querySelector(".color").style.backgroundColor ="rgb(242, 242, 242)";
   
    x.style.display = "none";

    
}

