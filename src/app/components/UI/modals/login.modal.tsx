"use client";
import React from "react";
import CustomModal from "@/app/components/common/modal";
import LoginForm from "@/forms/login.form";

interface IProps {
    isOpen: boolean;   
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: IProps) => {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} title="Login">
            <LoginForm onClose={onClose}/>
        </CustomModal>
    );
}

export default LoginModal;