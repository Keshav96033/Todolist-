let addBtton = document.getElementById("addTodo");
let todoCont = document.getElementById('list');
let intfield = document.getElementById("inputfield");
addBtton.addEventListener("click",function(){
    var paraGraph = document.createElement('p');
    paraGraph.innerText = intfield.value;
    todoCont.appendChild(paraGraph);
    intfield.value ="";
    paraGraph.addEventListener("dblclick",function(){
        todoCont.removeChild(paraGraph);
        
    })
})