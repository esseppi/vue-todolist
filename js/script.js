const app = new Vue({
  el: '.app-container',
  data: {
    newTask: '',
    taskList: [
      {
        name: 'Do boolean exercise',
        status: 'To-do',
      },
      {
        name: 'Wash your car',
        status: 'To-do',
      },
    ],
    statusAvailable: ['to-do', 'done'],
  },
  methods: {
    toDoTask() {
      this.newTask.innerHTML = '';
      if (this.newTask.length === 0) return;
      this.taskList.push({
        name: this.newTask,
        status: 'to-do',
      });
      this.newTask = '';
    },
    doneTask(index) {
      this.taskList[index].name.style.textDecoration = 'underline overline';
    },
    deleteTask(index) {
      this.taskList.splice(index, 1);
    },
  },
});
