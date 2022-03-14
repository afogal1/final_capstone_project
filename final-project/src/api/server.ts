let token = ''

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://stark-inventory-tm-81.herokuapp.com/api/starks`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async( data:any = {} ) => {
        const response = await fetch(`https://stark-inventory-tm-81.herokuapp.com/api/starks`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    },

    update: async ( id:string, data:any = {} ) => {
        const response = await fetch(`https://stark-inventory-tm-81.herokuapp.com/api/starks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
    },
    
    delete: async( id:string ) => {
        const response = await fetch(`https://stark-inventory-tm-81.herokuapp.com/api/starks/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
    }
}