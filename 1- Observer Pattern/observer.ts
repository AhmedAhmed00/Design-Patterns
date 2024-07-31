// this is my try to write example by myself after i have learned the pattern

abstract class Observer {
  abstract update(task: currentTeamTaskType): void;
}

class BackEndDeveloper extends Observer {
  update(task: currentTeamTaskType): void {
    console.log(`
        the current task is : ${task.taskName}
        task Added at : ${task.taskDate.toISOString()}
        `);
  }
}

abstract class Observable {
  constructor() {}
  abstract registerDeveloperToTeam(newObserver: Observer): void;
  abstract deleteDeveloperFromTeam(newObserver: Observer): void;
  abstract notifyDevelopers(): void;
}

type currentTeamTaskType = {
  taskName: string;
  taskDate: Date;
};

class TeamLeader extends Observable {
  private observers: Observer[] = [];
  private TeamTask: currentTeamTaskType = {
    taskName: "",
    taskDate: new Date(),
  };

  registerDeveloperToTeam(newObserver: Observer) {
    this.observers.push(newObserver);
  }
  deleteDeveloperFromTeam(observer: Observer) {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  notifyDevelopers() {
    this.observers.forEach((observer) => {
      observer.update(this.TeamTask);
    });
  }

  currentTaskChanged() {
    this.notifyDevelopers();
  }

  setNewTask(taskName: string, taskdate: Date) {
    this.TeamTask.taskName = taskName;
    this.TeamTask.taskDate = taskdate;
    this.currentTaskChanged();
  }
}

const essam = new TeamLeader();
const ahmedHamdy = new BackEndDeveloper();
essam.registerDeveloperToTeam(ahmedHamdy); // now ahmed hamdy can listen to the updates comes from essam
const now = new Date();

essam.setNewTask("cooperate togather to handle routing ", now);
