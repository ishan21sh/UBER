import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaXNoYW4yMXNoIiwiYSI6ImNreXVlanpqdTA5dmEydm94YzhxbjY3czIifQ.ngCwfTbNubYPVNoRFdPDyw'



function Map(props) {

    useEffect(() => {
    
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011, 39.39172],
          zoom: 9
        });
        if(props.pickupCoordinates){
          addtomap(map,props.pickupCoordinates)
        }
        if(props.dropoffCoordinates){
          addtomap(map,props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates){

          map.fitBounds([
            props.pickupCoordinates,
            props.dropoffCoordinates
          ],{
            padding : 60
          })
        }

      },[props.pickupCoordinates,props.dropoffCoordinates]);

  const addtomap =  (map,coordinates) => {
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }

  
    
  return (
      <Wrapper id = "map"></Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`
