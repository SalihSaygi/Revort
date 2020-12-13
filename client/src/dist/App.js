"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var LandingPage_1 = require("./compenents/LandingComponents/LandingPage");
// import Navbar from './compenents/common/Navbar'
// import RegisterPage from './compenents/Sign/RegisterPage'
var UserForm_1 = require("./compenents/Sign/Multi-Step-Registration/UserForm");
var AdminDashboard_1 = require("./compenents/AdminDashboard");
// import useLocalStorage from './hooks/useLocalStorage';
var MessageComp_1 = require("./compenents/Message/MessageComp");
var MapPage_1 = require("./compenents/MapPage");
var RequestCreate_1 = require("./compenents/CRUDs/Requests/RequestCreate");
var ContentPage_1 = require("./compenents/ContentPage");
var ErrorPage_1 = require("./compenents/ErrorPage");
var App = function () {
    return (react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement(react_router_dom_1.Switch, null,
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/", exact: true, component: LandingPage_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/admin-dashboard", exact: true, component: AdminDashboard_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/message", exact: true, component: MessageComp_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/register", exact: true, component: UserForm_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/reports/create", exact: true, component: RequestCreate_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/map", exact: true, component: MapPage_1["default"] }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/dashboard", exact: true, compenent: ContentPage_1.ContentPage }),
                react_1["default"].createElement(react_router_dom_1.Route, { path: "/error", exact: true, component: ErrorPage_1["default"] })))));
};
exports["default"] = App;
