import React, {Component} from "react"
import NewSingle from "./NewSingle"
import {Card, Button, Container, CardGroup, Col, Grid, Row} from "react-bootstrap";


class News extends Component{
    state={
     news: [],
        };
    

    componentDidMount () {
        const url ="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=9208243d5ab8480faa1bd825739742a4";
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                news: data.articles
            })
        })
        .catch((errors) => console.log(errors))
    }


    // renderItems() {
    //     return this.state.news.map((item) => (
    //         <NewSingle key={item.url} item={item} />
    //     ));
    // }

render() {
    return <Row >

            {this.state.news.map((item) => <NewSingle key={item.url} item={item} />
        )}
       </Row>

    
}
}
export default News


