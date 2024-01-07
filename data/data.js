export const data = {
    todolist: {
        id: createUniqId(),
        title: 'What to learn',
        tasks: [{
                id: createUniqId(),
                title: 'Learn HTML',
            },
            {
                id: createUniqId(),
                title: 'Learn CSS',
            },
            {
                id: createUniqId(),
                title: 'Learn JS',
            },
            {
                id: createUniqId(),
                title: 'Learn React',
            }
        ],
        addNewTaskDialog: {
            isOpen: false,
            error: null,
        }
    }
}

function setError(error) {
    data.todolist.addNewTaskDialog.error = error;
    notifySubscriber();
}

function createUniqId() {
    return Math.floor(Math.random() * 100000000);
}

export function openTaskDialog() {
    data.todolist.addNewTaskDialog.isOpen = true;
    notifySubscriber();
}

export function closeTaskDialog() {
    data.todolist.addNewTaskDialog.isOpen = false;
    notifySubscriber();
}

let notifySubscriber = () => {
    console.warn('No data change');;
};

export function subscribe(subscriber) {
    notifySubscriber = subscriber;
}

export function createTask(newTitle) {
    if (newTitle.trim().length > 0) {
        const newTask = {
            id: createUniqId(),
            title: newTitle,
        };
        data.todolist.tasks.push(newTask);
        notifySubscriber();
        return true;
    } else {
        setError('Empty input')
        notifySubscriber();
        return false;
    }
}

    export function deleteTask(id) {
        data.todolist.tasks = data.todolist.tasks.filter((task) => task.id != id);
        notifySubscriber();
    }