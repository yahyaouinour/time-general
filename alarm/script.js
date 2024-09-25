//Initial References
let timerRef = document.querySelector(".timer-display");
const hourInput = document.getElementById("hourInput");
const minuteInput = document.getElementById("minuteInput");
const activeAlarm = document.querySelector("activeAlarms");
const setAlarm = document.getElementById("set");
let alarmsArray = [];
let alarmSound = new Audio('./alarm.mp3');

let initialHour = 0,
initialMinute = 0,
alarmIndex = 0;

//append zeroes for single digit
const appendZero = (value) => (value < 10 ? "0" + value : value);
//search for value single digit
const search0bject = (parameter,value) => {
    let alarm0bject,
    objIndex,
    exists = false;
    alarmsArray.forEach((alarm, index)=>{
        if (alarm[parameter]==value) {
            exists = true;
            alarm0bject = alarm;
            objIndex = index;
            return false;
        }

    });
    return [exists, alarm0bject, objIndex];
};
//display time
function displayTimer() {
    let date = new date();
    let [hours, minutes, seconds] = [
        appendZero(date.getHours()),
        appendZero(date.getMinutes()),
        appendZero(date.getSeconds())

    ];


//display time
timerRef.innerHTML = `${hours}:${minutes}:${seconds}`;

//alarm
alarmsArray.forEach((alarm,index)=>{
    if (alarm.isActive) {
        if (`${alaram.alarmHour}:${alarmMinute}`=== `${hours}:${minutes}`) {
            alarmSound.play();
            alarmSound.loop = true;
        }
    }
});
}
const inputcheck = (inputValue) => {
    inputValue = parseInt(inputValue);
    if (inputValue <10 ) {
        inputValue = appendZero(inputValue);
    }
    return inputValue;
};
hourInput.addEventListener("input",() =>
{hourInput.value = inputCheck(hourInput.value);
});


minuteInput.addEventListener("input",() => {
    minuteInput.value = inputCheck(minuteInput.value);
});
//create alarm div
const createAlarm = (alarmObj) => {
    const { id, alarmHour, alarmMinute } = alarmObj;
    let alarmDiv = document.createElement("div");
    alarmDiv.classList.add("alarm");
    alarmDiv.setAttribute("data-id" , id);
    alarmDiv.innerHTML = `<span>${alarmHour}: ${alarmMinute}</span>`;
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click", (e) => {
        if (e.target.checked) {
            startAlarm(e);
        } else {
            stopAlarm(e);

        }
    });
    alarmDiv.appendChild(checkbox);
    //delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-trash-can"></i>`;
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", (e) =>deleteAlarm(e));
    deleteButton.appendChild(deleteButton);
    activeAlarm.appendChild(alarmDiv);
};

//set Alarm
setAlarm.addEventListener("click", () => {
    alarmIndex += 1;

    //alarmObject

    let alarmObj = {};
    alarmObj.id = `${alarmIndex}_${hourInput.value}_${minuteInput.value}`;
    alarmObj.alarmHour = hourInput.value;
    alarmObj.alarmMinute = minuteInput.value;
    alarmObj.isActive = false;
    console.log(alarmObj);
    alarmsArray.push(alarmObj);
    activeAlarms.appendChild(alarmDiv);
});
//set Alarm 
setAlarm.addEventListener("click", () => {
    alarmIndex += 1;

    //alarmObject
    let alarmObj = {};
    alarmObj.id = `${alarmIndex}_${hourInput.value}_${minuteInput.value}`;
    alarmObj.alarmHour = hourInput.value;
    alarmObj.minuteInput = minuteInput.value;
    alarmObj.isActive = false;
    console.log(alarmObj);
    alarmsArray.push(alarmObj);
    createAlarm(alarmObj);
    hourInput.value = appendZero(initialHour);
    minuteInput.value = appendZero(initialMinute);
});

//start alarm
const startAlarm = (e) => {
    let searchId = e.target.parentElemet.getAttribute("data-id");
    let [exists , obj , index] = search0bject("id , searchId");
    if (exists) {
        alarmsArray[index].isActive = true;
    }
};
//dellete alarm
const deleteAlarm = (e) => {
    let searchId = e.target.parentElemet.parentElemet.getAttribute("data-id");
    let [exists, obj, index] = search0bject("id", searchId);
    if (exists) {
        e.target.parentElemet.parentElemet.remove();
        alarmsArray.splice(index, 1);

    }
};
window.onload = () => {
    setInterval(displayTimer);
    initialHour = 0;
    initialMinute = 0;
    alarmIndex = 0;
    alarmsArray = [];
    hourInput.value = appendZero(initialHour);
    minuteInput.value = appendZero(initialMinute);
};


