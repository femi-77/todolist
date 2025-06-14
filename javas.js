function adding(){
    const taskinput=document.getElementById("task");
    const tasktext=taskinput.value.trim();
    const taskList=document.getElementById("tasklist");

    if (tasktext===""){
        alert("Please enter a task");
        return;
    }
    let isdupli=false;
    const alltasks=document.querySelectorAll(".task span")
    alltasks.forEach((span) => {
        if (span.innerText===tasktext){
            isdupli=true;}
            
    });
    if(isdupli){
        alert("already there");
        return;

    }

    const taskdiv=document.createElement("div");
    taskdiv.className="task";

    const taskspan=document.createElement("span");
    taskspan.innerText=tasktext;

    const donebtn=document.createElement("button");
    donebtn.innerText="✔️";
    donebtn.className="taskbutton";
    donebtn.onclick=function(){
        taskspan.style.textDecoration="line-through";
    }
    const dltbtn=document.createElement("button");
    dltbtn.innerText="❌";
    dltbtn.className="taskbutton"
    dltbtn.onclick=function(){
        taskList.removeChild(taskdiv);
    }
    taskdiv.append(taskspan);
    taskdiv.append(donebtn);
    taskdiv.append(dltbtn);
    taskList.append(taskdiv);
    taskinput.value="";
    



}
