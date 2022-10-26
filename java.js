//make things Hide
var x = document.querySelector(".hide"); 
let infoholder = document.querySelector(".print-out")
let allHide = document.querySelector(".all_hide")
// allHide.style.display = "none"
x.style.display ="none";
var num_Array;
var listData =[];
let y = 0 ;


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
        const del_icon = document.createElement("a");
        const div = document.createElement("div"); //create a div 
        listData.unshift(newList);
        
        div.classList.add("color", newList) //gives div class of newList and color
        const inside_div = document.createElement("div"); //create a div 

        inside_div.classList.add("list_text")





        document.querySelector(".list_name").prepend(div); //put new div in list_anmes Before any other divs in it
        



        if (newList.length>15){ // check to see how long the text is to make sure it not to big
            document.querySelector(".color").prepend(inside_div);
            const textnode = document.createTextNode(newList.slice(0,12)+"...");
            inside_div.appendChild(textnode);
            del_icon.innerHTML = "<i class='fa-solid fa-trash col-sm delete1 hide'></i>"
            document.querySelector(".color").append(del_icon);
            

        }
        else{
            document.querySelector(".color").prepend(inside_div);
            const textnode = document.createTextNode(newList);
            inside_div.appendChild(textnode);
            del_icon.innerHTML = "<i class='fa-solid fa-trash col-sm delete1 hide'></i>"
            document.querySelector(".color").append(del_icon);
            
        }





        //tittle
        if (newList.length>15){ // check to see how long the text is to make sure it not to big
            tittle.textContent =newList.slice(0,12)+"...";
        } else{
            tittle.textContent =newList;
        }
        

        inside_div.addEventListener("blur", function(){ //gives them the function if they are clicked to change background to gray 
            update_tittle()

        })
        
        


        let tittle_text;
        let old_tittle
        
        inside_div.addEventListener("click", function(e){ //gives them the function if they are clicked to change background to gray 
            update_tittle()
            var element = e.target;
            element.style.backgroundColor ="rgb(181, 181, 181)";
            x.style.display = "block";
            document.querySelector(".b_tittle").textContent = element.textContent
            tittle_text = element.textContent
            num_Array = (listData.indexOf(this.innerHTML));
            const spacesReplaced = element.textContent.replaceAll(' ', '-');
            old_tittle = document.querySelector("#"+spacesReplaced).id
            Array.from(document.querySelector(".check_box").children).forEach(child => child.style.display ="none")
            document.querySelector("#"+listData[num_Array]).style.display ="block"
            

            
            del_icon.addEventListener("click", function(f){
                var f_del = f.target;
                element.parentElement.remove();
                
                f_del.remove()
                listData.splice(num_Array,1)
                
                x.style.display = "none";
    
    
            })
            
            
            
        })
        

        inside_div.addEventListener("blur", function(e){ //gives them the function if they are unclicked to change background to gray 
            var element = e.target;
            tittle_text = element.textContent
            listData[num_Array] = tittle_text
            element.style.backgroundColor ="rgb(242, 242, 242)";
            document.querySelector(".b_tittle").textContent == tittle_text
            if(/ /.test(tittle_text)){  
                const spacesReplaced = tittle_text.replaceAll(' ', '-');
                document.querySelector("#"+old_tittle).id = spacesReplaced
                
            } else{
                document.querySelector("#"+old_tittle).id = tittle_text
                
            }

        })
        
        
          
        

        const div_checkbox =document.createElement("div")
        div_checkbox.setAttribute("id", newList)
        div_checkbox.style.display = "none"
        div_checkbox.classList.add("hide")
        document.querySelector(".check_box").prepend(div_checkbox)
        x.style.display = "none";

    }
}






function update_tittle(){
    
    Array.from(document.querySelectorAll(".list_text")).forEach(element =>{
        element.contentEditable = true;
    } )

    var new_text = document.querySelector(".list_text").innerHTML;
    // document.querySelector(".b_tittle").textContent = new_text;
    
}






function add(){ //Adds new element (Checkbox)

    var input_task = document.querySelector(".task").value;
    var isEmpty = input_task.length == 0; //chekcing if empty
    //New list is holding value of list Name
    let jimmy
    if(/ /.test(listData[num_Array])){
        jimmy = listData[num_Array].replaceAll(' ', '-');        
    }else{
        jimmy = listData[num_Array]
    }


    if (isEmpty){
        alert("Name a Task First")
    }else{
        
        document.querySelector(".task").value = ""; //sets input box with no text
        const div4 = document.createElement("div");
        div4.classList.add("checkpoint", "row" )

        document.getElementById(jimmy).append(div4)
        const check_text = document.createElement("div");
        check_text.classList.add("text", "col")
        document.querySelector(".checkpoint:last-child").append(check_text)
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("col-sm")
        
        var endup =document.querySelector(".text:last-child")
        endup.textContent = input_task ;
        document.querySelector(".text").contentEditable = true;
        document.querySelector(".text:last-child").prepend(checkBox);
        del_icon1 = document.createElement("a");   
        del_icon1.innerHTML = "<i class='fa-solid fa-trash col-sm delete'></i>"
        document.querySelector(".checkpoint:last-child").append(del_icon1);
        Array.from(document.querySelectorAll(".text")).forEach(element => {
            element.contentEditable = true;
        })

        del_icon1.addEventListener("click", function(e){
            var element = e.target
            element.parentElement.remove();
            check_text.parentElement.remove();
        })
    
    }   


    
}   









function exitOut(){ //Hides things
    document.querySelector(".color").style.backgroundColor ="rgb(242, 242, 242)";
   
    x.style.display = "none";

    
}

 