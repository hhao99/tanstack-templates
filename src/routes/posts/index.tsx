import * as React from 'react'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
    component: PostIndex,
})
export function PostIndex() {
    return (
        <>
            <h1 className="text-blue-600">Post Index</h1>
        </>
    )
}