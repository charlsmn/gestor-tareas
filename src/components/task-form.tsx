import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Textarea } from './ui/textarea'
import { createTask, updateTask } from '@/actions/task-actions'
import { Task } from '@prisma/client'

export function TaskForm({ task }: { task: Task }) {
    const fuctionAction = task?.id ? updateTask : createTask

    return (
        <form action={fuctionAction}>
            <input type="hidden" name="id" value={task?.id} />
            <Card className="mb-4">
                <CardHeader>
                    <CardTitle>Crear nueva tarea</CardTitle>
                    <CardDescription>
                        Crea una nueva tarea para tu proyecto.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Nombre</Label>
                            <Input
                                name="name"
                                id="name"
                                placeholder="Nombre de la tarea"
                                defaultValue={task?.name}
                                required
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="descripcion">Descripción</Label>
                            <Textarea
                                id="description"
                                placeholder="Descripción de la tarea"
                                name="description"
                                defaultValue={task?.description || ''}
                            />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="priority">Prioridad</Label>
                            <Select
                                name="priority"
                                defaultValue={task?.priority}
                                required
                            >
                                <SelectTrigger id="priority">
                                    <SelectValue placeholder="Selecionar" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    <SelectItem value="Baja">Baja</SelectItem>
                                    <SelectItem value="Media">Media</SelectItem>
                                    <SelectItem value="Alta">Alta</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button type="submit">
                        {task?.id ? 'Actualizar' : 'Crear'}
                    </Button>
                </CardFooter>
            </Card>
        </form>
    )
}
