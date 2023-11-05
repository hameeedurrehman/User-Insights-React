import { useEffect, useState } from 'react'

export default function useApi(url) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchUsers = async () => {
        try {
            setIsLoading(true)
            const responce = await fetch(url)
            const data = await responce.json()
            setData(data);
            return data
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { isLoading, error, data }

}
