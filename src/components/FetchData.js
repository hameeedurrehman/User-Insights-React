import React from 'react';
import useApi from '../hooks/useApi';
import { Link } from 'react-router-dom';
const FetchData = () => {
    const { isLoading, error, data: users } = useApi(`${process.env.REACT_APP_API_URL}/users`)
    // const { data: posts } = useApi(`${process.env.REACT_APP_API_URL}/posts`)
    return (
        <>
            {isLoading === true ? <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                ></span>
            </div> : <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user) => (
                            <tr className="px-6 py-3" key={user.id}>
                                <td className="px-6 py-3">
                                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
            {error && <div>{error}</div>}
        </>
    )
    
}
export default FetchData;