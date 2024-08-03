import { removeTask } from '@/actions/task-actions'
import { DropdownMenuItem } from './ui/dropdown-menu'

export function TaskButtonDelete({ taskId }: { taskId: number }) {
    return (
        <form action={removeTask}>
            <input type="hidden" name="taskId" value={taskId} />
            <DropdownMenuItem>
                <button type="submit">Eliminar</button>
            </DropdownMenuItem>
        </form>
    )
}
