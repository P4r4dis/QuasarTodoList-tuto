<template>
  <q-page class="bg-grey-3 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
      outlined
      placeholder="Add Task"
      stack-label
      denses
      class="col"
      v-model="newTasks"
      bg-color="white"
      @keyup.enter="addTask()"
      >
        <template v-slot:append>
          <q-btn
          round
          dense
          flat
          icon="add"
          @click="addTask(); count++"
          />
        </template>
      </q-input>
    </div>
    <q-list
    class="bg-white"
    separator
    bordered>
      <q-item
      v-for="(task, indexTask) in tasks"
      :key="task.title"
      @click="task.completed = !task.completed"
      :class="{ 'Completed bg-blue-1' : task.completed }"
      clickable
      v-ripple>
        <q-item-section avatar>
          <q-checkbox
          v-model="task.completed"
          color="primary"
          class="no-pointer-events"/>
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section
        v-if="task.completed == true"
        side>
          <q-btn
          flat
          round
          dense
          color="primary"
          icon="delete"
          exact
          @click.stop="deleteTask(indexTask)"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <div class="no-tasks absolute-center"
    v-if="!tasks.length">
      <q-icon
      name="check"
      size="100px"
      color="primary" />
      <div class="text-h5 text-primary text-center">No Task</div>
    </div>

  </q-page>

</template>

<script>
import { api } from 'boot/axios';

export default {
  name: 'PageAPITodo',
  data() {
    return {
      newTasks: '',
      // newTasks:
      // [
      //   {
      //     userId: 1,
      //     id: 0,
      //     title: '',
      //     completed: false,
      //   },
      // ],
      tasks:
      [
        // {
        //   userId: 1,
        //   id: 0,
        //   title: 'task 1',
        //   completed: false,
        // },
        // {
        //   userId: 1,
        //   id: 1,
        //   title: 'task 2',
        //   completed: false,
        // },
        // {
        //   userId: 1,
        //   id: 2,
        //   title: 'task 3',
        //   completed: false,
        // },
      ],
      count: 1,
    };
  },
  methods: {
    deleteTask(taskID) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to delete this task ?',
        cancel: true,
        persistent: true,
      }).onOk(() => {
        this.tasks.splice(taskID, 1);
        this.$q.notify(
          {
            type: 'positive',
            message: 'Task deleted !',
          },
        );
        // console.log('>>>> OK')
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // alert('cancel');
        // console.log('>>>> Cancel')
      })
        .onDismiss(() => {
        // alert('Triggered on both OK and Cancel');
        // console.log('I am triggered on both OK and Cancel')
        });
    },
    addTask() {
      // alert('test');
      api.get(`/todos/${this.count}`)
        .then((response) => {
          // alert(JSON.stringify(response));
          this.data = response.data;
          // alert(JSON.stringify(this.data));
          this.tasks.push(
            {
              userId: this.data.userId,
              id: this.data.id,
              title: this.data.title,
              completed: this.data.completed,
            },
          );
          this.newTasks = '';
          // alert(this.count);
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem',
          });
        });
    },
    // loadData() {
    //   this.$api.get('/todos/1')
    //     .then((response) => {
    //       alert(JSON.stringify(response));
    //       this.data = response.data;
    //       alert(JSON.stringify(this.data));
    //     })
    //     .catch(() => {
    //       this.$q.notify({
    //         color: 'negative',
    //         position: 'top',
    //         message: 'Loading failed',
    //         icon: 'report_problem',
    //       });
    //     });
    // },
  },
};
</script>

<style lang="scss">
.Completed {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}

.no-tasks {
  opacity: 0.5;
}
</style>
