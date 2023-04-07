import { useState } from "react"
import Navbar from "../components/Navbar"

const SignUp = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value,
        })
    }

    return (
        <>
            <Navbar />
            <div>
                <div className="w-full text-center pt-14 pb-4">
                    <h1 className="text-2xl font-medium tracking-wider leading-relaxed">Sign Up</h1>
                    <p className="pt-4 w-2/3 mx-auto">By signing up, you confirm that you are part of the queer ESEA community or an ally, intending to share details of any event you may host or organise that may be relevant for the community.</p>
                </div>
                <div className="py-10">
                    <form className="max-w-4xl w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto flex flex-col gap-6 bg-white py-12 px-6 rounded-xl">
                        <div className="w-full mx-auto flex flex-col justify-center">
                            <label
                                htmlFor="name"
                                className="text-gray-600 font-bold uppercase tracking-wide mb-2"
                            >
                                Name of Organisation
                            </label>
                            <p className="pt-1 pb-3 text-gray-700">If independent artist or organiser, the name you would like to appear alongside any event you may want to share</p>
                            <input
                                className="w-full bg-gray-200 text-gray-600 md:text-lg border border-gray-200 p-4 leading-tight rounded-lg appearance-none focus:bg-white focus:border-gray-500"
                                id="name"
                                name="name"
                                placeholder="BAQC ESEA"
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label
                                htmlFor="email"
                                className="text-gray-600 font-bold uppercase tracking-wide mb-2"
                            >
                                Email Address
                            </label>
                            <input
                                className="w-full bg-gray-200 text-gray-600 md:text-lg border border-gray-200 p-4 leading-tight rounded-lg appearance-none focus:bg-white focus:border-gray-500"
                                id="email"
                                name="email"
                                type="text"
                                placeholder="example@email.com"
                                autoComplete="example@email.com"
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label
                                htmlFor="password"
                                className="text-gray-600 font-bold uppercase tracking-wide mb-2"
                            >
                                Password
                            </label>
                            <input
                                className="w-full bg-gray-200 text-gray-600 md:text-lg border border-gray-200 p-4 leading-tight rounded-lg appearance-none focus:bg-white focus:border-gray-500"
                                id="password"
                                name="password"
                                type="password"
                                placeholder="***********"
                                autoComplete="current-password"
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="w-full flex justify-center mt-4 pt-10 border-t">
                            <button className="mx-auto bg-indigo-400 text-white font-bold uppercase px-8 py-3 rounded-lg shadow hover:shadow-lg hover:bg-indigo-500 outline-none tracking-wide ease-linear transition-all duration-150">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp