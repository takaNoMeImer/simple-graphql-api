const Task = require('./models/Task.model')

const resolvers = {
    Query: {
        hello: () => "Nuevo Mensaje desde GraphQl",
        getAllTasks: async () => {
            const tasks = await Task.find()
            return tasks;
        },
        getTask: async (_,args) => {
            const task = await Task.findById(args.id)
            return task;
        }
    },
    
    Mutation: {
        createTask: async (_, args) => {
            const { title, description } = args.task
            const task = new Task({title, description})
            await task.save()
            return task;
        },
        deleteTask: async (_,args) => {
            await Task.findByIdAndDelete(args.id)
            return "Eliminado"
        },
        updateTask: async (_, {id, task}) => {
            const newTask = await Task.findByIdAndUpdate(id, {
                // Esto hace que mongodb actualice solo con los datos que trae
                $set: task
            }, {new: true});
            return newTask;
        }
    }
}; 

module.exports = {resolvers}