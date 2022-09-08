import {useEffect,useState}from 'react'
import tw from "tailwind-styled-components"
import {carList} from '../data/carList'

function RideSelector({pickupCoordinates,dropoffCoordinates}) {

    const[rideDuration,SetRideDuration] = useState(0);

    useEffect(() => {
        var rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiaXNoYW4yMXNoIiwiYSI6ImNreXVlanpqdTA5dmEydm94YzhxbjY3czIifQ.ngCwfTbNubYPVNoRFdPDyw`)
        .then(res => res.json())
        .then(data=>{
            SetRideDuration(data.routes[0].duration / 100)
        })
    }, [pickupCoordinates,dropoffCoordinates])

  return (
    <Wrapper>
        <Title>Choose a ride or swipe up for more</Title>
        <Carlist>
            {carList.map((car,index) =>(
                <Car key = {index}>
                <CarImage src = {car.imgUrl} />
                <Details>
                    <Type>{car.service}</Type>
                    <Time>5 min away</Time>
                </Details>
                <Price>{'$' + ((rideDuration*car.multiplier).toFixed(2))}</Price>
            </Car>
            ))}
            
        </Carlist>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col 
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const Carlist = tw.div`
overflow-y-scroll 
`
const Car = tw.div`
flex p-4 items-center
`
const CarImage = tw.img`
h-14 mr-3
`
const Details = tw.div`
flex flex-col flex-1
`
const Price = tw.div`
text-sm
`
const Type = tw.div`
font-medium
`

const Time = tw.div`
text-xs text-blue-500
`