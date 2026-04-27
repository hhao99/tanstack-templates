import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
    component: Index,
})
export function Index() {
    return (
        <>
            <h1 className="text-3xl text-grey-600">About</h1>
        </>
    )
}