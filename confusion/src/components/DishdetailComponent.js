import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



const Dishdetail = (props) => {
    const dish = props.dish;

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
                                -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                            </div>
                        </div>
                    </li>
                </div>
            );
        });

    }



    return dish ? (
        <div className='container'>
            <div className="row">
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
                    <div className='h2'>Comments</div>
                    <ul className="list-unstyled">
                        {commentsView}
                    </ul>
                </div>
            </div>

        </div>
    ) : <div></div>


}

export default Dishdetail;