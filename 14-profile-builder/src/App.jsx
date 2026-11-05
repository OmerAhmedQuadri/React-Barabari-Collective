import { useState, useEffect } from "react"
import Navbar from './components/Navbar'
import ProfileForm from './components/ProfileForm'
import ProfileView from './components/ProfileView'
import ProfileList from './components/ProfileList'

const App = () => {
  // pages = create | profiles
  const [page, setPage] = useState('profiles')
  const [profiles, setProfiles] = useState(() => JSON.parse(localStorage.getItem('PROFILES')) || [])
  const [selectedProfile, setSelectedProfile] = useState(null)


  useEffect(() => {
    localStorage.setItem('PROFILES', JSON.stringify(profiles))
  }, [profiles])


  const addProfile = (profile) => {
    setProfiles([...profiles, { ...profile, id: Date.now() }])
    console.log('profile added: ')
    console.log(profiles)
  }

  // {
  //   id: id,
  //   name: name,
  //   email: email,
  //   role: role,
  //   skills: skills
  // }
  // {
  //   id: id,
  //   profile: {
  //      name: name,
  //      email: email,
  //      role: role,
  //      skills: skills
  // }
  // }

  const deleteProfile = (id) => {
    const filteredProfiles = profiles.filter(p => p.id != id)
    setProfiles(filteredProfiles)
    setSelectedProfile(null)

  }


  const showPage = (name) => {
    if(name == 'create' || name == 'profiles')
      setPage(name)
  }



  return (
    <div className="min-h-screen bg-stone-100">
      <Navbar page={page} showPage={showPage}/>

      <main className="mx-auto max-w-3xl p-4 sm:p-6">
        { page == 'create' && <ProfileForm addProfile={addProfile} /> }

        { page == 'profiles' && !selectedProfile && <ProfileList selectProfile={setSelectedProfile} profiles={profiles} /> }

        { page == 'profiles' && selectedProfile && <ProfileView profile={selectedProfile} goBack={() => setSelectedProfile(null)}  deleteProfile={deleteProfile} /> }
      </main>
    </div>
  )
}

export default App