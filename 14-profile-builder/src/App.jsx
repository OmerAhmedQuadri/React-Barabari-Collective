import { useState, useEffect } from "react"
import Navbar from './components/Navbar'
import ProfileForm from './components/ProfileForm'
import ProfileView from './components/ProfileView'
import ProfileList from './components/ProfileList'

const App = () => {
  // pages = create | profiles
  const [page, setPage] = useState('create')
  const [profiles, setProfiles] = useState(() => JSON.parse(localStorage.getItem('PROFILES')) || [])


  useEffect(() => {
    localStorage.setItem('PROFILES', JSON.stringify(profiles))
  }, [profiles])


  const addProfile = (profile) => {
    setProfiles([...profiles, { profile, id: Date.now() }])

  }

  const deleteProfile = (id) => {
    const filteredProfiles = profiles.filter(p => p.id != id)
    setProfiles(filteredProfiles)

  }


  const showPage = (name) => {
    setPage(name)
  }

  return (
    <div className="min-h-screen bg-stone-100">
      <Navbar page={page} showPage={showPage}/>

      <main>
        
      </main>
    </div>
  )
}

export default App