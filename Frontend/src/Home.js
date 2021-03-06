function Home() {
  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div class="mzax-w-md mx-auto">
            <div class="flex items-center space-x-5">
              
              <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 class="leading-relaxed">Listen to Songs/Podcast</h2>
                <p class="text-sm text-gray-500 font-normal leading-relaxed">
                  With cutu :P
                </p>
              </div>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="flex flex-col"> 
                  <label class="leading-loose">Username</label>
                  <input
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="What should we call you?"
                  />
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Room Name</label>
                  <input
                    type="text"
                    class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                    placeholder="Name your room"
                  />
                </div>
                
              </div>
              <div class="pt-4 flex items-center space-x-4">
              <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  Create
                </button>
                <button class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                  Join Room 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
