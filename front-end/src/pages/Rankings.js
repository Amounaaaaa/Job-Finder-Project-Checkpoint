import {useEffect,useState} from 'react'
import axios from 'axios'


const Rankings = () => {
    const [topRank, setTopRank] = useState([])
    useEffect(async() => {
        try{
            const {data}= await axios.get('/post/topRanking')
            setTopRank(data)
        }
        catch(err){

        }
     
    }, [])
    return (
        <div>
            {topRank.map(elm=><div>{elm.companyname}</div>)}
            
        </div>
    )
}

export default Rankings
