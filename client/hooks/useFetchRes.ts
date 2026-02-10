import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

type ResData = {
    message: string
}

export const useFetchRes = () => {
    return useQuery({
        queryKey: ['ResData'],
        queryFn: () => {
            return axios.get<ResData>("http://localhost:3000/api/testing")
        },
        staleTime: 1000,
    })
}