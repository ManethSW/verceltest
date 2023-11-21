"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import LogRegBackground from '../components/LogRegBackground/LogRegBackground'
import RegisterSelectUser from '../components/RegisterSelectUser/RegisterSelectUser'
import RegisterGeneralDetails from '../components/RegisterGeneralDetails/RegisterGeneralDetails'

const Page = () => {
  const [stage, setStage] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);

  const renderStage = () => {
    switch(stage) {
      case 0:
        return <RegisterSelectUser onNext={() => setStage(1)} selectedUser={selectedUser} setSelectedUser={setSelectedUser} />;
      case 1:
        return <RegisterGeneralDetails selectedUser={selectedUser} />;
      default:
        return <RegisterSelectUser setStage={setStage} />;
    }
  }

  return (
    <div className={styles.container}>
      <LogRegBackground />
      {renderStage()}
    </div>
  )
}

export default Page