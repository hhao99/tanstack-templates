import * as React from 'react'
import { createFileRoute, useLoaderData } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/$postId')({
    loader: ({params: { postId}})=> postId , 
    component: Post,
})
export function Post() {
    const postId = Route.useLoaderData()
    return (
        <>
            <h1 className="text-blue-600">Post: {postId}</h1>
        </>
    )
}