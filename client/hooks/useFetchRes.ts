import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

type journalData = {
    title: string,
    content: string,
    mood: string,
    summary: string
}

export const useFetchRes = () => {
    return useQuery({
        queryKey: ['journalData'],
        queryFn: () => {
            return axios.get<journalData[]>("http://localhost:3000/api/journal")
        },
        staleTime: 1000,
    })
}