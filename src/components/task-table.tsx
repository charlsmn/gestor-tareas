import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Ellipsis } from 'lucide-react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import prisma from '@/lib/prisma'
import { TaskButtonDelete } from './task-button-delete'
import Link from 'next/link'

export default async function TastkTable() {
    const tasks = await prisma.task.findMany()

    return (
        <Card>
            <CardHeader>
                <CardTitle>Tareas creadas</CardTitle>
                <CardDescription>
                    Aquí se muestran todas las tareas creadas
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>
                        Una lista de tus tareas recientes.
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Descripción</TableHead>
                            <TableHead>Fecha</TableHead>
                            <TableHead className="text-right">
                                Prioridad
                            </TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow key={task.id}>
                                <TableCell className="font-medium">
                                    {task.name}
                                </TableCell>
                                <TableCell className="text-wrap">
                                    {task.description}
                                </TableCell>
                                <TableCell>
                                    {new Date(
                                        task.createdAt
                                    ).toLocaleDateString()}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Badge variant="secondary">
                                        {task.priority}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <Ellipsis className="h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:text-neutral-400 " />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>
                                                Acciones
                                            </DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <TaskButtonDelete
                                                taskId={task.id}
                                            />
                                            <DropdownMenuItem>
                                                <Link
                                                    href={`/tasks/${task.id}/edit`}
                                                >
                                                    Editar
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
