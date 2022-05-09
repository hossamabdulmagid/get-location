import {useState, useEffect} from "react";
import Carousel from 'react-bootstrap/Carousel'

const GetLocation = () => {
    const [postioni, setPostion] = useState({latitude: '', longitude: ""});

    useEffect(() => {

        navigator.geolocation.getCurrentPosition((position) => {
            setPostion({
                ...postioni,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            })
            console.log("Latitude is    :", position.coords.latitude);
            console.log("Longitude is   :", position.coords.longitude);
        })

        return () => {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position, `your position is here`)
            });
        }

    }, [])

    return (
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col-xs-12'}>

                    <Carousel aria-hidden="true">
                        <Carousel.Item>
                            <img
                                src={"https://picsum.photos/800/590?t=" + Math.floor(Math.random() * 10000) + ""}
                                alt="first slide"
                            />

                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={"https://picsum.photos/800/590?t=" + Math.floor(Math.random() * 10000) + ""}
                                alt="second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item>

                            <img
                                src={"https://picsum.photos/800/590?t=" + Math.floor(Math.random() * 10000) + ""}
                                alt="third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default GetLocation;

