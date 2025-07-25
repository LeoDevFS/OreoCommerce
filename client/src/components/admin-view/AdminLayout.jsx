import React from 'react'

const AdminLayout = () => {
  return (
    <div className='flex min-h-screen w-full'>
        {/* admin sidebar */}
        <div className="flex flex-1 flex-col">
            {/* Admin Header */}
            <main className=' flex-1 flex bg-muted/40 p-4 md:p-6'>
                <Outlet/>
            </main>
        </div>
        </div>
  )
}

export default AdminLayout