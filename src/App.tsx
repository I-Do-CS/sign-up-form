import { useId, useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    wantsJoin: true,
  });

  const ID = useId();

  return (
    <>
      <div className="container rounded-xl bg-white p-8 shadow-2xl">
        <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
          {/* Email Address */}
          <label htmlFor={ID + "-email"}>Email Address</label>
          <input
            className="mb-4 rounded border border-black px-2 py-1"
            type="email"
            name="email"
            id={ID + "-email"}
            onChange={handleFormChange}
            value={formData.email}
            required
          />

          {/* Password */}
          <label htmlFor={ID + "-password"}>Password</label>
          <input
            className="mb-4 rounded border border-black px-2 py-1"
            type="password"
            name="password"
            id={ID + "-password"}
            onChange={handleFormChange}
            value={formData.password}
            required
          />

          {/* Confirm Password */}
          <label htmlFor={ID + "-confirmPassword"}>Confirm Password</label>
          <input
            className="mb-4 rounded border border-black px-2 py-1"
            type="password"
            name="confirmPassword"
            id={ID + "-confirmPassword"}
            onChange={handleFormChange}
            value={formData.confirmPassword}
            required
          />

          {/* Join Checkbox */}
          <div className="flex flex-row items-center justify-center gap-2">
            <input
              className="accent-purple-700"
              type="checkbox"
              name="wantsJoin"
              id="wantsJoin"
              onChange={handleFormChange}
              checked={formData.wantsJoin}
            />
            <label htmlFor="wantsJoin">
              Do you want to join our newsletter?
            </label>
          </div>

          {/* sign up btn */}
          <button className="mt-4 self-center rounded-md bg-purple-700 px-8 py-2 font-semibold text-white hover:opacity-85 active:bg-cyan-400">
            SIGN UP
          </button>
        </form>
      </div>
    </>
  );

  function handleFormSubmit(e: any): void {
    e.preventDefault();

    const { password, confirmPassword, wantsJoin } = formData;
    if (password === confirmPassword) {
      console.log(
        "Successfully signed up." +
          (wantsJoin ? " Thanks for also signing up for our newsletter!" : ""),
      );

      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        wantsJoin: true,
      });
    } else {
      console.log("Passwords do not match! Try again.");
    }
  }

  function handleFormChange(e: any): void {
    const { name, value, type, checked } = e.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
}

export default App;
