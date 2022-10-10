const app = Vue.createApp({
   data() {
      return {
         tasks: [],
         show_tasks: true,
         task_input: "",
      };
   },
   methods: {
      addTask() {
         this.tasks.push(this.task_input);
      },
      toggleTasks() {
         this.show_tasks = !this.show_tasks;
      },
   },
}).mount("#assignment");
