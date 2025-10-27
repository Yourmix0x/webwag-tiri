import { Footer } from "./footer";
import { Header } from "./header";

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-indigo-950 dark:to-purple-950">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
