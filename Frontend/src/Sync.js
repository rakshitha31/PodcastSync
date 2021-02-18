const Sync = (props) => {
    return (
        <div className="relative flex w-full flex-wrap items-stretch mb-3 md:mt-4 md:ml-4 md:mr-4">
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fa fa-link"></i>
            </span>
            <input type="text" placeholder="Placeholder" className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"/>
        </div>
    );
};

export default Sync;