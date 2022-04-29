import { useState, useEffect } from 'react';

export const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() =>{
        // document.title = `hola`  //titulo de documento
        const getData = async(url) =>{  
            try {
                const res =await fetch(url)
                if(!res.ok){
                    throw new Error({
                        err : true,
                        status : res.status,
                        statusText : res.statusText || "Ocurrio un error"
                    })
                }
                const data =await res.json()
                
                setIsPending(false)
                setData(data)
                setError({err:false})
            } catch (err) {
                setIsPending(true)
                setError({err})    
            }
        }
            getData(url)
        },[url]) 
    return {data,isPending,error}
}