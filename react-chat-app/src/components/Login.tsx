import { useState } from "react";
import client from "../feathers.tsx";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const login = () => {
    console.log(email, password);
    client.authenticate({
      strategy: "local",
      email,
      password,
    });
  };
  const signup = () => {
    client.service("users").create({ email, password, firstName, lastName });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form className="w-1/3 min-h-1/3 flex flex-col gap-2 border rounded-xl p-3">
        <div className="flex justify-between gap-2">
          <input
            className="border px-3 py-2 w-full rounded-lg"
            type="text"
            value={firstName}
            name="firstName"
            placeholder="firstName"
            onChange={(e) => setFirstName(e?.target?.value?.trim())}
          />

          <input
            className="border px-3 py-2 w-full rounded-lg"
            type="text"
            name="lastName"
            value={lastName}
            placeholder="lastName"
            onChange={(e) => setLastName(e?.target?.value?.trim())}
          />
        </div>
        <input
          className="border px-3 py-2 w-full rounded-lg"
          type="email"
          value={email}
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e?.target?.value?.trim())}
        />

        <input
          className="border px-3 py-2 w-full rounded-lg"
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e?.target?.value?.trim())}
        />

        <button
          type="button"
          className="rounded px-3 py-2 bg-sky-600 text-white hover:bg-white border border-sky-600 hover:border hover:border-sky-600 hover:text-sky-600 transition box-content"
          onClick={login}
        >
          Log in
        </button>

        <button
          type="button"
          className="rounded px-3 py-2 bg-white text-sky-600 border border-sky-600 hover:bg-sky-600 hover:text-white transition box-content"
          onClick={signup}
        >
          Signup
        </button>
      </form>
    </div>
  );
};
export default Login;
