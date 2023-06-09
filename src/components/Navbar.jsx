import { MdAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { authModalState } from "../atoms/authModal";
import { userState } from "../atoms/userAtom";
import { FaUserCircle } from "react-icons/fa";
import AuthModal from "./User/AuthModal";

const Navbar = () => {
    const navigate = useNavigate();
    const setAuthModalState = useSetRecoilState(authModalState);
    const [userStateValue] = useRecoilState(userState);

    const handleAddEvent = () => {
        if (!userStateValue.name) {
            setAuthModalState({
                open: true,
                view: "login"
            });
        } else {
            navigate("/add-event")
        }
    }

    return (
        <>
            <AuthModal />
            <div className="w-full px-6 sm:px-10 py-4 md:py-6 border-b border-gray-200">
                <div className="max-w-7xl flex flex-row items-center justify-between mx-auto">
                    <Link to="/">
                        <p className="tracking-wide text-lg font-medium md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-rose-400">Queer ESEA Events</p>
                    </Link>
                    {userStateValue.name ? (
                        <>
                            <div>
                                <FaUserCircle className="text-2xl" />
                            </div>
                        </>
                    ) : (
                        <div className="bg-white rounded-full p-3 cursor-pointer hover:bg-indigo-400 hover:text-white">
                            <MdAdd
                                className="text-xl"
                                onClick={handleAddEvent}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Navbar