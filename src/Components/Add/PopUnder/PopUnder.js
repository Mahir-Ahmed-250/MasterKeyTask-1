import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './PopUnder.css'
import img from "../images/2.png"
const PopUnder = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='container pop'>
            <div className='row'>
                <div className='col-md-6 mt-5 pop-img'>
                    <img className='w-100 ' onClick={() => setModalShow(true)} src={img} alt="" />
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <h5 className='native-text'>ㅤ</h5>
                </div>

                <div className='col-md-6 my-auto'>
                    <h2 className='text-center join'>Join With Us!</h2>

                </div>
                <div className='col-md-6 mt-5'>

                </div>

                <div className='col-md-6 my-auto'>
                    <h5 className='learn'>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 2 18 15">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                    </svg></h5>
                </div>

            </div>
        </div>
    );
};

export default PopUnder;

function MyVerticallyCenteredModal(props) {
    return (
        <Modal

            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>

            </Modal.Header>
            <Modal.Body className='row ' >
                <div className='col-md-6'>
                    <img className='w-100' src="https://appsgeyser.com/blog/wp-content/uploads/2020/10/telegram-advertising.png" alt="" />

                </div>
                <div className='col-md-6 m-auto'><h2 className='join'>Join Us</h2></div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' className='w-25 fs-3' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

