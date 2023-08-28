import React, { useState } from 'react'
import useApi from '../hooks/useApi';
import { useParams } from 'react-router-dom';
const UserDetails = () => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [deletePost, setDeletePost] = useState();
    const { userId } = useParams();
    const { data: users } = useApi(`${process.env.REACT_APP_API_URL}/users/${userId}`)
    const { data: posts } = useApi(`${process.env.REACT_APP_API_URL}/posts/${userId}`)
    const street = users?.address?.street || "NA";
    const handleDelete = async () => {
        if(window.confirm("Are you sure?")){
            setIsDeleting(true)
            try {
                const responce = await fetch(`${process.env.REACT_APP_API_URL}/posts/${userId}`, {
                    method: 'DELETE'
                })
                setDeletePost(responce)
            } catch (error) {
                console.log(error.message)
            }
        }
    }
    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Details
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="px-6 py-3">Name: {users.name}</tr>
                <tr className="px-6 py-3">Email: {users.email}</tr>
                <tr className="px-6 py-3">Address: {street}</tr>
                <tr className="px-6 py-3">{deletePost ? "" : isDeleting ? <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                ></span>
            </div> : posts.body}
                    {!deletePost && <button type="button" onClick={handleDelete} className='px-6 py-3'><b>DELETE POST</b></button>}
                </tr>
            </tbody>
        </table>
    )
}
export default UserDetails;