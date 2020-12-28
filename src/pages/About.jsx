import React,{useEffect, useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import {getConverted,getCurrency} from '../api/currencyApi'
function About() {
    const [latestUpdate,setLatestUpdate] = useState('')
    const [currrencys,setCurrencys] = useState([])

    const setData = async () => {
      const {time,cur} =   await getCurrency()
      setLatestUpdate(time)
      setCurrencys(cur)
    }
    useEffect(() => {
    setData()


    }, [])
    return (
        <Container>
           <Row>
               <h1>Aboutd page</h1>
           </Row>

           <Row>
              { latestUpdate && <h3> Latest update { latestUpdate.updated.toLocaleString()}</h3>}
           </Row>

           <Row className="mt-5">
            {

                currrencys.map(
                    el => <div style={{}}>
                        <p>|{el.code}|</p>
                        <p>|{el.rate}|</p>
                    </div>
                )

            }
              
           </Row>
        </Container>
    )
}

export default About
