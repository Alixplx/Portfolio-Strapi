import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const projectApi = createApi({
  
  reducerPath: 'projectApi',
  
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/api/` }),
  
  endpoints: (builder) => ({
    
    getProjectByName: builder.query({query: (name) => `${name}`,
  }),
  }),
})


export const { useGetProjectByNameQuery } = projectApi