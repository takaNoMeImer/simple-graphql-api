const typeDefs = `#graphql

    # Definicion de tipos
    type Task {
        id: ID
        title: String
        description: String
    }

    input TaskInput {
        title: String
        description: String
    }

    # Definicion de consultas
    type Query {
        hello: String
        getAllTasks: [Task]
        getTask(id: ID): Task
    }

    # Definicion de Mutaciones
    type Mutation {
        createTask(task: TaskInput): Task
        deleteTask(id: ID): String
        updateTask(id: ID, task: TaskInput): Task
    }
`;

module.exports = {typeDefs}