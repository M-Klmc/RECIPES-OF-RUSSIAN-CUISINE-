"use client";

import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { ReactNode } from "react";

interface IProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    children: ReactNode;
}

const CustomModal = ({ isOpen, onClose, title, size, children }: IProps) => {
    return (
        <Modal     isOpen={isOpen} 
    onClose={onClose} 
    size={size}
    backdrop="blur"  // добавляем затемнение
    scrollBehavior="inside"  // прокрутка внутри модалки
    motionProps={{
        variants: {
            enter: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.9 }
        }
    }}>
            <ModalContent>
                <ModalHeader className="border-b">
                    <h3 className="space-y-4 py-6">{title}</h3>
                </ModalHeader>
                <ModalBody className="space-y-4 py-6">
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default CustomModal;