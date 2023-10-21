import { QueryKey, useQuery } from '@tanstack/react-query'

import { request } from '@/utils/request'

import { apparelUrl } from '.'

// export function useListApparel() {
//   const queryKey: QueryKey = ['apparel']
//   return useQuery({
//     queryKey,
//     queryFn: () => requests.list(),
//     staleTime: Infinity, // Data will never be considered stale
//     refetchOnWindowFocus: false, // default: true
//     // enabled: !!userId, // The query will not execute until the userId exists
//   })
// }

export function useGetApparel(size: string | undefined) {
  const queryKey: QueryKey = ['apparel', size]
  return useQuery({
    queryKey,
    queryFn: () => requests.get(size),
    // staleTime: Infinity, // Data will never be considered stale
    refetchOnWindowFocus: false, // default: true
    enabled: !!size, // The query will not execute until the size exists
  })
}

const requests = {
  // list: async () => {
  //   const response = await request(`${apparelUrl}/`, {
  //     method: 'get',
  //   })
  //   return response || {}
  // },
  get: async (size: string | undefined) => {
    const response = await request(`${apparelUrl}/${size}`, {
      method: 'get',
    })
    return response || ''
  },
}
