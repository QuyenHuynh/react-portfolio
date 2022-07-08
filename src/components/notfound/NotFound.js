import React, { useEffect } from "react";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/home");
        }, 1000);
    }, [navigate]);
        return (
            <>
                404 Not Found
            </>
        );
    }

export default NotFound;