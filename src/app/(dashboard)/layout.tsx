import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { getApiLimit } from "@/lib/apiLimit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimit();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-gray-900">
        <div className="h-full">
          <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        </div>
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
