import Header from "./components/Header";

const App = () => {
  const users = [{ name: "Manish" }, { name: "John" }, { name: "Jane" }];
  const isLoggedIn = true;
  return (
    <>
      <p className="text-4xl bg-red-400">
        This is message to test commit lint.
      </p>
      <Header
        isLoggedIn={isLoggedIn}
        messages={"This is a prop message from App.jsx"}
        users={users}
      />
    </>
  );
};

export default App;
