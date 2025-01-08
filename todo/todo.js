const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    console.log(typeof dataBuffer);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);

  console.log("Task added: ", task);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => {
    console.log(`${index + 1} - ${task.task}`);
  });
};

const removeTask=(taskNo)=>{
    let tasks=loadTasks();
    if (taskNo < 1 || taskNo > tasks.length) {
        console.log("Invalid task number.");
        return;
    }

    tasks.splice(taskNo-1,1)
    saveTasks(tasks);
    console.log(`removed task ${taskNo}`)
}

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("command not found");
}
