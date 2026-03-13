"use client";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-flex min-h-screen bg-[#fbf7f0]">
            <h1 className="text-8xl font-bold text-[#8B4513]">404</h1>
            <h2 className="text-3xl mt-4 text-[#582c0d]">Page Not Found</h2>
            
            <div className="pt-6">
                <Button 
                    as={Link}
                    href="/"
                    className="rounded-md bg-[#B22222] text-[#FDF5E6] shadow-md hover:bg-[#8B0000] hover:scale-105 transition-all duration-300 font-bold px-6 py-2"
                >
                    Return to Main Page
                </Button>
            </div>
        </div>
    );
}