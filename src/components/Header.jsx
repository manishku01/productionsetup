const Header = ({ isLoggedIn, messages, users }) => {
  return (
    <>
      <div className={isLoggedIn ? "text-green-500" : "text-red-500"}>
        <ul className="text-2xl bg-blue-400">
          {users.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        <p className="text-4xl bg-red-400">{messages}</p>
      </div>
    </>
  );
};

export default Header;
