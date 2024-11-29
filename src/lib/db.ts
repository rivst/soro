import Dexie, { type EntityTable } from 'dexie'

interface Task {
  id: number
  content: string
}

const db = new Dexie('SoroTasks') as Dexie & {
  tasks: EntityTable<Task, 'id'>
}

db.version(1).stores({
  tasks: '++id, content',
})

export type { Task }
export { db }
