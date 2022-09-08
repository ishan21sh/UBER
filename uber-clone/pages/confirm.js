import {useEffect,useState,useR} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/map'
import {useRouter} from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'


function Confirm() {

    const router = useRouter();
    const {pickup,dropoff} = router.query
    console.log(pickup)
    console.log(dropoff)

    const [pickupCoordinates, setPickupCoordinates] = useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0,0])

    const getPickUpCoordinates = (pickup) =>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams({
            access_token : 'pk.eyJ1IjoiaXNoYW4yMXNoIiwiYSI6ImNreXVlanpqdTA5dmEydm94YzhxbjY3czIifQ.ngCwfTbNubYPVNoRFdPDyw',
            limit: 1
        }))
        .then(response => response.json())
        .then(data =>{
            setPickupCoordinates(data.features[0].center);
        })
    }

    const DropOffCoordinates = (dropOff) =>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOff}.json?`+
        new URLSearchParams({
            access_token : 'pk.eyJ1IjoiaXNoYW4yMXNoIiwiYSI6ImNreXVlanpqdTA5dmEydm94YzhxbjY3czIifQ.ngCwfTbNubYPVNoRFdPDyw',
            limit: 1
        }))
        .then(response => response.json())
        .then(data =>{
            setDropoffCoordinates(data.features[0].center);
        })
    }

    useEffect(()=>{
        getPickUpCoordinates(pickup);
        DropOffCoordinates(dropoff);
    },[pickup,dropoff])

  return (
    <Wrapper>
        <ButtonContainer>
        <Link href="/search">
            <BackButton src= "https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
        </ButtonContainer>
        <Map
            pickupCoordinates ={pickupCoordinates}
            dropoffCoordinates = {dropoffCoordinates}
         />
        <ConfirmRide>
            <RideSelector 
            pickupCoordinates ={pickupCoordinates}
            dropoffCoordinates = {dropoffCoordinates}
             />
            <ConfirmButton>
                Confirm UberX
            </ConfirmButton>
        </ConfirmRide>
    </Wrapper>
  )
}

export default Confirm
 
const Wrapper = tw.div`
flex  flex-col h-screen
`
const ConfirmRide = tw.div`
flex flex-col flex-1 h-1/2
`

const ConfirmButton = tw.div`
bg-black text-white text-center px-4 py-4 mx-4 text-xl cursor-pointer my-4
`
const BackButton = tw.img`
h-12 cursor-ponter
`
const ButtonContainer = tw.div`
 px-4 inline-block absolute  z-10
`