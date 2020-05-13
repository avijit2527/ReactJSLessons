import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.selectedDish)
        const dish = this.props.selectedDish;

        if (dish) {
            var commentsView = dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <li>
                            <div className='row m-1'>
                                {comment.comment}
                            </div>
                            <div className='row m-1'>
                                <div>
                                    -- {comment.author}, {comment.date}
                                </div>
                            </div>
                        </li>
                    </div>
                );
            });

        }



        return dish ? (
            <>
                <div className="col col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col col-12 col-md-5 m-1">
                    <div className='h2'>comments</div>
                    <ul className="list-unstyled">
                        {commentsView}
                    </ul>
                </div>
            </>
        ) : <div></div>
    }
}

export default Dishdetail;