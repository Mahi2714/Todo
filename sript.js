function addTask(){
  var input=document.getElementById("taskInput")
  let taskText = input.value.trim();

  if(taskText=="")return;

  var taskList=document.getElementById("taskList");

  var li=document.createElement("li")
  li.textContent=taskText;
  li.onclick=()=> li.classlist.toggle("completed"); 

   var delbtn=document.createElement("button");
   delbtn.textContent="Delete";
   delbtn.onclick=()=>taskList.removeChild(li);

   li.appendChild(delbtn);
   taskList.appendChild(li);

   input.value="";
}
