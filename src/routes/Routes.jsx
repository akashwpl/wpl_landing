import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom"
import LandingPage from '../pages/LandingPage'
import LeaderBoardPage from '../pages/LeaderBoardPage'
import LearnMorePage from '../pages/LearnMorePage'


const RoutesPublic = () => {
  return (
    <Routes>
        <Route path={'/'} element={<LandingPage />} />
        <Route path={'/learnmore'} element={<LearnMorePage />} />
        <Route path={'/leaderboard'} element={<LeaderBoardPage />} />
    </Routes> 
    )
}

export default RoutesPublic