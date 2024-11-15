import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, login } from '../../actions/userActions';
import MetaData from '../layouts/MetaData';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
// import './Login.css'; // Import the CSS file for styling

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { loading, error, isAuthenticated } = useSelector(state => state.authState);
    const redirect = location.search ? '/' + location.search.split('=')[1] : '/';

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 5000); // Show modal after 5 seconds

        if (isAuthenticated) {
            navigate(redirect);
        }

        if (error) {
            toast(error, {
                position: toast.POSITION.BOTTOM_CENTER,
                type: 'error',
                onOpen: () => { dispatch(clearAuthError()) }
            });
        }

        return () => clearTimeout(timer);
    }, [error, isAuthenticated, dispatch, navigate]);

    return (
        <Fragment>
            <MetaData title={`Login`} />

            <Modal className=" wrapper" show={showModal} onHide={() => setShowModal(false)} centered>
                <div className="custom-close-button" onClick={() => setShowModal(false)}>×</div>
                
                <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={submitHandler} className="shadow-lg p-4">
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        {/* <Link to="/password/forgot" className="d-block mt-3 mb-4 text-end">Forgot Password?</Link> */}

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-100 py-2"
                            disabled={loading}
                        >
                            LOGIN
                        </Button>

                        <Link to="/register" className="d-block mt-3 text-end">New User?</Link>
                    </form>
                </Modal.Body>
            </Modal>
            <style>
                {`/* Login.css */
                /* Login.css */

/* Custom close button */
.custom-close-button {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
}

.custom-close-button:hover {
    color: #ff0000;
}

/* Align the form to the top */
.modal-body-top {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 0; /* Remove top padding for tight alignment */
    
}
    .wrapper{
    margin-top:-60px;}

.top-aligned-form {
    width: 100%;
}



`}
            </style>
        </Fragment>
    );
}
