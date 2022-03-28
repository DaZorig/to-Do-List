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
function addTask(){
    let task = document.getElementById("newTask").value;
    let liTask = document.createElement('li');
    liTask.innerHTML = task;
    document.getElementById("taskList").append(liTask);
    document.getElementById("newTask").value = '';
}
// addTask();