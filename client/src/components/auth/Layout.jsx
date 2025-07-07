import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black">
        <div className="max-w-md space-y-6 text-center text-primary-font">
          <h1 className=" text-4xl text-amber-50 font-extrabold tracking-tight ">Welcome to OreoCommerce</h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
