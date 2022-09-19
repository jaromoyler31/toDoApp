var x = document.querySelector(".hide");
x.style.display ="none";



function makeNewList(){
    var listName = document.querySelector(".input")
    var newList = listName.value;
    var isEmpty = newList.length == 0;
    var tittle = document.querySelector(".b_tittle");
    
    


    if(isEmpty){
        alert("Need a list Name")
    } else{
        listName.value = "";
        
        x.style.display = "block";

        //making new div : )

        const div = document.createElement("div");
        div.classList.add("color", newList)
        div.addEventListener("click", function(e){
            var element = e.target;
            element.style.backgroundColor ="rgb(181, 181, 181)";
            x.style.display = "block";
            tittle.textContent =newList;
            
        })

        if (newList.length>15){
            const textnode = document.createTextNode(newList.slice(0,15)+"...");
            div.appendChild(textnode);

        }
        else{
            const textnode = document.createTextNode(newList);
            div.appendChild(textnode);
        }

        
        document.querySelector(".list_name").prepend(div);
        document.querySelector(".color").style.backgroundColor ="rgb(181, 181, 181)";

        //tittle
        if (newList.length>30){
            tittle.textContent =newList.slice(0,30)+"...";
        } else{
            tittle.textContent =newList;
        }
        
        
    }
}

function add(){
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    var checknode = document.createTextNode("Bob"); 
    checkBox.appendChild(checknode);
    document.querySelector(".check_box").prepend(checkBox);
}

function exitOut(){
    document.querySelector(".color").style.backgroundColor ="rgb(242, 242, 242)";
   
    x.style.display = "none";

    
}