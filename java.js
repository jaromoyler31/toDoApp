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
            element.style.backgroundColor ="rgb(242, 242, 242)";

            element.style.backgroundColor ="rgb(181, 181, 181)";
            x.style.display = "block";
            tittle.textContent =newList;
        })
        const textnode = document.createTextNode(newList);
        div.appendChild(textnode);
        
        document.querySelector(".list_name").prepend(div);
        document.querySelector(".color").style.backgroundColor ="rgb(181, 181, 181)";

        //tittle
        tittle.textContent =newList;
        
    }
}



function exitOut(){
    document.querySelector(".color").style.backgroundColor ="rgb(242, 242, 242)";
   
    x.style.display = "none";

    
}