import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './TinderCards.css';

function TinderCards() {
    const [plant, setPlant] = useState([]);
    // const plant = [];
    // plant.push('lavendar', 'roses')

    // or 
    // setPlant([...plant, 'lavendar', 'roses'])

    useEffect(() => {
        const unsubscribe = database
            .collection("plant")
            .onSnapshot(snapshot => (
                setPlant(snapshot.docs.map(doc => doc.data()))
        ));
        return () => {
            unsubscribe();
        };
        
    }, []);

    return (
        <div>
            <div className="tinderCards__cardContainer">
                {plant.map(leaf => (
                    <TinderCard
                        className="swipe"
                        key={leaf.name}
                        preventSwipe={[ 'up', 'down']}
                    >
                        <div
                            style={{ backgroundImage:`url(${leaf.url})` }} 
                            className="card"
                        >
                            <h3>{leaf.name}</h3>
                            <h4>{leaf.price}</h4>
                        </div>
                    </TinderCard>
                ))}
            </div>    
        </div>
    );
}


export default TinderCards;