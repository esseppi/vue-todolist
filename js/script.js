const app = new Vue({
  el: '.app-container',
  data: {
    newTask: '',
    statusAvailable: ['Todo', 'Done'],
    taskList: [
      {
        name: 'Do boolean exercise',
        status: 'Todo',
      },
      {
        name: 'Wash your car',
        status: 'Done',
      },
    ],
  },
  methods: {
    toDoTask() {
      this.newTask.innerHTML = '';
      if (this.newTask.length === 0) return;
      this.taskList.push({
        name: this.newTask,
        status: 'ToDo',
      });
      this.newTask = '';
    },
    doneTask(index) {
      let newIndex = this.statusAvailable.indexOf(this.taskList[index].status);
      if (++newIndex > 1) newIndex = 0;
      this.taskList[index].status = this.statusAvailable[newIndex];
      console.log(this.statusAvailable[newIndex]);
    },
    deleteTask(index) {
      this.taskList.splice(index, 1);
    },
  },
});
