//make things Hide
var x = document.querySelector(".hide"); 

x.style.display ="none";
var num_Array;
var listData =[];





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
        console.log(listData)
        
        div.classList.add("color", newList) //gives div class of newList and color
        const inside_div = document.createElement("div"); //create a div 

        inside_div.classList.add("list_text")
        

        
        



        document.querySelector(".list_name").prepend(div); //put new div in list_anmes Before any other divs in it
        



        if (newList.length>15){ // check to see how long the text is to make sure it not to big
            document.querySelector(".color").prepend(inside_div);
            const textnode = document.createTextNode(newList.slice(0,15)+"...");
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
        if (newList.length>30){ // check to see how long the text is to make sure it not to big
            tittle.textContent =newList.slice(0,30)+"...";
        } else{
            tittle.textContent =newList;
        }
        

        inside_div.addEventListener("blur", function(){ //gives them the function if they are clicked to change background to gray 
            update_tittle()
            listData[num_Array] = document.querySelector(".list_text").innerHTML;
            

        })
        
        

        update_tittle()

        
        
        inside_div.addEventListener("click", function(e){ //gives them the function if they are clicked to change background to gray 
            update_tittle()
            var element = e.target;
            
            element.style.backgroundColor ="rgb(181, 181, 181)";
            x.style.display = "block";
            document.querySelector(".b_tittle").textContent = element.textContent
            num_Array = (listData.indexOf(this.innerHTML));
            console.log(listData[num_Array])
            listData[num_Array] = document.querySelector(".list_text").innerHTML;
            
           
            del_icon.addEventListener("click", function(f){
                var f_del = f.target;
                element.remove();
                
                f_del.remove()
                listData.splice(num_Array)
                
                x.style.display = "none";
    
    
            })
            
            
            
        })
        

        inside_div.addEventListener("blur", function(e){ //gives them the function if they are unclicked to change background to gray 
            var element = e.target;
            
            element.style.backgroundColor ="rgb(242, 242, 242)";
            document.querySelector(".b_tittle").textContent == element.textContent;
            

        })
        
        
          
        
        

        const div_checkbox =document.createElement("div")
        div_checkbox.setAttribute("id", newList)
        document.querySelector(".check_box").prepend(div_checkbox)
        x.style.display = "none";

    }
}






function update_tittle(){
    document.querySelector(".list_text").contentEditable = true;

    var new_text = document.querySelector(".list_text").innerHTML;
    document.querySelector(".b_tittle").textContent = new_text;
    
}






function add(){ //Adds new element (Checkbox)

    var input_task = document.querySelector(".task").value;
    var isEmpty = input_task.length == 0; //chekcing if empty
    var icon;
    //New list is holding value of list Name


    if (isEmpty){
        alert("Name a Task First")
    }else{
        
        document.querySelector(".task").value = ""; //sets input box with no text
        const div4 = document.createElement("div");
        div4.classList.add("checkpoint", "row" )

        document.getElementById(listData[num_Array]).append(div4)
        const check_text = document.createElement("div");
        console.log(document.getElementById(listData[num_Array]))
        check_text.classList.add("text", "col")
        document.querySelector(".checkpoint:last-child").append(check_text)
        var checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.classList.add("col-sm")
        document.querySelector(".text:last-child").append(checkBox);
        var endup =document.querySelector(".text:last-child")
        endup.textContent = input_task ;
        document.querySelector(".text").contentEditable = true;
        del_icon1 = document.createElement("a");   
        del_icon1.innerHTML = "<i class='fa-solid fa-trash col-sm delete'></i>"
        document.querySelector(".checkpoint:last-child").append(del_icon1);
    
        del_icon1.addEventListener("click", function(e){
            var element = e.target;
            var deletinga = document.querySelector(".row");
            element.remove();
            check_text.remove();
      
            
    
    
        })
    
    }   


    
}   









function exitOut(){ //Hides things
    document.querySelector(".color").style.backgroundColor ="rgb(242, 242, 242)";
   
    x.style.display = "none";

    
}

