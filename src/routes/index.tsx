import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})
export function Index() {
    return (
        <>
            <h1 className="text-blue-600">Home</h1>
        </>
    )
}