import ChatInterface from "./chat/ChatInterface";
import SideNav from "./navbar/SideNav";

const Playground = () => {
  return (
    <div className="flex h-screen pt-16 bg-gray-100">
      <SideNav />
      <div className="flex-1 ml-64 flex flex-col">
        <ChatInterface />
      </div>
    </div>
  );
};

export default Playground;
