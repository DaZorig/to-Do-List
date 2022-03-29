function getCurrentDate() {
    const date = new Date();
    let currDay = date.getDate();
    let currYear = date.getFullYear();
    let currMonth = date.getMonth();
    let Months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    currMonth = Months[date.getMonth()];
    document.getElementById("date").innerHTML = currDay + " " + currMonth + " " + currYear;
}
getCurrentDate();

function addTask() {
    let task = document.getElementById("newTask").value;
    if (task) {
        let liTask = document.createElement('li');
        liTask.innerHTML = task;
        document.getElementById("taskList").append(liTask);
        document.getElementById("newTask").value = '';
    }
    endTask();
}

function endTask(){
    let list = document.getElementById("taskList");
    let tasks = list.childNodes;
    addEventListenerList(tasks, 'click', function(e){
        let chTask = e.target.style;
        if (chTask.textDecoration == 'none'){
            chTask.textDecoration = 'line-through';
            chTask.color = 'rgb(114, 129, 55)';
        }
        else{
            chTask.textDecoration = 'none';
            chTask.color = '#D29D25';
        }
        // console.log(tasks);
    })
  }

function addEventListenerList(list, event, func){
    for (let i = 0, len = list.length; i < len; i++){
        list[i].addEventListener(event, func, false);
    }
}
