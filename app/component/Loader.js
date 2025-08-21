import React from 'react'

export default function Loader() {
    return (
        <div>
            <div className="w-full h-full flex justify-center items-center">
                <div className="absolute animate-spin h-16 w-16 rounded-full  border-t-4 border-b-4 border-red-500 ">
                </div>
                <div className="absolute animate-spin h-14 w-14 rounded-full  border-t-4 border-b-4 border-purple-500 ">
                </div>
                <div className="absolute animate-spin h-12 w-12 rounded-full  border-t-4 border-b-4 border-pink-500 ">
                </div>
                <div className="absolute animate-spin h-10 w-10 rounded-full border-t-4 border-b-4 border-yellow-500">
                </div>
                <div className="absolute animate-spin h-8 w-8 rounded-full border-t-4 border-b-4 border-green-500"></div>
                <div className="absolute animate-spin h-6 w-6 rounded-full border-t-4 border-b-4 border-blue-500"></div>
                <div
                    className="rounded-full h-28 w-28 animate-bounce flex items-center justify-center text-gray-100 font-semibold text-xl ">
                    Loading...</div>

            </div>

        </div>
    )
}
