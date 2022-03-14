const app = new Vue({
  el: '.app-container',
  data: {
    activeIndex: 0,
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
  },
  methods: {
    toDoTask() {
      console.log(this.newTask);
      this.newTask.innerHTML = '';

      if (this.newTask.length === 0) return;
      this.taskList.push({
        name: this.newTask,
        status: 'to-do',
      });
    },
    deleteTask(index) {
      this.taskList.splice(index, 1);
    },
  },
});
