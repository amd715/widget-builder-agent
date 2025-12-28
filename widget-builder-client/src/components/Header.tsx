import Logo from "./iocons/Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-indigo-600 z-50">
      <div className="max-w-full px-6">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo and App Name */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center h-20 w-20">
              <Logo />
            </div>

            <span className="text-xl font-semibold text-white">
              Widget generator
            </span>
          </div>

          {/* Right side - Sign in */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-white hover:text-indigo-200 text-sm font-medium underline"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
