import { useState } from "react";
import { authModalState } from "../../atoms/authModal"
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

const AuthModal = () => {
    const navigate = useNavigate();
    const [modalState, setModalState] = useRecoilState(authModalState);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSignUp = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
        navigate("/signup")
    }

    return (
        <>
            {modalState.open && (
                <div className="max-w-4xl mx-auto flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-gray-100/40 focus:outline-none">
                    <div className="my-5 mx-auto w-4/5 sm:w-1/2 bg-white flex flex-col rounded-xl shadow-lg outline-none">
                        <div className="flex flex-row items-center justify-between mx-4 px-4 py-10 border-b">
                            <p className="text-2xl lg:text-3xl font-semibold text-gray-500 tracking-wider">Log In</p>
                            <div
                                className="cursor-pointer"
                                onClick={handleClose}
                            >
                                <p className="text-2xl text-gray-400 font-bold pr-4 hover:text-amber-500">✕</p>
                            </div>
                        </div>
                        <form className="py-6 px-10">
                            <div className="w-full mx-auto flex flex-col gap-6 py-10">
                                <div className="w-full flex flex-col gap-2">
                                    <label
                                        htmlFor="email"
                                        className="text-gray-600 font-bold uppercase tracking-wide"
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
                            </div>
                            <div className="flex flex-col items-center justify-center pt-10 pb-6 px-1 border-t boder-slate-200">
                                <button className="mx-auto bg-violet-400 text-white font-bold uppercase px-8 py-3 rounded-lg shadow hover:shadow-lg hover:opacity-90 outline-none tracking-wide ease-linear transition-all duration-150">Log In</button>
                                <p className="text-teal-600 text-center pt-5 cursor-pointer hover:underline underline-offset-4 decoration-2 decoration-teal-500"
                                    onClick={handleSignUp}
                                >
                                    Request to become a member
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default AuthModal