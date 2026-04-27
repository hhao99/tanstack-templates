import * as React from 'react'
import { createFileRoute, Outlet  } from '@tanstack/react-router'

export const Route = createFileRoute('/posts')({
    component: Index,
})
export function Index() {
    return (
        <>
            <h1 className="text-blue-600">Posts Layout</h1>
            <Outlet></Outlet>
        </>
    )
}