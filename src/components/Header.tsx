import { Link } from "react-router";


const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">
        <Link to="/">TodoApp</Link>
      </div>

      {/* Navigation */}
      <nav className="space-x-6">
        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 transition duration-200"
        >
          Home
        </Link>
        <Link
          to="/users"
          className="text-gray-700 hover:text-blue-600 transition duration-200"
        >
          Users
        </Link>
        <Link
          to="/task"
          className="text-gray-700 hover:text-blue-600 transition duration-200"
        >
          Task
        </Link>
      </nav>
    </header>
  );
};

export default Header;
