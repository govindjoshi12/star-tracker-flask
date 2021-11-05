import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { Loading } from './Loading';
import Star from "./Star";

class StarContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            numResults: 0
        }
    }

    componentDidMount() {
        this.getStars();
    }

    async getStars() {
        let url = "http://localhost:8081/stars"
        let stars = [];
        await fetch(url, { method: "GET"}).then(response => {
            return response.json();
        }).then(response => {
            console.log(response.data)
            stars = response.data
        });

        this.setState({ data: stars });
    }

    createStars() {
        return (
            <Row>
                {this.state.data.map(star => (
                    <Col key={star.id}>
                        <Star 
                            key={star.id}
                            title={star.title}
                            desc={star.desc}
                            subj={star.subj}
                            color={star.color}
                            qty={star.qty}
                            time={star.time} />
                    </Col>
                ))}
            </Row>
        )
    }

    render() {
        /* Centered Spinner in side of Container/Row/Col */
        /* TODO: Make container height = 100% - navbar height */
        return (
            <Container className="h-100">
                {this.state.data ? this.createStars()
                    // : this.state.numResults === 0 ? <strong>No Stars...</strong>
                    : ( <Row className="h-100 align-items-center"><Col className="text-center"><Loading /></Col></Row> )}
            </Container>
        )
    }
}

export default StarContainer;