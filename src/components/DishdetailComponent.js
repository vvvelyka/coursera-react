import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends React.Component {

    renderDish(dish) {
        return (
            <div className="col-12 col-md-5 m-3">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }


    renderComments(comments) {
        if (comments != null) {
            return (
                <div className="col-12 col-md-5 m-3">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((item) => (
                            <li key={item.id}>
                                <p>{item.comment}</p>
                                <p>--{item.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(item.date)))}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }

    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

}

export default DishDetail