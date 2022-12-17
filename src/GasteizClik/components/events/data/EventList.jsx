import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { solid, regular,icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import './eventList.scss'
export const EventList = () => {

    const [events, setEvents] = useState([]);

    const day='10';
    const month='12';
    const year='2022';
    const province='1';
    const elements='20';

    const formatDate =(string)=>{
      var options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(string).toLocaleDateString([],options);
    }


    const getEvents = async () => {
        
        const url=`https://api.euskadi.eus/culture/events/v1.0/events/byDate/${year}/${month}/${day}/byProvince/${province}?_elements=${elements}&_page=1`;
          console.log(url);
        const resp = await fetch(url);
        const {items} = await resp.json();         
        setEvents(items);   
    }


    useEffect(() => {
      getEvents();  
    }, [])
    


  return (
    <>
      {
            events.map((event) => 
              <>

<main class="main-area">
        
        <div class="centered">

            <section class="cards">

                <article class="card">
                    {/* <a href="#"> */}
                        <picture class="thumbnail">
                        <img src={event.images[0].imageUrl} alt={event.images[0].imageFileName}/>          
                       </picture>
                        <div class="card-content">
                            <p>{formatDate(event.startDate)}</p>
                            <h2>{event.nameEs}</h2>
                            <p>{event.descriptionEs}</p>
                            <p><FontAwesomeIcon icon={solid('location-dot')} /> {event.typeEs} en {event.sourceNameEs}</p>
                            <p><FontAwesomeIcon icon={solid('door-open')} /> {event.openingHoursEs}</p>
                            <a href={event.purchaseUrlEs}><FontAwesomeIcon icon={solid('ticket')} /> Entradas {event.priceEs}</a>
                        </div>
                    {/* </a> */}
                </article>

            </section>
           
        </div>
        
    </main>

           {/* <p>IdEvento:{event.id}</p>
           <p>nombre:{event.nameEs}</p>
           <p>Tipo:{event.typeEs}</p>
           <p>Fecha:{event.startDate}{event.endDate}</p>
           <p>Lugar:{event.sourceNameEs}</p>
           <p>Precio:{event.priceEs}</p>
           <p>Entradas:{event.purchaseUrlEs}</p>
           <p>Descripcion{event.descriptionEs}</p>
           <p>Municipio:{event.municipalityEs}</p>
           <p>Local:{event.establishmentEs}</p>
           <p>Url del Local:{event.urlEventEs}</p>
           <img src={event.images[0].imageUrl} alt={event.images[0].imageFileName}/>          
           </> */}
           </>
          )};
    
    </>
  )
}
