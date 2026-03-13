"use client";
import React from "react";
import CustomModal from "@/app/components/common/modal";
import RegisterForm from "@/forms/register.form";

interface IProps {
    isOpen: boolean;   
    onClose: () => void;
}

const RegisterModal = ({ isOpen, onClose }: IProps) => {
    return (
        <CustomModal isOpen={isOpen} onClose={onClose} title="Register">
            <RegisterForm onClose={onClose}/>
        </CustomModal>
    );
}

export default RegisterModal;