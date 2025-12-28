import Header from "./Header";
import Playground from "./playground/Playground";

const Layout = () => {
  return (
    <div className="min-h-screen dark:bg-gray-800">
      <Header />
      <Playground />
    </div>
  );
};

export default Layout;
