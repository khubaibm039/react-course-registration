import { useState } from 'react'
import Cards from '../Cards/Cards'
import Courses from '../Courses/Courses'
import Header from '../Header/Header'
import Swal from 'sweetalert2/src/sweetalert2.js'

function Body() {
    const [courseName, setCourseName] = useState([])
    const [remaining, setTotalRemaining] = useState(20)
    const [credit, setCredit] = useState(0)
    const [price, setPrice] = useState(0)


    const handleClickToSelect = (card) => {
        const isExits = courseName.find(name => card.id === name.id)
        if (!isExits) {
            const title = [...courseName, card]
            const totalAmountRemaining = remaining - card.credit
            if (totalAmountRemaining < 0) {
                return (Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>',
                    timer: 2000
                }))
            }

            else {
                setTotalRemaining(totalAmountRemaining);
                setCourseName(title)
                setCredit(credit + card.credit)
                setPrice(price + card.price)
            }
        }
        else {
            return (Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>',
                timer: 2000
            }))
        }
    }

    return (
        <div className='container mx-auto'>
            <Header></Header>
            <div className='flex'>
                <Cards handleClickToSelect={handleClickToSelect}></Cards>
                <Courses courseName={courseName} remaining={remaining} credit={credit} price={price}></Courses>
            </div>
        </div>
    )
}

export default Body