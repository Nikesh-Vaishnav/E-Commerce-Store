import { AlignJustify, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { logoutUser, resetTokenAndCredentials } from "@/store/auth-slice";
import { useNavigate } from "react-router-dom";

function AdminHeader({ setOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    // dispatch(logoutUser());
    dispatch(resetTokenAndCredentials());
        sessionStorage.clear();
        navigate('/auth/login');
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-black border-b border-gray-700 text-white">
      <Button
        onClick={() => setOpen(true)}
        className="lg:hidden sm:block text-white bg-gray-800 hover:bg-white hover:text-black"
      >
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <div className="flex flex-1 justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md px-4 py-2 text-sm font-medium shadow text-white bg-gray-800 hover:bg-white hover:text-black"
        >
          <LogOut />
          Logout
        </Button>
      </div>
    </header>
  );
}

export default AdminHeader;
