/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import Loader from '../component/Loader';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';

const AppDataContext = createContext();

export const useAppData = () => useContext(AppDataContext);

export const AppDataProvider = ({ children }) => {

    const VITE_SERVER_API = process.env.NEXT_PUBLIC_SERVER_API;

    const [info, setInfo] = useState(null);
    const [profileLinks, setProfileLinks] = useState(null);
    const [projects, setProjects] = useState(null);
    const [experience, setExperience] = useState(null);
    const [skills, setSkills] = useState(null);
    const [technologies, setTechnologies] = useState(null);
    const [loading, setLoading] = useState(true);


    // Fetch Info data
    const fetchInfo = async () => {
        try {
            const response = await fetch(`${VITE_SERVER_API}/info`);
            const data = await response.json();
            setInfo(data[0]);
            // console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };


    // Fetch profileLinks data
    const fetchProfileLinks = async () => {
        try {
            const response = await fetch(`${VITE_SERVER_API}/profiles`);
            const data = await response.json();
            setProfileLinks(data[0]);
            // console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };


    // Fetch Projects data
    const fetchProjects = async () => {
        try {
            const response = await fetch(`${VITE_SERVER_API}/project`);
            const data = await response.json();
            setProjects(data);
            // console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Fetch Experience data
    const fetchExperience = async () => {
        try {
            const response = await fetch(`${VITE_SERVER_API}/experience`);
            const data = await response.json();
            setExperience(data);
            // console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Fetch Technologies data
    const fetchSkills = async () => {
        try {
            const response = await fetch(`${VITE_SERVER_API}/skill`);
            const data = await response.json();
            setSkills(data);
            // console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    // Fetch Technologies data
    const fetchTechnologies = async () => {
        try {
            const response = await fetch(`${VITE_SERVER_API}/technology`);
            const data = await response.json();
            setTechnologies(data);
            // console.log(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const fetchAllData = async () => {
        setLoading(true);
        await Promise.all([fetchInfo(), fetchProfileLinks(), fetchProjects(), fetchExperience(), fetchSkills(), fetchTechnologies()]);
        setLoading(false);
    };

    useEffect(() => {
        fetchAllData();
    }, []);


    return (
        <AppDataContext.Provider value={{ info, profileLinks, projects, experience, skills, technologies }}>
            <>
                {loading ? <div className='w-screen h-screen flex justify-center items-center'><Loader /></div> : (
                    <div className="flex lg:flex-row md:flex-row flex-col lg:gap-6 gap-4 lg:p-10 p-4   min-h-screen overflow-y-hidden lg:w-[90%] m-auto">
                        <Sidebar className={"lg:flex md:flex hidden"} info={info} profileLinks={profileLinks} />
                        <div className="lg:w-[80%] md:w-full bg-[#1E1E1F] rounded-xl border-[1px] border-[#282829] relative max-h-full min-h-full overflow-y-scroll custom-scrollbar">
                            <div className="w-full">
                                <div className="lg:mb-0 mb-8"><Navbar /></div>
                                {children}
                            </div>
                        </div>
                    </div>
                )}
            </>
        </AppDataContext.Provider>
    );
};
