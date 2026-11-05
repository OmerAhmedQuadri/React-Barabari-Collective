import React from 'react'

const ProfileList = ({ profiles, selectProfile}) => {
  return (
    <div>
      <h2>Saved profiles</h2>

      { profiles.length === 0 && (
        <p>No profiles yet. Create a new profile.</p>
      )}

      { profiles.length > 0 && <div className='grid gap-4 sm:grid-cols-2'>
        {
          profiles.map(profile => (
            <button
              key={profile.id}
              onClick={() => selectProfile(profile)}
              className='flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 text-left hover:shadow-md'
            >
              {
                profile.avatar 
                ?
                  <img src={profile.avatar} alt={profile.name} className='h-12 w-12 rounded-full'/>
                :
                  <div className='flex shrink-0 h-12 w-12 bg-blue-100 items-center justify-center rounded-full text-lg font-semibold text-blue-700'>
                    {profile.name.charAt(0)}
                  </div>
              }
              <div>
                <h3 className='font-semibold text-gray-900'>{profile.name}</h3>
                <p className='text-sm text-gray-700'>{profile.role}</p>
                <p className='text-sm text-gray-500'>{profile.location}</p>
              </div>
            </button>
          ))
        }
      </div> }
    </div>
  )
}

export default ProfileList

