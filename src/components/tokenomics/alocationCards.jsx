import React from 'react'

const AlocationCards = ({ title, percent }) => {
    return (
        <div className="p-6 rounded-[32px] shadow-md text-center" style={{background: "#00000080"}}>
            <h2 className="text-white font-bold text-[48px] leading-[60px] font-bold">{percent}%</h2>
            <div className="font-bold text-[24px] leading-[29px] text-[#F8672C]">{title}</div>
        </div>
    )
}

export default AlocationCards