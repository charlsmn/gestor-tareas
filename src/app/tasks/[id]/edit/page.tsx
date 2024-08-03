import { TaskForm } from '@/components/task-form'
import prisma from '@/lib/prisma'

export default async function EditTaskPage({
    params,
}: {
    params: { id: string }
}) {
    const task = await prisma.task.findFirst({
        where: {
            id: parseInt(params.id),
        },
    })

    if (!task) {
        return <h1>Tarea no encontrada</h1>
    }

    console.log(task)

    return <TaskForm task={task} />
}
