import axios from 'axios'

export const getCurrency = async () => {
try {
   let res = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')   
   const cur = Object.keys(res.data.bpi).map( (key) => ({...res.data.bpi[key]})) 
   console.log('res',cur)
   return {time:res.data.time,cur}
} catch (error) {
        alert('Some error happened')
}

}


export const getConverted = async () => {
    try {
            let res = axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json')
            // console.log('btc conv',res)
    } catch (error) {
        alert('Some error happened')
    }
}