// Note: Header component for the layout of the website

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="logo">
                <h1 className="text-2xl font-bold">Accommodation</h1>
            </div>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#rooms" className="hover:text-gray-400">Rooms</a></li>
                    <li><a href="#mansion" className="hover:text-gray-400">Mansion</a></li>
                    <li><a href="#countryside" className="hover:text-gray-400">Countryside</a></li>
                </ul>
            </nav>
            <div className="flex items-center space-x-2">
                <input type="text" placeholder="Search..." className="p-2 rounded-md" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
            </div>
            <div className="flex space-x-2">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
            </div>
        </header>
    );
};

export default Header;