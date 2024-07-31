// this is my try to write example by myself after i have learned the pattern
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Observer = /** @class */ (function () {
    function Observer() {
    }
    return Observer;
}());
var BackEndDeveloper = /** @class */ (function (_super) {
    __extends(BackEndDeveloper, _super);
    function BackEndDeveloper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackEndDeveloper.prototype.update = function (task) {
        console.log("\n        the current task is : ".concat(task.taskName, "\n        task Added at : ").concat(task.taskDate.toISOString(), "\n        "));
    };
    return BackEndDeveloper;
}(Observer));
var Observable = /** @class */ (function () {
    function Observable() {
    }
    return Observable;
}());
var TeamLeader = /** @class */ (function (_super) {
    __extends(TeamLeader, _super);
    function TeamLeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.observers = [];
        _this.TeamTask = {
            taskName: "",
            taskDate: new Date(),
        };
        return _this;
    }
    TeamLeader.prototype.registerDeveloperToTeam = function (newObserver) {
        this.observers.push(newObserver);
    };
    TeamLeader.prototype.deleteDeveloperFromTeam = function (observer) {
        this.observers = this.observers.filter(function (o) { return o !== observer; });
    };
    TeamLeader.prototype.notifyDevelopers = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            observer.update(_this.TeamTask);
        });
    };
    TeamLeader.prototype.currentTaskChanged = function () {
        this.notifyDevelopers();
    };
    TeamLeader.prototype.setNewTask = function (taskName, taskdate) {
        this.TeamTask.taskName = taskName;
        this.TeamTask.taskDate = taskdate;
        this.currentTaskChanged();
    };
    return TeamLeader;
}(Observable));
var essam = new TeamLeader();
var ahmedHamdy = new BackEndDeveloper();
essam.registerDeveloperToTeam(ahmedHamdy); // now ahmed hamdy can listen to the updates comes from essam
var now = new Date();
essam.setNewTask("cooperate togather to handle routing ", now);
