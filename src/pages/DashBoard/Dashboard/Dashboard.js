import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddProducts from '../../AddProducts/AddProducts';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import ManageOrders from '../../ManageOrders/ManageOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProducts from '../ManageProducts/ManageProducts';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './Dashboard.css'


const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin, logOut } = useAuth()
    return (
        <div className="container-fluid" >
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline">Menu</span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

                            <li>
                                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline"></span> </a>
                                <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                    {admin && <ul>

                                        <li>
                                            <Link className="decorations" to={`${path}/manageAllOrders`}>Manage All Orders</Link>
                                        </li>

                                        <li>
                                            <Link className="decorations" to={`${path}/makeAdmin`}>Make Admin</Link>
                                        </li>

                                        <li>
                                            <Link className="decorations" to={`${path}/addProduct`}>Add A Product</Link>
                                        </li>

                                        <li>
                                            <Link className="decorations" to={`${path}/manageProducts`}>Manage Product</Link>
                                        </li>
                                    </ul>}
                                    <li>
                                        <Link className="decorations" to={`${path}/pay`}>Pay</Link>
                                    </li>
                                    <li>
                                        <Link className="decorations" to={`${path}/review`}>Review</Link>
                                    </li>

                                    <li className="w-100">
                                        <Link className="decorations" to={`${path}/manageOrders`}>Manage Orders</Link>
                                    </li>


                                </ul>
                                {
                                    user?.email ? <div><p>{user.displayName}</p> <button onClick={logOut} className='btn link btn-dark text-white'>LogOut</button></div>
                                        : <Link to='/login'><button className='btn link btn-danger'>LogIn</button></Link>
                                }
                            </li>





                        </ul>
                        <hr />
                        <div className="dropdown pb-4">

                        </div>
                    </div>
                </div>
                {/* Nested Route */}
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProducts></AddProducts>
                    </Route>

                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                </Switch>

            </div>
        </div>
    );
};

export default Dashboard;