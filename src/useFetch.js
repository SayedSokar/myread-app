import { useState, useEffect } from 'react'



const useFetch = (url) => {
    const [data, setdata] = useState(null)
    const [isPending, setPending] = useState(true)
    const [err, setError] = useState(null)


    useEffect(() => {
       fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error(' data is not okay')
                        
                    }
                    return res.json()
                })
                .then(data => {
                    setdata(data)
                    setPending(false)
                })
                .catch((err) => {
                    console.log(err.message)
                    setError(err.message)
                    setPending(false)
                })
        
        
    }, [url])
    return {data, isPending, err}
    
    
}
export default useFetch