import React from 'react'

const ProfileView = ({ profile, goBack, deleteProfile }) => {
  // console.log(profile.skills.split(','))
  return (
    <div className='space-y-4'>
      <div className='rounded-lg border border-gray-200 bg-white p-6'>
        {
          profile.avatar ? 
            <img src={profile.avatar} alt={profile.name} className='h-24 w-24 rounded-full' />
          
          : 

            <div className='flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-4xl font-semibold text-blue-700'>
              { profile.name.charAt(0).toUpperCase() }
            </div>
        }
        <h2 className='font-semibold text-2xl text-gray-900 mt-3'>{profile.name}</h2>
        <p className='text-gray-800'>{profile.role}</p>
        <p className='text-gray-500 text-sm'>{profile.location} · {profile.email}</p>

        <div className='mt-4 flex gap-2'>
          <button onClick={goBack} className='rounded-full border border-blue-700 px-4 py-1 text-sm font-semibold text-blue-700 hover:bg-blue-700 hover:text-white'>
            Back to profiles
          </button>
          <button onClick={() => deleteProfile(profile.id)} className='rounded-full border border-red-700 px-4 py-1 text-sm font-semibold text-red-700 hover:bg-red-700 hover:text-white'>
            Delete profile
          </button>
        </div>
      </div>

      <div className='rounded-lg border border-gray-200 bg-white p-6'>
        <h3 className='mb-3 text-lg font-semibold text-gray-900'>About</h3>
        <p className='text-gray-700'>{profile.about}</p>
      </div>

      <div className='rounded-lg border border-gray-200 bg-white p-6'>
        <h3 className='mb-3 text-lg font-semibold text-gray-900'>Skills</h3>
        <div className='flex flex-wrap gap-2'>
          {
            profile.skills.split(',').map( skill => (
               <span key={skill} className='rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700' >
                {skill.trim()}
              </span>
            ))
          }
        </div>
      </div>



    </div>
  )
}

export default ProfileView