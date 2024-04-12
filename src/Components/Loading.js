import React from 'react'

const Loading = () => {
  return (
    <>
    <div class="flex justify-center m-10">
    <div class="relative">
        <div class="h-12 w-12 rounded-full border-t-2 border-b-2 border-gray-200"></div>
        <div class="absolute top-0 left-0 h-12 w-12 rounded-full border-t-8 border-b-8 border-red-500 animate-spin">
        </div>
    </div>
</div>
    </>
  )
}

export default Loading