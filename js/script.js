const app = new Vue({
  el: '.app-container',
  data: {
    activeIndex: 0,
    newTask: '',
    taskList: [
      {
        task: 'Do boolean exercise',
        status: 'to-do',
      },
      {
        task: 'Do boolean exercise',
        status: 'to-do',
      },
      {
        task: 'Do boolean exercise',
        status: 'to-do',
      },
      {
        task: 'Do boolean exercise',
        status: 'to-do',
      },
    ],
  },
  methods: {
    toDoTask() {
      console.log(this.newTask);
      if (this.newTask.length === 0) return;
      this.taskList.push({
        task: this.newTask,
        status: 'to-do',
      });
    },
  },
});
