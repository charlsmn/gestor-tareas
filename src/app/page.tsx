import { TaskForm } from '@/components/task-form'
import TastkTable from '@/components/task-table'

export default function Home() {
    return (
        <div className="lg:grid lg:grid-cols-3 px-4 gap-6">
            <div className="col-span-2 mb-6 lg:mb-0">
                <TastkTable />
            </div>
            <div className="col-span-1">
                <TaskForm />
            </div>
        </div>
    )
}
