import { useAuth } from '@redwoodjs/auth'

import { ModalProvider } from 'src/context/ModalContext'
import TeacherNav from 'src/components/TeacherNav/TeacherNav'
import StudentNav from 'src/components/StudentNav/StudentNav'
import SiteHeader from 'src/components/SiteHeader/SiteHeader'
import Modal from 'src/components/Modal/Modal'

const DashboardLayout = ({ children }) => {
  const { hasRole } = useAuth()

  return (
    <ModalProvider>
      <Modal />
      <div className="w-full h-screen">
        <SiteHeader />
        <div className="flex w-full h-full-minusNav">
          <nav className="w-1/5 h-full bg-white lg:w-dashboard">
            {hasRole('teacher') && <TeacherNav />}
            {hasRole('student') && <StudentNav />}
          </nav>
          <main className="w-4/5 h-full bg-gray-100 lg:w-content overflow-scroll relative">
            {children}
          </main>
        </div>
      </div>
    </ModalProvider>
  )
}

export default DashboardLayout
