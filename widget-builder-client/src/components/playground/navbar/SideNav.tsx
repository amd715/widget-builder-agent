import ChatIcon from "../../iocons/ChatIcon";
import PaperPensileIcon from "../../iocons/PaperPensil";

const SideNav = () => {
  return (
    <nav className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-gray-300 p-4">
      <div className="flex flex-col space-y-2">
        {/* Item 1 - Active */}
        <button className="flex items-center space-x-3 px-4 py-3 text-indigo-600 cursor-pointer">
          <PaperPensileIcon />
          <span className="font-medium">Create new chat</span>
        </button>

        {/* Item 2 */}
        <button className="flex items-center space-x-3 px-4 py-3 text-indigo-600">
          <ChatIcon />
          <span className="font-medium">Chat History</span>
        </button>
      </div>
    </nav>
  );
};

export default SideNav;
